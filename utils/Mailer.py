import smtplib
from email.MIMEMultipart import MIMEMultipart
from email.MIMEText import MIMEText
from email.MIMEImage import MIMEImage
from email.mime.application import MIMEApplication
from email.utils import COMMASPACE, formatdate


class Mailer(object):

	@staticmethod
	def send_mail(send_to,receipt, text="you receipt", subject="Your receipt from the restuarant"):

		username = "seniorprojectramapo@gmail.com"
		password = "Ramapo123"

		msg = MIMEMultipart()
		msg['From'] = username
		msg['To'] = COMMASPACE.join([send_to])
		msg['Date'] = formatdate(localtime=True)
		msg['Subject'] = subject

		msg.attach(MIMEText(text))
		filename = "invoice.pdf"

		part = MIMEApplication(receipt)
		part.add_header('Content-Disposition',
				'attachment; filename="%s"' % filename)
		msg.attach(part)


		try:
			server = smtplib.SMTP('smtp.gmail.com','587')
			print("connected to smtp")

			server.ehlo()
			server.starttls()
			server.login(username, password)
			print("logged in")
			
			server.sendmail(username, send_to, msg.as_string())
			server.close()
			print 'successfully sent the mail'
			return True
		except:
			print "failed to send mail"
			return False
