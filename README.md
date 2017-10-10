# Vilde Vevatne's submission:

* How to run the application:

	- run 'bundle install' in root directory
	- cd into the 'client' folder and run 'yarn run concurrently' (this will run both the front- and back-end server)


* Back-end:

	- Simple rails app in 'API mode'. It only contains one route '/pins', it's function is to render the json, returning 8 objects at a time with the use of the 'will-paginate' gem. 

* Front-end:

	- Simple React app. See comments in code for explanation of the different components and their functionalities. 
