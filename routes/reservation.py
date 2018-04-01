from flask import Blueprint, session, Response, request, redirect
import json
import os
import re
import datetime
from bson import json_util
from flask_cors import CORS, cross_origin
from models.database import Mongo_Client

from twilio.twiml.messaging_response import MessagingResponse
from twilio.rest import Client

reservation = Blueprint('reservation', __name__, url_prefix='/api')

print(os.environ['twilioSid'],os.environ['twilioPws'])

client = Client(os.environ['twilioSid'],os.environ['twilioPws'])

openingTime = datetime.datetime.now().replace(hour=10, minute=00)

#this should be the time until when the restaurant is willing to take reservations
closingTime = datetime.datetime.now().replace(hour=22, minute=00)

#implement holidays

@reservation.route('/makeReservation', methods=["GET","POST"])
@cross_origin()
def makeReservation():
	from_number = request.values.get('From')
	messageText = request.values.get("Body")
	if 'data' not in session:
		session['data'] = {}

	print(session['data'])
	
	replyMessage = setResponseForMessage(messageText, session['data'], from_number)

	resp = MessagingResponse()
	resp.message(replyMessage)
	return str(resp)

@reservation.route('/getReservations', methods=["GET"])
@cross_origin()
def getReservation():
	timeNow = datetime.datetime.now().isoformat()
	reservations = Mongo_Client.GetReservations(timeNow)
	if reservations is not None:
		return json.dumps({
			"success":True,
			"reservations": reservations
		})
	else:
		return json.dumps({
			"success":False
		})
	
	

def setResponseForMessage(message, data, from_number):
	if message.lower() == 'new':
		data.clear()
		data['reservation'] = True
	if message.lower() == 'cancel':
		data.clear()
		if Mongo_Client.CancelReservations(datetime.datetime.now().isoformat(), from_number):
			return "Your reservation has successfully been canceled!"
		else:
			return "Failed to cancel reservation! Please try again!"
	if 'reservation' not in data:
		if message.lower() == "reservation":
			data['reservation'] = True
			return "What date? (mm/dd/yy)"
		else:
			return "Please text 'reservation' to start your reservation or 'cancel' to cancel one "
	elif 'date' not in data:
		try:
			d = datetime.datetime.strptime(message,"%m/%d/%Y")
			data['date']= d
			#time must me 30 or 00
			return "What time? (24 hr and 30 mins slots"
		except:
			return "Please enter a valid date (mm/dd/yy)"
	elif 'time' not in data:
		try:
			d = datetime.datetime.strptime(message+":00","%H:%M:00")
			if d.minute() % 30 is not 0:
				return "Time should be a multiple of 30. Please try again!"
			data['time']= d

			resDate = datetime.datetime(data['date'].year,data['date'].month,data['date'].day,data['time'].hour,data['time'].minute)
			
			if resDate > datetime.datetime.now() and resDate.time() >= openingTime.time() and resDate.time() <= closingTime.time():

				#implementer has the options to set the reservation requirements and restrictions

				data['resDate'] = resDate
				return "How many people?"
			else:
				data.clear()
				return "The time you specified is not within our opening hours. Please start over!\nWhat date? "
			

		except:
			return "Please enter a valid time in 24 hr format"
	elif 'people' not in data:
		try:
			print(message)
			people = int(message)
			data["people"] = people
			if addReservation(data,from_number):
				return "Your reservation has been confirmed for "+ data['resDate'].strftime('%d, %b %Y %H:%M') +" for "+str(data["people"])+" people!"
			else:
				data.clear()
				return "Could not make reservation! Please start over!\nWhat date?"
		except:
			return "Please enter a valid number"
	else:
		return "Your reservation has already been confirmed for "+ data['resDate'].strftime('%d, %b %Y %H:%M') +" for "+str(data["people"])+" people!"+"\nPlease send 'new' to create a new reservation or 'cance' to cancel it!"

def addReservation(data, from_number):
	dbDocument = {
		"number":from_number,
		"date": data["resDate"].isoformat(),
		"people": data["people"]
	}

	if Mongo_Client.AddReservation(dbDocument):
		return True
	else:
		return False
