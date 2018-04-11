"""
	ReceiptGenerator.py
	Description:
		1. This file is an API/middleware to generate a pdf receipt using an HTML template
		2. jinja2 library used for HTML templating
		3. pdfkit used to convert HTML to PDF
	Date: 3/24/2018
	Author: Bishal Regmi

"""
from jinja2 import Template
import pdfkit
from bson.objectid import ObjectId


class ReceiptGenerator(object):
	"""
		Description: This class is used to generate pdf receipt from a given order object
	"""
	@classmethod
	def generateHtmlReceipt(cls, order, menu):
		"""
			DESCRIPTION:

				This class used Jinja2 templating engine to generate an HTML receipt for the given order

			ARGUMENTS:

				order: order to generate the receipt
				menu: list of all the menus, this is used to get menu descriptions

			RETURNS:

				rendered html receipt file for the order
		"""

		data = cls.createDataForReceipt(order, menu)

		#opening the template file
		templateFile = open("utils/receiptTemplate.html", "r").read()
		template = Template(templateFile.decode("utf8"))
		return template.render(data=data)

	@classmethod
	def generateInvoice(cls, order, menu):
		"""
			DESCRIPTION:

				This method uses pdfkit to generate PDF invoices by converting HTML template to PDF

			ARGUMENTS:

				order: order to generate the receipt
				menu: list of all the menus, this is used to get menu descriptions

			RETURNS:

				pdf receipt as a stream
		"""

		#cleaning and customizing the order object for templating
		data = cls.createDataForReceipt(order,menu)

		#page setting for the pdf receipt
		options = {
            'page-size': 'A4',
            'dpi': 400
        }

		htmlReceipt = cls.generateHtmlReceipt(order, menu)

		#generating the pdf receipt to save as a file for testing
		pdfkit.from_string(htmlReceipt, "test.pdf", options=options)

		#generating the pdf receipt to save in a stream
		pdf = pdfkit.from_string(htmlReceipt, False,options=options)

		return pdf

	@classmethod
	def createDataForReceipt(cls, orders, menu):
		"""
			DESCRIPTION:

				This method is used to combine orders and menus such that it is a single object that can 
				be passed for html rendering

			ARGUMENTS:

				order: order to generate the receipt
				menu: list of all the menus, this is used to get menu descriptions

			RETURNS:

				aggregated order object with orders and menu descriptions

		"""

		#map of menu to refer to get menu description since order array has only menu ids
		menuMap = {}
		
		#arrays of final aggregated data
		dataArray = []

		#list of all possible menu sizes
		sizeList = ["REGULAR", "SMALL", "LARGE"]

		#conbverting all the menus to a map based on their id
		for i in range(len(menu)):
			prices = menu[i]['prices']
			priceDict = {}

			#for each menu, multiple prices can exist, creating a map for them too
			for j in range(len(prices)):
				priceDict[prices[j]['type']] = prices[j]['price']
			print(priceDict)

			menuId = str(menu[i]['_id'])
			menuMap[menuId] = {
				"name": menu[i]['name'],
				"prices": priceDict
			}

		#total cost in the menu
		total = 0

		print(menuMap)

		#computing tax, tip and total for all the orders
		order = orders["orders"]
		for i in range(len(order)):
			rate = menuMap[order[i]['menuId']]['prices'][sizeList[order[i]['size']]]
			quantity = order[i]['quantity']

			print(rate)
			print(quantity)
			print(total)

			total+= float(rate)*float(quantity)

			dataArray.append({
				"item": menuMap[order[i]['menuId']]['name'],
				"quantity": quantity,
				"rate": rate,
				"total" : float(rate)*float(quantity)
			})

		#final data object to be sent to html template for rendering
		data = {
			"server": orders['server'],
			"data": dataArray,
			"orderNo": orders['orderNo'],
			"tip": orders['tip'],
			"tax": orders['tax'],
			"grandTotal" : total + orders['tip'] + orders['tax']
		}

		return data

