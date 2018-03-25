from flask import Flask, session, send_from_directory
from models.database import Mongo_Client
from datetime import timedelta
import os


from routes.auth import auth
from routes.employees import employees
from routes.menus import menus
from routes.orders import orders

static_folder = os.path.join(os.pardir, 'static')

app = Flask(__name__, static_url_path="/static")
app.secret_key = "POS.session"


app.register_blueprint(auth)
app.register_blueprint(employees)
app.register_blueprint(menus)
app.register_blueprint(orders)


Mongo_Client.CreateConnection()
Mongo_Client.InitializeDB()


@app.before_request
def make_session_permanent():
	session.permanent = True
	app.permanent_session_lifetime = timedelta(seconds=30)


@app.route('/')
def home():
	return app.send_static_file('index.html')

@app.route('/<path:path>')
def catch_all(path):
	if '.' in path:
		return app.send_static_file(path)
	else:
		return app.send_static_file('index.html')



if __name__ == "__main__":
	app.run(debug=True)
