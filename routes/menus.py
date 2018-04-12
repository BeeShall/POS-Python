"""
	menus.py
	Description: This file is a Flask Blueprint file for all the routes and operations related to menus
	Date: 3/24/2018
	Author: Bishal Regmi

"""

from flask import Blueprint, session, Response, request, redirect
import json
from bson import json_util
from models.database import Mongo_Client
from flask_cors import CORS, cross_origin

menus = Blueprint('menus', __name__, url_prefix='/api')


@menus.route('/addMenu', methods=["POST"])
@cross_origin()
def addMenu():
	"""
        DESCRIPTION:
            This route is for adding a menu to the databse
        
        REQUEST TYPE: POST

        PARAMETERS:
            JSON containing the menu data

        RETURNS:
            menu id for the menu if successful
			else sends error message

    """
	#only authorized personnel can do this
	menu = request.get_json(silent=True)
	menuID = Mongo_Client.AddMenu(menu)
	if menuID is not None:
		return json.dumps({
			"success":True,
			"id":menuID
		})
	else:
		return json.dumps({
			"error":"Database Error!"
		})

@menus.route('/getAllMenu', methods=["GET"])
@cross_origin()
def getAllMenu():
	"""
        DESCRIPTION:
            This route is for getting all the menus in the database
        
        REQUEST TYPE: GET

        PARAMETERS:
            None

        RETURNS:
            list of all menus in the database

    """
	#only authorized personnel can do this
	menus = Mongo_Client.GetAllMenu()
	if menus is not None:
		return json_util.dumps({
			"success":True,
			"menus":menus
		})
	else:
		return json.dumps({
			"error":"Database Error!"
		})

@menus.route('/updateMenu', methods=["POST"])
@cross_origin()
def updateMenu():
	"""
        DESCRIPTION:
            This route is for updating specific menu in the database
        
        REQUEST TYPE: POST

        PARAMETERS:
            JSON object including the updated data along with menu ID

        RETURNS:
            success message if successful
			else sends and error

    """
	#only authorized personnel can do this
	menu = request.get_json(silent=True)
	if Mongo_Client.UpdateMenu(menu):
		return json.dumps({
			"success":True
		})
	else:
		return json.dumps({
			"error":"Database Error!"
		})

@menus.route('/deleteMenu', methods=["DELETE"])
@cross_origin()
def deleteMenu():
	"""
        DESCRIPTION:
            This route is for deleting a specific menu from the database
        
        REQUEST TYPE: DELETE

        PARAMETERS:
            menu ID for the menu to delete

        RETURNS:
            success message if successful
			else sends and error

    """
	#only authorized personnel can do this
	menuId = request.args.get('menuId')
	if Mongo_Client.DeleteMenu(menuId):
		return json.dumps({
			"success":True
		})
	else:
		return json.dumps({
			"error":"Database Error!"
		})