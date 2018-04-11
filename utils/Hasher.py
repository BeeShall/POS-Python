"""
	Hasher.py
	Description: This file contains method that uses "bcrypt" library to hash the passwords
	Date: 3/24/2018
	Author: Bishal Regmi

"""

import bcrypt

class Hasher(object):
	"""
		DESCRIPTION: 
			1.This class is a static class that conatins method relating to hashing 
			2. Contains method to generate salt, hashpassword and compare hashed passwords


	"""

	@staticmethod
	def GetRandomSalt():
		"""
			DESCRIPTION:

				This method generates a random salt to to be used for hashing
			
			ARGUMENTS:

				None

			RETURNS:

				Random salt string to use with hashing

		"""
		return bcrypt.gensalt()

	@classmethod
	def HashPassword(cls, password):
		"""
			DESCRIPTION:

				This method hashes the given password using the bcrypt hashing algorithm

			ARGUMENTS:
				
				password: password string to be hashed

			RETURNS:

				Hashed password string attached with random salt
		"""
		return bcrypt.hashpw(password.encode('utf8'), cls.GetRandomSalt())

	@staticmethod
	def ValidatePassword(password, hashed):
		"""
			DESCRIPTION:

				This method is used to compare a password and a hashed password to check their validity

			ARGUMENTS:

				password: password sting to be checked
				hashed: hashed password string to be checked with

			RETURNS:
				True if password matches
				else False
		"""
		return bcrypt.checkpw(password.encode('utf8'), hashed.encode('utf8'))