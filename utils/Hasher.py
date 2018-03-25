import bcrypt

class Hasher(object):

	@staticmethod
	def GetRandomSalt():
		return bcrypt.gensalt()

	@classmethod
	def HashPassword(cls, password):
		return bcrypt.hashpw(password.encode('utf8'), cls.GetRandomSalt())

	@staticmethod
	def ValidatePassword(password, hashed):
		return bcrypt.checkpw(password.encode('utf8'), hashed.encode('utf8'))