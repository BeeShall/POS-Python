from flask import session, Response, request, redirect
from flask_socketio import join_room, leave_room, send, emit
import json
from bson import json_util
from flask_cors import CORS, cross_origin
from models.database import Mongo_Client

from app import socketio

from utils.ReceiptGenerator import ReceiptGenerator


loggedInClients = {}
loggedInServers = []

@socketio.on('join')
def join(data):
	print(data)
	if data['staff']:
		#if its a server add them to the server list
		#when login is validated, this has to be called
		print("staff")
		if request.sid not in loggedInServers:
			loggedInServers.append(request.sid)
	else:
		#when customer page is loaded, this has to be called
		#we'll store the clients using their orderId because that is what the servers will send
		print("client")

		orderNo = session['orderNo']
		print(orderNo)
		if orderNo not in loggedInClients:
			loggedInClients[orderNo] = request.sid

		#if a client joined,
		# get specific order,
		order = json_util.dumps(Mongo_Client.GetOrdersWithDetails(orderNo))
		# all the servers should be notified about the new order
		print(loggedInServers)
		for server in loggedInServers:
				if server != request.sid:
					print("Sent to", server)
					emit('newCustomer',order, room=server)

@socketio.on('addOrder')
def addOrders(order):
	orderNo = None
	clientOrder = False
	#client made an order
	if 'orderNo' in session:
		clientOrder = True	
		orderNo = session['orderNo']
		#waitress made an order
	elif orderNo in order:
		orderNo = order["orderNo"]
	else:
		send("Unauthorized")
		return json.dumps({
				"error": "Unauthorized"
			})
	
	order["orderNo"] = orderNo
	if Mongo_Client.AddOrders(values, order):
		if clientOrder:
			#emit to every single server
			for server in loggedInServers:
				emit("Order Added",order, json=True, room=server)
		else:
			#emit to the specific client
			emit("Order Added", order, json=True, room = loggedInClients[orderNo])
			#emit every other server than the one
			for server in loggedInServers:
				if server != request.sid:
					emit("Order Added", order, json=True, room=server)

	else:
		send("Error")
	

@socketio.on('closeOrder')
@cross_origin()
def closeOrder():
	pass

@socketio.on('cancelOrder')
@cross_origin()
def cancelOrder():
	pass

@socketio.on('completeOrder')
@cross_origin()
def completeOrder():
	pass
