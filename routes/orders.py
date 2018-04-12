"""
	orders.py
	Description: This file is a Flask Blueprint file for all the routes and operations related to the orders
	Date: 3/24/2018
	Author: Bishal Regmi

"""

from flask import Blueprint, session, Response, request, redirect
import json
from bson import json_util
from flask_cors import CORS, cross_origin
from models.database import Mongo_Client
from utils.Mailer import Mailer

from utils.ReceiptGenerator import ReceiptGenerator

orders = Blueprint('orders', __name__, url_prefix='/api')



@orders.route('/startOrder', methods=["GET"])
@cross_origin()
def startOrder():
	"""
        DESCRIPTION:
            This route is for starting an order when the client accesses the link
        
        REQUEST TYPE: GET

        PARAMETERS:
            tableNo: table number to start the order

        RETURNS:
            redirects to the customer portal

    """
	if 'orderNo' not in session:
		tableNo = request.args.get('tableNo')
		print("tableNo", tableNo)

		#checking if already on table
		orderId = Mongo_Client.GetOrderNoForTable(tableNo) 
		print(orderId)

		#if table has been occupied
		if orderId is not None:
			session['orderNo'] = orderId
			print("Table already occupied! orderNo:", orderId)
			return redirect("/customer")
		else:

			#get the server from the array to track turn and set it
			orders = {
				"orders": [],
				"tableNo": tableNo,
				"status": "INITIATED",
				"server": "BISHAL"
			}

			orderNo = Mongo_Client.StartOrder(orders)

			#starting a new order and setting the table as occupied
			if orderNo is not None:
				Mongo_Client.UpdateTable(tableNo,orderNo)
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
	"""
        DESCRIPTION:
            This route is for adding menu orders to a specific order
        
        REQUEST TYPE: POST

        PARAMETERS:
            list of menu orders to add

        RETURNS:
            redirects the page based on the login role

    """

	#order no is accessed from the session
	#if it doesn't exist then, table is empty
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
	"""
        DESCRIPTION:
            This route is for getting all the orders for a specific table/customer
        
        REQUEST TYPE: GET

        PARAMETERS:
            None

        RETURNS:
            list of all the orders for the specifc table/customer

    """

	#order no is accessed from the session
	#if it doesn't exist then, table is empty
	if 'orderNo' in session:
		orderNo = session['orderNo']
		values = request.get_json(silent=True)
		orders = Mongo_Client.GetOrders(orderNo)
		if orders is not None:
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
	"""
        DESCRIPTION:
            This route is for getting all the active orders in the restaurant
        
        REQUEST TYPE: GET

        PARAMETERS:
            None

        RETURNS:
            list of all the active orders in the restaurant

    """
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
	"""
        DESCRIPTION:
            This route is for closing a specific order
        
        REQUEST TYPE: POST

        PARAMETERS:
			if its the customer, None
			if its the waitress, order id is passed as "orderNo"

        RETURNS:
            error/success message

    """
	#order no is accessed from the session
	#if it doesn't exist then, either table is empty or the waitress is closing the order
	orderNo = None
	if 'orderNo' in session:
		orderNo = session["orderNo"]
	#if waitress is closing the order then the order number is sent as a parameter
	else:
		orderNo = request.args.get('orderNo')
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

	# 
	print(orderNo)
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
	"""
        DESCRIPTION:
            This route is for canceling a specifc order for a table/customer
        
        REQUEST TYPE: POST

        PARAMETERS:
            orderId: order number from which the order to cancel
			cancelId: the date stamp for when the order was made

        RETURNS:
            success/error message

    """
	# only authorized user can do this
	values = request.get_json(silent=True)
	print(values)
	if Mongo_Client.CancelOrder(values['orderId'], values['cancelId']):
		return json.dumps({
			"success": True
		})
	else:
		return json.dumps({
			"error": "Database Error!"
		})


@orders.route('/completeOrder', methods=["POST"])
@cross_origin()
def completeOrder():
	"""
        DESCRIPTION:
            This route is for completing the order/payment for a specific table/customer
        
        REQUEST TYPE: POST

        PARAMETERS:
            JSON object containing payment details 

        RETURNS:
            order ID of the order just closed

    """
	#order no is accessed from the session
	#if it doesn't exist then, table is empty
	orderNo = None
	values = request.get_json(silent=True)
	if 'orderNo' in session:
		orderNo = session["orderNo"]
	
	#if waitress is closing the order then the order number is sent as a parameter
	else:
		orderNo = values["orderNo"]
	
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

	# orderNo = request.args.get('orderNo')
	
	print(values)
	print(orderNo)

	#update the order status to completed
	if Mongo_Client.UpdateOrder(orderNo, values):
		print("order updated")

		#remove the order number for session
		session.pop("orderNo", None)

		#clear the order id from the table colectition for the resoective tabel
		Mongo_Client.ClearTableWithOrderNo(orderNo)
		return json.dumps({
			"success": True,
			"orderId": orderNo
		})
	else:
		return json.dumps({
			"error": "Database Error"
		})

@orders.route('/addTip', methods=["POST"])
@cross_origin()
def addTip():
	"""
        DESCRIPTION:
            This route is for adding tip for an order
        
        REQUEST TYPE: POST

        PARAMETERS:
            JSON containing tip amount

        RETURNS:
            success/error message

    """
	values = request.get_json(silent=True)
	if Mongo_Client.UpdateOrder(values["orderId"], {"tip":values["tip"]}):
		session.pop("orderNo", None)
		return json.dumps({
			"success": True
		})
	else:
		return json.dumps({
			"error": "Database Error"
		})



@orders.route('/addReview', methods=["POST"])
@cross_origin()
def addReview():
	"""
        DESCRIPTION:
            This route is for adding a customer review to a menu item
        
        REQUEST TYPE: POST

        PARAMETERS:
            JSON object containing reviews and ratings and menu id for the menu

        RETURNS:
            success/error message

    """
	values = request.get_json(silent=True)
	if Mongo_Client.AddReview(values["menuId"], values["review"]):
		return json.dumps({
			"success": True
		})
	else:
		return json.dumps({
			"error": "Database Error"
		})


@orders.route('/emailReceipt', methods=["POST"])
@cross_origin()
def emailReceipt():
	"""
        DESCRIPTION:
            This route is for emailing the order receipt to user
        
        REQUEST TYPE: POST

        PARAMETERS:
            orderID: order ID to generate receipt for
			email: email address tp send the email to.

        RETURNS:
            success/error message

    """
	values = request.get_json(silent=True)
	print(values)

	#get detailed order to generate receipt for
	orders = Mongo_Client.GetOrdersWithDetails(values["orderId"])
	menus = Mongo_Client.GetAllMenu()

	if orders is not None and menus is not None:
		#generate receipt
		receipt = ReceiptGenerator.generateInvoice(orders, menus)
		print("Receipt generated")
		#send email
		if Mailer.send_mail(values["email"], receipt):
			print("Mail sent")
			return json.dumps({
					"success": True
				})
		else:
			print("error sending mail")
			return json.dumps({
				"error":"Error sending email!"
			})
	else:
		return json.dumps({
			"error": "Database Error!"
		})


