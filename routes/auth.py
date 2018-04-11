"""
	auth.py
	Description: This file is a Flask Blueprint file for all the authentication routes
	Date: 3/24/2018
	Author: Bishal Regmi

"""

from flask import Blueprint, session, Response, request, redirect
from flask_cors import CORS, cross_origin
from utils.Hasher import Hasher
from models.database import Mongo_Client
import json

auth = Blueprint('auth', __name__, url_prefix='/api')


@auth.route("/logoutuser", methods=['GET'])
@cross_origin()
def logout():
    """
        DESCRIPTION:
            This route is for logging out users which is removing the username from session.
        
        REQUEST TYPE: GET

        PARAMETERS: None

        RETURNS: string message

    """

    #removing the sever fromt he list of servers
    Mongo_Client.loggedInUsers.remove(session['username'])

    #removing the server from session
    session.pop('username', None)
    session.pop('role', None)
    return 'Logged out successfully!', 200


@auth.route('/login', methods=['POST'])
@cross_origin()
def login():
   """
        DESCRIPTION:
            This route is for logging out users which is removing the username from session.
        
        REQUEST TYPE: POST

        PARAMETERS:
            { username : <username>, password: <password>}

        RETURNS:
            redirects the page based on the login role

    """

    #getting the parameters from the request
    value = request.get_json(silent=True)

    #checking if the username exists and fetching the hashed password
    correctCred = Mongo_Client.GetCredentials(value['username'])

    print(correctCred)

    #checking if the password match
    if (correctCred is not None and Hasher.ValidatePassword(value['password'], correctCred['password'])):

        #storing the username and role in session to ensure logged in
        session['username'] = correctCred['username']
        session['role'] = correctCred['userType']

        #if the user is admin, redirect to admin page
        if correctCred['userType'] == 'ADMIN':
            return json.dumps({
                "redirect": "admin",
                 "success": True
                 })
        else:
            #if the user is a server, add them to the list of available servers and redirect to the waitress portal
            Mongo_Client.loggedInUsers.append(correctCred['username'])
            return json.dumps({
                "redirect": "waitress",
                 "success": True
                 })
    else:
        return json.dumps({"success": False})
