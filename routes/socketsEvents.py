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
				print("Sent to", server)
				emit('newCustomer',order, room=server)

@socketio.on('addOrder')
def addOrders(data):
	orderNo = None
	clientOrder = False
	print(data)
	#client made an order
	if 'orderNo' in session:
		clientOrder = True	
		orderNo = session['orderNo']
		#waitress made an order
	elif 'orderNo' in data:
		orderNo = data["orderNo"]
	else:
		send("Unauthorized")
		return json.dumps({
				"error": "Unauthorized"
			})
	
	print(loggedInClients)
	print(loggedInServers)
	if Mongo_Client.AddOrders(data["orders"], orderNo):

		#emit to the specific client
		emit("Order Added", {"success":True, "orders": data["orders"]}, json=True, room = loggedInClients[orderNo])
		#emit to all the servers
		for server in loggedInServers:
			print("Sent to", server)
			emit("Order Added", {"success":True, "data": {"orderNo":orderNo, "orders": data["orders"]}}, json=True, room=server)

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
def completeOrder(orderNo):
	for server in loggedInServers:
		print("Sent to", server)
		emit("Completed Order", {"orderNo":orderNo}, json=True, room=server)
