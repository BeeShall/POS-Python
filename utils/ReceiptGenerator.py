from jinja2 import Template
import pdfkit
from bson.objectid import ObjectId


class ReceiptGenerator(object):
	@classmethod
	def generateHtmlReceipt(cls, order, menu):

		data = cls.createDataForReceipt(order, menu)
		templateFile = open("utils/receiptTemplate.html", "r").read()
		template = Template(templateFile.decode("utf8"))
		return template.render(data=data)

	@classmethod
	def generateInvoice(cls, order, menu):

		data = cls.createDataForReceipt(order,menu)

		options = {
            'page-size': 'A4',
            'dpi': 400
        }

		htmlReceipt = cls.generateHtmlReceipt(order, menu)
		pdfkit.from_string(htmlReceipt, "test.pdf", options=options)

		pdf = pdfkit.from_string(htmlReceipt, False,options=options)

		return pdf

	@classmethod
	def createDataForReceipt(cls, orders, menu):
		menuMap = {}

		dataArray = []

		sizeList = ["REGULAR", "SMALL", "LARGE"]

		for i in range(len(menu)):
			prices = menu[i]['prices']
			priceDict = {}

			for j in range(len(prices)):
				priceDict[prices[j]['type']] = prices[j]['price']
			print(priceDict)

			menuId = str(menu[i]['_id'])
			menuMap[menuId] = {
				"name": menu[i]['name'],
				"prices": priceDict
			}

		total = 0

		print(menuMap)

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

		data = {
			"server": orders['server'],
			"data": dataArray,
			"orderNo": orders['orderNo'],
			"tip": orders['tip'],
			"tax": orders['tax'],
			"grandTotal" : total + orders['tip'] + orders['tax']
		}

		return data

