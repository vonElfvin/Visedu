# Visedu
[![Build Status](https://travis-ci.org/vonElfvin/Visedu.svg?branch=master)](https://travis-ci.org/vonElfvin/Visedu)<br>
Repository for the course TDDD27 - Advanced Web Programming <br><br>
Application available live at: https://visedu-app.firebaseapp.com <br>
API available through: https://visedu-app.appspot.com/

## Functionalities
### The idea
The idea is revolving around a game for high school students to solve problems related to the current math course. Data from the game is to be stored and summarized and visualized for teachers on a web application in a valuable way.

### The company
The company [Visedu](http://visedu.se/) is founded by students at LiU.

### The project
This project is a pilot project to build a prototype for the system Visedu are goind to build. Hense the main focus will revolve around the communication between the database, backend and also frontend and the game. As well as visualizing the data after provided authentication.<br><br>

## Technologies
*Note: The information is subject to change*
#### Frontend
Framework: [Angular](https://angular.io/)<br>
Packages: [Angular Material](https://material.angular.io/), [Flex Layout](https://github.com/angular/flex-layout), [AngularFire2](https://github.com/angular/angularfire2) (for Firebase authentication)<br>
Hosting: [Firebase Hosting](https://firebase.google.com/docs/hosting/)<br>
Live: https://visedu-app.appspot.com/

#### Backend
Framework: [Node.js](https://nodejs.org/en/)<br>
Packages: [Express](https://expressjs.com/en/4x/api.html), [mongoose](http://mongoosejs.com/docs/guide.html), [mongodb](http://mongodb.github.io/node-mongodb-native/3.0/api/)<br>
Hosting: [Google Cloud App Engine](https://cloud.google.com/appengine/) (using [Docker](https://www.docker.com/))<br>
Live: https://visedu-app.appspot.com/

#### Database
Framework: [MongoDB](https://www.mongodb.com/)<br>
Hosting: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) "Database as a service", hosted on [AWS](https://aws.amazon.com/)<br>
ER Diagram: <br>
![ER Diagram](https://i.imgur.com/WZEPnf0.png)

#### Other
Help programs: [Docker](https://www.docker.com/), [Travis CI](https://travis-ci.org)
