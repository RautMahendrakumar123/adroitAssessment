# adroitAssessment

# News Web Application with MERN Stack Integration

This is a web application that allows users to fetch and display news articles from a third-party API and manage their favorite articles. It is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).

## Prerequisites

Before you begin, ensure you have the following software and tools installed:

- Node.js
- npm or yarn
- MongoDB
- Git
- express js

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/RautMahendrakumar123/adroitAssessment
   

# frontend setup

cd client
npm install
npm start

frontend run on server 3000

# backend setup

cd server
npm install
npm start

backend run on server 8080


## Environment Variables

This project uses environment variables for configuration. Create a `.env` file in the root directory of backend folders with the following variables:

### Backend (.env in the "backend" folder)

- `DB_URL`: The connection string to your MongoDB database.
- `PORT`: The port where the Node.js server will run.
- `SECRET_KEY`: A secret key used for JWT token generation (for user authentication).

Example `.env` file in the "backend" folder:

### technology used

- react js for frontend
- express js for backend
- bootstrap for css
- npm packages like jsonwebtoken bcrypt mongoose in backend

# backend code

- server.js file contain express setup 
- db.js in database folder contain connection to database 
- userModel.js file in models folder contain Schema to save user details
- authRoutes.js inside routes contain routes 
- and in authControllers.js inside controllers contain login and register code
- there is middleware setup in middleware.js for knowing if user is login or not

# frontend code

- Approuter.js file which provide routing functionality in project
- component folder have header file which give navigation functionality, login.js for login form and register.js for register form
- pages folder contain card component and homepage component which show all the data in form of card and saved component where saved article will be shown 

