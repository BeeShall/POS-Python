"""
	app.py
	Description:
		1. This class starts the Flask server
		2. Attaches websockets with the app
		3. Registers all the HTTP routes and websockets
	Date: 3/24/2018
	Author: Bishal Regmi
"""

from flask import Flask, session, send_from_directory
from flask_socketio import SocketIO
from models.database import Mongo_Client
from datetime import timedelta
import os

#importing all the routes from the blueprints
from routes.auth import auth
from routes.employees import employees
from routes.menus import menus
from routes.orders import orders
from routes.reservation import reservation

#setting the path for the app to seve all the static files i.e. the Angular application
static_folder = os.path.join(os.pardir, 'static')

app = Flask(__name__, static_url_path="/static")
app.secret_key = "POS.session"

#initializing the app as a websocket application
socketio = SocketIO(app)

import routes.socketsEvents

#registering all the blueprints for the routes
app.register_blueprint(auth)
app.register_blueprint(employees)
app.register_blueprint(menus)
app.register_blueprint(orders)
app.register_blueprint(reservation)

#initializing the database connection
Mongo_Client.CreateConnection()
Mongo_Client.InitializeDB()


#specifying the session congiuration
@app.before_request
def make_session_permanent():
	session.permanent = True
	app.permanent_session_lifetime = timedelta(minutes=5)

#default roure for the app will server the index.html file from delegated to Angular application
@app.route('/')
def home():
	return app.send_static_file('index.html')

#any route that cannot be caught by the server are delegated to the Angular application routing
@app.route('/<path:path>')
def catch_all(path):
	if '.' in path:
		return app.send_static_file(path)
	else:
		return app.send_static_file('index.html')


if __name__ == "__main__":
	app.debug = True
	socketio.run(app)