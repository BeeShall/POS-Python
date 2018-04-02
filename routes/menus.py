from flask import Blueprint, session, Response, request, redirect
import json
from bson import json_util
from models.database import Mongo_Client
from flask_cors import CORS, cross_origin

menus = Blueprint('menus', __name__, url_prefix='/api')


@menus.route('/addMenu', methods=["POST"])
@cross_origin()
def addMenu():
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