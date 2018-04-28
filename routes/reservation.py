"""
	reservation.py
	Description: This file is a Flask Blueprint file for all the routes and operations related to reservations
		All the parameters sent are what the twilio API sends
	Date: 3/24/2018
	Author: Bishal Regmi

"""

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

#getting the twitio authenticaion details from the environment variables
client = Client(os.environ['twilioSid'],os.environ['twilioPws'])

openingTime = datetime.datetime.now().replace(hour=10, minute=00)

#this should be the time until when the restaurant is willing to take reservations
closingTime = datetime.datetime.now().replace(hour=22, minute=00)

#implement holidays

@reservation.route('/makeReservation', methods=["GET","POST"])
@cross_origin()
def makeReservation():
	"""
        DESCRIPTION:
            This route is for making a reservation through text
        
        REQUEST TYPE: GET, POST

        RETURNS:
            response based on the user text

    """
	from_number = request.values.get('From')
	messageText = request.values.get("Body")

	#saving all the conversation history to session to keep track of responses
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
	"""
        DESCRIPTION:
            This route is for getting all the reservation after the current date
        
        REQUEST TYPE: GET

		PARAMETERS:
			None

        RETURNS:
            list of all the reservations after the current date

    """
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
	"""
        DESCRIPTION:
            This method is for generating an appropriate resposne for the given user text

        PARAMETERS:
           message: message sent by the user
		   data: coversation history stores in the session for the number
		   from_number: phone number that made the reservation

        RETURNS:
            redirects the page based on the login role

    """

	#user wants to start a nee reservation
	if message.lower() == 'new':
		data.clear()
		data['reservation'] = True
	#user wants to cancel a reservation
	if message.lower() == 'cancel':
		data.clear()
		#delete from the database
		if Mongo_Client.CancelReservations(datetime.datetime.now().isoformat(), from_number):
			return "Your reservation has successfully been canceled!"
		else:
			return "Failed to cancel reservation! Please try again!"
	#user hasn't started a reservation yet
	if 'reservation' not in data:
		if message.lower() == "reservation":
			data['reservation'] = True
			return "What date? (mm/dd/yy)"
		else:
			return "Please text 'reservation' to start your reservation or 'cancel' to cancel one "
	#user hasn't specifed the reservation date yet
	elif 'date' not in data:
		try:
			d = datetime.datetime.strptime(message,"%m/%d/%Y")
			data['date']= d
			#time must me 30 or 00
			return "What time? (24 hr and 30 mins slots"
		except:
			return "Please enter a valid date (mm/dd/yy)"
	#user hasn't specified the reservation time yet
	elif 'time' not in data:
		try:
			d = datetime.datetime.strptime(message+":00","%H:%M:00")
			if d.minute % 30 != 0:
				return "Time should be a multiple of 30. Please try again!"
			
			data['time']= d

			resDate = datetime.datetime(data['date'].year,data['date'].month,data['date'].day,data['time'].hour,data['time'].minute)

			
			#checking if the reservation time is after the cuurent date
			if resDate > datetime.datetime.now() and resDate.time() >= openingTime.time() and resDate.time() <= closingTime.time():

				#implementer has the options to set the reservation requirements and restrictions

				data['resDate'] = resDate
				return "How many people?"
			else:
				data.clear()
				return "The time you specified is not within our opening hours. Please start over!\nWhat date? "
			

		except Exception as e :
			print("Error with time", e.message)
			return "Please enter a valid time in 24 hr format"
	#user hasn't enterd no of people yet
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
	#user already has a reservation
	else:
		return "Your reservation has already been confirmed for "+ data['resDate'].strftime('%d, %b %Y %H:%M') +" for "+str(data["people"])+" people!"+"\nPlease send 'new' to create a new reservation or 'cance' to cancel it!"

def addReservation(data, from_number):
	"""
        DESCRIPTION:
            This method is for adding a reservation to the database
        

        PARAMETERS:
            data: reservation data including no of people and date for reservation

        RETURNS:
            true if insertions was successful
			else false

    """
	dbDocument = {
		"number":from_number,
		"date": data["resDate"].isoformat(),
		"people": data["people"]
	}

	if Mongo_Client.AddReservation(dbDocument):
		return True
	else:
		return False
