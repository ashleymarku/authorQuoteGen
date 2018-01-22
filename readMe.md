#authorQuoteGen-master
in the terminal do:

npm install ejs npm install express --save npm install body-parsar

This should allow you to test and use the code

##After cloning the file
once you clone this repo, enter the files by CD-ing into then in the terminal and once in the "authorQuoteGen-master" folder type:

node src/app.js

####this should run the app and in your terminal you should see "listening"
##after your app is running:
check the local port at the bottom of the app.js in your text editor, by default it is set to local port 8080. go to http://localhost:8080 and you should see where it accepts input. And should only display the users choice of author quote in the terminal.

What doesnt work:
Unfortunately, we are not able to display the author option that the user wold like a quote from. Simply because we are having trouble sending the input variable into the app.get method. Therefore, the app is only able to display the fixed quote at index 0 of the author Shel Silverstein from the index.ejs file.