"""
	database.py
	Description:
		1. This file is an API/middleware to communicate the mongodb database
	Date: 3/24/2018
	Author: Bishal Regmi

"""
import pymongo as pm
from bson.objectid import ObjectId
from utils.Hasher import Hasher


class Mongo_Client(object):
	"""
		Description: This class is a static class with all static methods to communicate
		with the MongoDb Datatbase
	"""

	#holds the connection to the databse
	db = None

	#to track the orderNumbers
	orderCount = 0

	#to keep track of all the logged in servers to distribute the orders evenly
	loggedInUsers = []

	#index to keep track for the loggedInUsers array
	serverIndex = 0

	@classmethod
	def CreateConnection(cls, db_address='mongodb://localhost:27017', db_name="PosDb"):
		"""
			DESCRIPTION:

				This method initializes the connection with the mongo db databse with the provided credentials.

			ARGUMENTS:

				db_address: the URL of the mongodb database to connect to
				db_name: the databse to connect to

			RETURNS:

				None
		"""
		print(" * Attempting to connect to MongoDB")
		cls.client = pm.MongoClient(db_address)
		cls.db = cls.client[db_name]
		print(" * Mongo client initialized...")



	@classmethod
	def InitializeDB(cls):
		"""
			DESCRIPTION:

				This static method initializes the database with all the collections, if the database is being started for the first time
				It also adds the admin credentials and initializes all the local values needed like orderNumbers counts

			ARGUMENTS:

				None

			RETURNS:

				None

		"""

		#all the collections in the database
		col = ["users", "menu", "orders", "bills", "reservations", "tables"]
		dbCols = cls.db.collection_names()

		#creating all the collections
		for i in range(0, len(col)):
			if(not col[i] in dbCols):
				Mongo_Client.db.create_collection(col[i])

		#data for the admin which is the default user
		admin_data = {
			"username": "admin",
			"password": Hasher.HashPassword("admin"),
			"userType": "ADMIN"
		}

		#adding admin credentials to the database
		try:
			cls.db["users"].update_one({"username": "admin"}, {
				"$set": admin_data}, upsert=True)
		except Exception as e:
			print("Exception while adding admin: ", e.message)

		#fetching the running order number which is the count of all the orders in the list
		try:
			ordersList = list(cls.db["orders"].find())
			cls.orderCount = len(ordersList)+1
		except Exception as e:
			print("Exception while tracking orderNo: ", e.message)


	@classmethod
	def GetCredentials(cls, username):
		"""
			DESCRIPTION:

				This method fetches the credentials from the users table for the given username

			ARGUMENTS:

				username: username to fetch the credentials for

			RETURNS:

				credentials for the given username, username and saved hashed password

		"""
		try:
			cursor = cls.db["users"].find({"username": username})
			data = cursor[0]
			return data
		except Exception as e:
			print("Exception while fetching credentials: ", e.message)
			return None



	@classmethod
	def GetAllMenu(cls):
		"""
			DESCRIPTION:

				This methods fetches all the menu from the database from the menu collection

			ARGUMENTS:

				None

			RETURNS:

				list of all the menus fromt the menu collection

		"""
		try:
			cursor = cls.db["menu"].find()
			return list(cursor)
		except Exception as e:
			print("Exception while getiing all menu: ", e.message)
			return None



	@classmethod
	def GetMenu(cls, menuId):
		"""
			DESCRIPTION:

				This class gets the menu for the given menuID from the menu collection 

			ARGUMENTS:

				menuID: The menuID to fetch the menu for

			RETURNS:

				The menu for the given menuID from the menu collection

		"""
		try:
			cursor = cls.db["menu"].find({"menuId": menuId})
			return cursor[0]
		except Exception as e:
			print("Exception while getting menu: ", e.message)
			return None



	@classmethod
	def AddMenu(cls, menu):
		"""
			DESCRIPTION:

				This class adds the given menu to the menu collection

			ARGUMENTS:

				menu: menu to tadd into the menus collection

			RETURNS:
				the id of the new menu if insertion is successful,
				else None

		"""
		try:
			result = cls.db["menu"].insert_one(menu)
			return str(result.inserted_id)
		except Exception as e:
			print("Exception while adding menu: ", e.message)
			return None



	@classmethod
	def UpdateMenu(cls, menu):
		"""
			DESCRIPTION:

				This class updates the provided menu in the menu collection

			ARGUMENTS:

				menu: object with the menuID and the detials to update

			RETURNS:

				True if update was successful
				False if update was unsuccessful

		"""
		try:
			result = cls.db["menu"].update_one({"_id": ObjectId(menu["menuId"])}, {
				"$set": menu}, upsert=True)
			#checking if the update was successful
			if result.modified_count > 0:
				return True
			else:
				return False
		except Exception as e:
			print("Exception while updating menu", e.message)
			return False



	@classmethod
	def DeleteMenu(cls, menuId):
		"""
			DESCRIPTION:

				This method deletes the menu with the provided menuID from the menu collection

			ARGUMENTS:

				menuID: the id of the menu document to delete

			RETURNS:
			
				True is delete was successful
				False if delete was unsuccessful

		"""
		try:
			result = cls.db["menu"].delete_one(
				{"_id": ObjectId(menuId)})

			#checking if the delete was successful
			if result.deleted_count > 0:
				return True
			else:
				return False
		except Exception as e:
			print("Exception while deleting menu", e.message)
			return False



	@classmethod
	def AddEmployee(cls, employee):
		"""
			DESCRIPTION:

				This method  generated a unique username for the given employee and
				adds an employee to the employee collection

			ARGUMENTS:

				employee: object to add to the empployee collection

			RETURNS:

				username of the employee if successful
				else None


		"""
		try:
			#generating a unique username for the given employee
			employee["username"] = cls.GenerateUserName(employee['fName'], employee['lName'])

			#hashing the password for the employee to store in the database
			employee["password"] = Hasher.HashPassword(employee['lName'])
			print(employee["password"])
			cls.db["users"].insert_one(employee)
			return employee["username"]
		except Exception as e:
			print("Exception while adding employee", e.message)
			return None



	@classmethod
	def GenerateUserName(cls, fName, lName):
		"""
			DESCRIPTION:

				This method generates a unique username using the given first and last name

			ARGUMENTS:

				fName: first name of the employee
				lName: last name of the employee

			RETURNS:

				unique username for the employee

		"""

		#the primary username would be first name and last name concatenated together
		username = fName.lower() + lName.lower()
		try:

			filt = { "$regex" : "^"+username }

			#checking if the username already exists
			cursor = cls.db["users"].find({"username": filt})
			usernames = list(cursor)

			#if the username is unique, then return it
			if len(usernames) == 0:
				return username
			#else add the length of the list of the employees with the same name to make it unique
			else:
				return username+str(len(usernames))

		except Exception as e:
			print("Exception while generating username", e.message)
			return None



	@classmethod
	def GetAllEmployees(cls):
		"""
			DESCRIPTION:

				This method gets all the employees of type STAFF existing in the employees collection

			ARGUMENTS:

				None

			RETURNS:

				list of all the STAFF employees existing in the collection


		"""
		try:
			cursor = cls.db["users"].find({"userType": "STAFF"})
			data = list(cursor)
			return data
		except Exception as e:
			print("Exception while fetching all employees", e.message)
			return None



	@classmethod
	def UpdateEmployee(cls, employee):
		"""
			DESCRIPTION:

				This method updates the provided employee in the employee collection

			ARGUMENTS:

				employee: obejct containing the update details and the employee Id

			RETURNS:
				
				True if update was successfull
				else False

		"""
		try:
			result = cls.db["users"].replace_one({"_id": ObjectId(employee["empId"])}, {
				"$set": employee}, upsert=True)

			#checking if the update was successful
			if result.modified_count > 0:
				return True
			else:
				return False
		except Exception as e:
			print("Exception while updating employee", e.message)
			return False



	@classmethod
	def DeleteEmployee(cls, username):
		"""
			DESCRIPTION:

				This methods deletes the employee with the given username from the employee collection

			ARGUMENTS:

				username: the username of the employee to delete

			RETURNS:
				True if the delete was successful
				else False

		"""
		try:
			result = cls.db["users"].delete_one({"username": username})

			#checking if the delete was successful
			if result.deleted_count > 0:
				return True
			else:
				return False
		except Exception as e:
			print("Exception while deleting employee", e.message)
			return False



	@classmethod
	def StartOrder(cls, orders):
		"""
			DESCRIPTION:

				This method starts an order by creating an empty order in the order collection

			ARGUMENTS:

				orders: object containing the basic data for the order document in the order collection containing tableNumbers and such

			RETURNS:

				orderId of the order generated
				else None

		"""
		try:
			#assigning the orderNo for the order and incrementing the orderNo
			orders['orderNo'] = cls.orderCount
			cls.orderCount += 1
			result = cls.db["orders"].insert_one(orders)
			orderId = str(result.inserted_id)
			print(orderId)
			return orderId
		except Exception as e:
			print("Exception while starting order", e.message)
			return None



	@classmethod
	def UpdateTable(cls, tableNo, orderId):
		"""
			DESCRIPTION:

				This method updates the table from the table collection with the orderId
				This method is used to keep track of the orders and prevent duplicate tabling

			ARGUMENTS:

				tableNo: table number to update
				orderId: current order id for the table

			RETURNS:

				True if the update was successful
				else False
		"""
		try:
			table_data = {
				"tableNo":tableNo,
				"orderId":orderId
			}
			result = cls.db["tables"].update_one({"tableNo": tableNo}, {
				"$set": table_data}, upsert=True)

			#checking if the update was successful

			if result.modified_count > 0:
				return True
			else:
				return False
		except Exception as e:
			print("Exception while updating table", e.message)
			return False



	@classmethod
	def ClearTableWithOrderNo(cls, orderId):
		"""
			DESCRIPTION:

				This method clears the assigned orderId from the table when the order is complete
				meaning the table is empty

			ARGUMENTS:

				orderId: the orderId for the respective table which needs to be cleared 

			RETURNS:

				True if the operation was successful
				else False

		"""
		try:
			result = cls.db["tables"].update_one({"orderId": orderId}, {
				"$set": {"orderId" : None}})

			#checking if the update was successful

			if result.modified_count > 0:
				return True
			else:
				return False
		except Exception as e:
			print("Exception while clearing tables", e.message)
			return False



	@classmethod
	def GetOrderNoForTable(cls, tableNo):
		"""
			DESCRIPTION:

				This method returns the orderNumber for the table number provided

			ARGUMENTS:

				tablNo: table number for which the order number is requested

			RETURNS:

				corresponding order number, if table is occupied i.e. table has an order number assigned
				else None

		"""
		try:
			cursor = cls.db["tables"].find({"tableNo":tableNo})
			if len(cursor) > 0:
				return cursor[0]["orderId"]
			else:
				return None
		except Exception as e:
			print("Exception while getting orderNo for table", e.message)
			return None



	@classmethod
	def AddOrders(cls, orders, orderId):
		"""
			DESCRIPTION:

				This method adds more orders to the order with the given orderId into the order collection

			ARGUMENTS:

				orders: an array of all the orders made by the client
				orderId: order id for the order to append the orders to

			RETURNS:
				True if the operation was successful
				else False

		"""
		try:
			update = {
				"$push": {
					"orders": {
						"$each": orders
					}
				}
			}
			result = cls.db["orders"].update_one(
				{"_id": ObjectId(orderId)}, update)

			#checking if addition was successful
			if result.modified_count > 0:
				return True
			else:
				return False
		except Exception as e:
			print("Exception while adding orders", e.message)
			return False



	@classmethod
	def GetOrdersWithDetails(cls, orderId):
		"""
			DESCRIPTION:

				To get the entire (Detailed) order document from the order collection with the given orderID

			ARGUMENTS:

				orderID: id for the order to fetch

			RETURNS:

				The order if operation was successful
				else None

		"""
		try:
			cursor = cls.db["orders"].find({"_id": ObjectId(orderId)})
			data = cursor[0]
			return data
		except Exception as e:
			print("Exception while getting order", e.message)
			return None



	@classmethod
	def GetOrders(cls, orderId):
		"""
			DESCRIPTION:

				This method get only the food orders array from the order collection with the given orderId

			ARGUMENTS:

				orderID: id for the order to fetch

			RETURNS:

				list of orders if successful
				else None

		"""
		orders = cls.GetOrdersWithDetails(orderId)
		if orders is not None:
			return orders['orders']
		else:
			return None



	@classmethod
	def GetActiveOrders(cls):
		"""
			DESCRIPTION:

				This method fetches all the active orders i.e. orders with status as 'INITIATED'
				from the orders collection

			ARGUMENTS:

				None

			RETURNS:

				list of all the active orders

		"""
		try:
			cursor = cls.db["orders"].find({"status": "INITIATED"})
			data = list(cursor)
			return data
		except Exception as e:
			print("Exception while getting active orders", e.message)
			return None



	@classmethod
	def CloseOrder(cls, orderId):
		"""
			DESCRIPTION:

				This method closes an order i.e. sets the status to "COMPLETED"

			ARGUMENTS:

				orderId: id of the order to close

			RETURNS:

				True if closing was successful
				else False

		"""
		try:
			update = {"$set": {"status": "COMPLETED"}}
			result = cls.db["orders"].update_one(
				{"_id": ObjectId(orderId)}, update)
			print(result.matched_count)

			#checking if closing was successful
			if result.modified_count > 0:
				return True
			else:
				return False
		except Exception as e:
			print("Exception while closing order", e.message)
			return False



	@classmethod
	def CancelOrder(cls, orderId, cancelId):
		"""
			DESCRIPTION:

				This method cancels a specific food order from the array in the order

			ARGUMENTS:

				orderId: id for the order to cancel the order from
				cancelId: date at which the order was made, used as the unique identifier for the orders in the array

			RETURNS:

				True if cancellation was successful
				else False

		"""
		try:
			print(orderId)
			update = {
				"$pull": {
					"orders": {
						"date": cancelId
					}
				}
			}
			result = cls.db["orders"].update_one(
				{"_id": ObjectId(orderId)}, update)

			#checking to see if the order was canceled
			if result.modified_count > 0:
				return True
			else:
				return False
		except Exception as e:
			print("Exception while canceling order", e.message)
			return False



	@classmethod
	def UpdateOrder(cls, orderId, data):
		"""
			DESCRIPTION:

				This method updates an order with the given data

			ARGUMENTS:

				orderId: id of the order to update
				data: new data that needs to be updated

			RETURNS:

				True if the update was successful
				else False


		"""
		try:
			update = {"$set": data}
			result = cls.db["orders"].update_one(
				{"_id": ObjectId(orderId)}, update, upsert=True)

			#checking if the update was successful
			if result.modified_count > 0:
				return True
			else:
				return False
		except Exception as e:
			print("Exception while closing order", e.message)
			return False



	@classmethod
	def AddReview(cls, menuId, review):
		"""
			DESCRIPTION:

				This method add a review to the review array for the specified menu in the menus collection

			ARGUMENTS:

				menuId: id for the menu to add the reviews to
				review: review to add

			RETURNS:

				True if review was added
				else False

		"""
		try:
			update = {
				"$push": {
					"reviews": review
				}
			}
			result = cls.db["menu"].update_one(
				{"_id": ObjectId(menuId)}, update)

			#checking if the update was successful
			if result.modified_count > 0:
				return True
			else:
				return False
		except Exception as e:
			print("Exception while adding review", e.message)
			return False



	@classmethod
	def GetReviews(cls, menuId):
		"""
			DESCRIPTION:

				This method fecthes all the reviews for the given menu from the menu collection

			ARGUMENTS:

				menuID: id for the menu to get the reviews for

			RETURNS:

				list of reviews for the given menu

		"""
		try:
			pass
		except Exception as e:
			print("Exception while fetching review", e.message)
			return None



	@classmethod
	def AddReservation(cls, reservation):
		"""
			DESCRIPTION:

				This method adds a new reservation to the reservations collection

			ARGUMENTS:

				reservation: object containing reservation information

			RETURNS:

				True if insertion was successful
				else False

		"""
		try:
			cls.db["reservations"].insert_one(reservation)
			return True
		except Exception as e:
			print("Exception while adding Reservation", e.message)
			return False



	@classmethod
	def GetReservations(cls, date):
		"""
			DESCRIPTION:

				This method is used to fetch the reservation for the the time later than the given date

			ARGUMENTS:

				date: date to use the reference to get the lates reservations

			RETURNS:

				list of al the reservations after the given date

		"""
		try:
			filt = {"date": {"$gte" : date}}
			cursor = cls.db["reservations"].find(filt, {'_id': False})
			return list(cursor)
		except Exception as e:
			print("Exception while fetching reservations", e.message)
			return None



	@classmethod
	def CancelReservations(cls, date, number):
		"""
			DESCRIPTION:

				This method is used to cancel a reservation

			ARGUMENTS:

				date: date for which the reservation to cancel
				number: phone number used to make the reservation

			RETURNS:

				True if cancellation was successful
				else False


		"""
		try:
			filt = {"date": {"$gte" : date}, "number":number}
			result = cls.db["reservations"].delete_one(filt)
			
			#checking if the delete was successful
			if result.modified_count > 0:
				return True
			else:
				return False
		except Exception as e:
			print("Exception while fetching reservations", e.message)
			return False
