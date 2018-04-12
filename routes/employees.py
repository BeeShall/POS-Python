"""
	employees.py
	Description: This file is a Flask Blueprint file for all the routes related to employees and users
	Date: 3/24/2018
	Author: Bishal Regmi

"""

from flask import Blueprint, session, Response, request, redirect
import json
from bson import json_util
from flask_cors import CORS, cross_origin
from models.database import Mongo_Client

employees = Blueprint('employees', __name__, url_prefix='/api')

@employees.route('/addEmployee', methods=["POST"])
@cross_origin()
def addEmployee():

	"""
        DESCRIPTION:
            This route is for adding an employee to the employee collection
			This route can only be called by an admin
        
        REQUEST TYPE: POST

        PARAMETERS:
            JSON containing employee details to store in the databse

        RETURNS:
            username of the added employee if successful

    """
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

	"""
        DESCRIPTION:
            This route is for getting all employees in the database
        
        REQUEST TYPE: GET

        PARAMETERS:
            None

        RETURNS:
            list of all the employees in the databse

    """
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

@employees.route('/updateEmployee', methods=["POST"])
@cross_origin()
def updateEmployee():
	"""
        DESCRIPTION:
            This route is for updating information for a specific employee
        
        REQUEST TYPE: POST

        PARAMETERS:
            JSON containing the eployee details along with the username

        RETURNS:
            success message if successful
			else sends and Error

    """
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
	"""
        DESCRIPTION:
            This route is for deleting an employee from the database
        
        REQUEST TYPE: DELETE

        PARAMETERS:
            username for the employee to delete

        RETURNS:
            success message if successful
			else sends and Error

    """
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