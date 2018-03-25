from flask import Blueprint, session, Response, request
from flask_cors import CORS, cross_origin
from utils.Hasher import Hasher
from models.database import Mongo_Client
import json

auth = Blueprint('auth', __name__, url_prefix='/api')

@auth.route("/logoutuser", methods=['GET'])
@cross_origin()
def logout():
    session.pop('username', None)
    return 'Logged out successfully!', 200


@auth.route('/login', methods=['POST'])
@cross_origin()
def login():
    value = request.get_json(silent=True)
    correctCred = Mongo_Client.GetCredentials(value['username'])
    
    print(correctCred)

    if(correctCred is not None and Hasher.ValidatePassword(value['password'], correctCred['password'])):
        session['username'] = correctCred['username']
        session['role'] = correctCred['userType']
        data = {"success":True}
        return json.dumps(data)
    else:
        data = {"success":False}
        return json.dumps(data)


        