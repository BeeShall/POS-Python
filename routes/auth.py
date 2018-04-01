from flask import Blueprint, session, Response, request, redirect
from flask_cors import CORS, cross_origin
from utils.Hasher import Hasher
from models.database import Mongo_Client
import json

auth = Blueprint('auth', __name__, url_prefix='/api')


@auth.route("/logoutuser", methods=['GET'])
@cross_origin()
def logout():
    Mongo_Client.loggedInUsers.remove(session['username'])
    session.pop('username', None)
    session.pop('role', None)
    return 'Logged out successfully!', 200


@auth.route('/login', methods=['POST'])
@cross_origin()
def login():
    value = request.get_json(silent=True)
    correctCred = Mongo_Client.GetCredentials(value['username'])

    print(correctCred)

    if (correctCred is not None and Hasher.ValidatePassword(value['password'], correctCred['password'])):
        session['username'] = correctCred['username']
        session['role'] = correctCred['userType']
        if correctCred['userType'] == 'ADMIN':
            return json.dumps({
                "redirect": "admin",
                 "success": True
                 })
        else:
            Mongo_Client.loggedInUsers.append(correctCred['username'])
            return json.dumps({
                "redirect": "waitress",
                 "success": True
                 })
    else:
        return json.dumps({"success": False})
