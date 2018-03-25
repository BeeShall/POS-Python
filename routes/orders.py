from flask import Blueprint, session, Response, request, redirect
import json
from bson import json_util
from flask_cors import CORS, cross_origin
from models.database import Mongo_Client

orders = Blueprint('orders', __name__, url_prefix='/api')


@orders.route('/startOrder', methods=["GET"])
@cross_origin()
def startOrder():
	if 'orderNo' not in session:
		tableNo = request.args.get('tableNo')
		print("tableNo", tableNo)
		orders = {
			"orders": [],
			"tableNo": tableNo,
			"status": "INITIATED",
			"server": "BISHAL"
		}

		orderNo = Mongo_Client.StartOrder(orders)
		if orderNo is not None:
			session['orderNo'] = orderNo
			print("New order", orderNo)
			return redirect("/customer")
		else:
			return redirect("/xx")
	else:
		print("orderNo in session")
		return redirect("/customer")


@orders.route('/addOrders', methods=["POST"])
@cross_origin()
def addOrders():
	if 'orderNo' in session:
		orderNo = session['orderNo']
		values = request.get_json(silent=True)
		print(values)
		if Mongo_Client.AddOrders(values, orderNo):
			return json.dumps({
				"success": True
			})
		else:
			return json.dumps({
				"error": "Database Error"
			})
	else:
		return json.dumps({
			"error": "Unauthorized"
		})


@orders.route('/getAllOrders', methods=["GET"])
@cross_origin()
def getAllOrders():
	if 'orderNo' in session:
		orderNo = session['orderNo']
		values = request.get_json(silent=True)
		orders = Mongo_Client.GetOrders(orderNo)
		if orders is not None :
			return json_util.dumps({
				"success": True,
				"orders": orders
			})
		else:
			return json.dumps({
				"error": "Database Error"
			})
	else:
		return json.dumps({
			"error": "Unauthorized"
		})


@orders.route('/getAllActiveOrders', methods=["GET"])
@cross_origin()
def getAllActiveOrders():
	# only authorized users are allowed to do this
	orders = Mongo_Client.GetActiveOrders()
	if orders is not None:
		return json_util.dumps({
			"success": True,
			"orders": orders
		})
	else:
		return json.dumps({
			"error": "Database Error"
		})


@orders.route('/closeOrder', methods=["GET"])
@cross_origin()
def closeOrder():
	orderNo = None
	if 'orderNo' in session:
		orderNo = session["orderNo"]
	'''
	elif 'role' in session:
		orderNo = request.args.get('orderNo')
		if orderNo is None:
			return json.dumps({
				"error": "limited arguments"
			})
	else:
		return json.dumps({
				"error": "Unauthorized"
			})
	'''

	orderNo = request.args.get('orderNo')
	if Mongo_Client.CloseOrder(orderNo):
		return json.dumps({
			"success": True
		})
	else:
		return json.dumps({
			"error": "Database Error"
		})


@orders.route('/cancelOrder', methods=["POST"])
@cross_origin()
def cancelOrder():
	#only authorized user can do this
	values = request.get_json(silent=True)
	print(values)
	if Mongo_Client.CancelOrder(values['orderId'], values['cancelId']):
		return json.dumps({
			"success":True
		})
	else:
		return json.dumps({
			"error":"Database Error!"
		})

