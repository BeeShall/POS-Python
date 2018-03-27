import pymongo as pm
from bson.objectid import ObjectId
from utils.Hasher import Hasher


class Mongo_Client(object):

	db = None
	orderCount = 0

	@classmethod
	def CreateConnection(cls, db_address='mongodb://localhost:27017', db_name="PosDb"):
		print(" * Attempting to connect to MongoDB")
		cls.client = pm.MongoClient(db_address)
		cls.db = cls.client[db_name]
		print(" * Mongo client initialized...")

	@classmethod
	def InitializeDB(cls):
		col = ["users", "menu", "orders", "bills", "reservation"]
		dbCols = cls.db.collection_names()

		for i in range(0, len(col)):
			if(not col[i] in dbCols):
				Mongo_Client.db.create_collection(col[i])

		admin_data = {
			"username": "admin",
			"password": Hasher.HashPassword("admin"),
			"userType": "ADMIN"
		}

		try:
			cls.db["users"].update_one({"username": "admin"}, {
				"$set": admin_data}, upsert=True)
		except Exception as e:
			print("Exception while addinf admin: ", e.message)

		try:
			ordersList = list(cls.db["orders"].find())
			cls.orderCount = len(ordersList)+1
		except Exception as e:
			print("Exception while tracking orderNo: ", e.message)

	@classmethod
	def GetCredentials(cls, username):
		try:
			cursor = cls.db["users"].find({"username": username})
			data = cursor[0]
			return data
		except Exception as e:
			print("Exception while fetching credentials: ", e.message)
			return None

	@classmethod
	def GetAllMenu(cls):
		try:
			cursor = cls.db["menu"].find()
			return list(cursor)
		except Exception as e:
			print("Exception while getiing all menu: ", e.message)
			return None

	@classmethod
	def GetMenu(cls, menuId):
		try:
			cursor = cls.db["menu"].find({"menuId": menuId})
			return cursor[0]
		except Exception as e:
			print("Exception while getting menu: ", e.message)
			return None

	@classmethod
	def AddMenu(cls, menu):
		try:
			result = cls.db["menu"].insert_one(menu)
			return str(result.inserted_id)
		except Exception as e:
			print("Exception while adding menu: ", e.message)
			return None

	@classmethod
	def UpdateMenu(cls, menu):
		try:
			result = cls.db["menu"].replace_one({"_id": ObjectId(menu["menuId"])}, {
				"$set": menu}, upsert=True)
			if result.modified_count > 0:
				return True
			else:
				return False
		except Exception as e:
			print("Exception while updating menu", e.message)
			return False

	@classmethod
	def DeleteMenu(cls, menu):
		try:
			result = cls.db["menu"].delete_one(
				{"_id": ObjectId(menu["menuId"])})
			if result.deleted_count > 0:
				return True
			else:
				return False
		except Exception as e:
			print("Exception while deleting menu", e.message)
			return False

	@classmethod
	def AddEmployee(cls, employee):
		try:
			employee["username"] = cls.GenerateUserName(
				employee['fName'], employee['lName'])
			cls.db["users"].insert_one(employee)
			return employee["username"]
		except Exception as e:
			print("Exception while adding employee", e.message)
			return None

	@classmethod
	def GenerateUserName(cls, fName, lName):
		username = fName.lower() + lName.lower()
		try:
			filt = ".*" + username + ".*"
			cursor = cls.db["users"].find({"username": filt})
			usernames = list(cursor)
			if len(usernames) == 0:
				return username
			else:
				return username+len(usernames)

		except Exception as e:
			print("Exception while generating username", e.message)
			return None

	@classmethod
	def GetAllEmployees(cls):
		try:
			cursor = cls.db["users"].find({"userType": "STAFF"})
			data = list(cursor)
			return data
		except Exception as e:
			print("Exception while fetching all employees", e.message)
			return None

	@classmethod
	def UpdateEmployee(cls, employee):
		try:
			result = cls.db["users"].replace_one({"_id": ObjectId(employee["empId"])}, {
				"$set": employee}, upsert=True)
			if result.modified_count > 0:
				return True
			else:
				return False
		except Exception as e:
			print("Exception while updating employee", e.message)
			return None

	@classmethod
	def DeleteEmployee(cls, username):
		try:
			result = cls.db["users"].delete_one({"username": username})
			if result.deleted_count > 0:
				return True
			else:
				return False
		except Exception as e:
			print("Exception while deleting employee", e.message)
			return None

	@classmethod
	def StartOrder(cls, orders):
		try:
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
	def AddOrders(cls, orders, orderId):
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
			if result.modified_count > 0:
				return True
			else:
				return False
		except Exception as e:
			print("Exception while adding orders", e.message)
			return False

	@classmethod
	def GetOrdersWithDetails(cls, orderId):
		try:
			cursor = cls.db["orders"].find({"_id": ObjectId(orderId)})
			data = cursor[0]
			return data
		except Exception as e:
			print("Exception while getting order", e.message)
			return None

	@classmethod
	def GetOrders(cls, orderId):
		orders = cls.GetOrdersWithDetails(orderId)
		if orders is not None:
			return orders['orders']
		else:
			return None

	@classmethod
	def GetActiveOrders(cls):
		try:
			cursor = cls.db["orders"].find({"status": "INITIATED"})
			data = list(cursor)
			return data
		except Exception as e:
			print("Exception while getting active orders", e.message)
			return None

	@classmethod
	def CloseOrder(cls, orderId):
		try:
			update = {"$set": {"status": "COMPLETED"}}
			result = cls.db["orders"].update_one(
				{"_id": ObjectId(orderId)}, update)
			print(result.matched_count)
			if result.modified_count > 0:
				return True
			else:
				return False
		except Exception as e:
			print("Exception while closing order", e.message)
			return False

	@classmethod
	def CancelOrder(cls, orderId, cancelId):
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
			if result.modified_count > 0:
				return True
			else:
				return False
		except Exception as e:
			print("Exception while canceling order", e.message)
			return False

	@classmethod
	def UpdateOrder(cls, orderId, data):
		try:
			update = {"$set": data}
			result = cls.db["orders"].update_one(
				{"_id": ObjectId(orderId)}, update, upsert=True)
			if result.modified_count > 0:
				return True
			else:
				return False
		except Exception as e:
			print("Exception while closing order", e.message)
			return False

	@classmethod
	def AddReview(cls, menuId, review):
		try:
			update = {
				"$push": {
					"reviews": review
				}
			}
			result = cls.db["menu"].update_one(
				{"_id": ObjectId(menuId)}, update)
			if result.modified_count > 0:
				return True
			else:
				return False
		except Exception as e:
			print("Exception while adding review", e.message)
			return False

	@classmethod
	def GetReviews(cls, menuId):
		try:
			pass
		except Exception as e:
			print("Exception while fetching review", e.message)
			return None

	@classmethod
	def AddReservation(cls, reservation):
		try:
			pass
		except Exception as e:
			print("Exception while adding Reservation", e.message)
			return None

	@classmethod
	def GetReservations(cls):
		try:
			pass
		except Exception as e:
			print("Exception while fetching reservations", e.message)
			return None
