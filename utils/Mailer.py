"""
	Mailer.py
	Description:
		1. This file is an API/middleware to use python smtplib to send e-mail with attachments
	Date: 3/24/2018
	Author: Bishal Regmi

"""
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from email.mime.application import MIMEApplication
from email.utils import COMMASPACE, formatdate


class Mailer(object):
	"""
		Description: This is a static class to email receipts with pdf attachments to the client using gmail server
	"""

	@staticmethod
	def send_mail(send_to,receipt, text="you receipt", subject="Your receipt from the restuarant"):
		"""
			DESCRIPTION:

				This method uses gmail server to send the pdf receipt generated to the provided email-address

			ARGUMENTS:
				
				send_to: email address to the send the pdf receipt to
				receipt: pdf receipt as a stream
				text: text to include in message body, default value = " your receipt "
				subject: subject of the email, default value = " Your receipt from the restuarant "

			RETURNS:
				True if receipt was successfully emailed
				else False

		"""

		#username credential for the gmail sender account
		#ideally this is supposed to be put inside environment variables
		username = "seniorprojectramapo@gmail.com"
		password = "Ramapo123"

		#using python smtplib to create an email message
		msg = MIMEMultipart()
		msg['From'] = username
		msg['To'] = COMMASPACE.join([send_to])
		msg['Date'] = formatdate(localtime=True)
		msg['Subject'] = subject

		msg.attach(MIMEText(text))
		filename = "invoice.pdf"

		#attaching the pdf receipt as MIME
		part = MIMEApplication(receipt)
		part.add_header('Content-Disposition',
				'attachment; filename="%s"' % filename)
		msg.attach(part)


		try:
			#initializing SMTP with gmail outgoing server
			server = smtplib.SMTP('smtp.gmail.com','587')
			print("connected to smtp")

			#authenticating gmail connection
			server.ehlo()
			server.starttls()
			server.login(username, password)
			print("logged in")
			
			#finally sending the email tot he client
			server.sendmail(username, send_to, msg.as_string())
			server.close()
			print("successfully sent the mail")
			return True
		except:
			print("failed to send mail")
			return False
