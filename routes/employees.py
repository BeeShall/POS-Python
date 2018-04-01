from flask import Blueprint, session, Response, request, redirect
import json
from bson import json_util
from flask_cors import CORS, cross_origin
from models.database import Mongo_Client

employees = Blueprint('employees', __name__, url_prefix='/api')

@employees.route('/addEmployee', methods=["POST"])
@cross_origin()
def addEmployee():
	#only authorized users can do this
	employee = request.get_json(silent=True)
	employee['userType'] = "STAFF"
	username = Mongo_Client.AddEmployee(employee)

	if username is not None:
		return json.dumps({
			"success":True,
			"username":username,
		})
	else:
		return json.dumps({
			"error":"Database Error!"
		})


@employees.route('/getAllEmployees', methods=["GET"])
@cross_origin()
def getAllEmployees():
	#only authorized users can do this
	employees = Mongo_Client.GetAllEmployees()
	if employees is not None:
		return json_util.dumps({
			"success":True,
			"employees":employees
		})
	else:
		return json.dumps({
			"error":"Databse Error!"
		})

@employees.route('/updateEmployee', methods=["DELETE"])
@cross_origin()
def updateEmployee():
	#only authorized users can do this
	employee = request.get_json(silent=True)
	username = Mongo_Client.UpdateEmployee(employee)

	if username is not None:
		return json.dumps({
			"success":True
		})
	else:
		return json.dumps({
			"error":"Database Error!"
		})


@employees.route('/deleteEmployee', methods=["DELETE"])
@cross_origin()
def deleteEmployee():
	#only authorized users can do this
	username = request.args.get('username')
	if Mongo_Client.DeleteEmployee(username):
		return json.dumps({
			"success":True
		})
	else:
		return json.dumps({
			"error":"Database Error!"
		})