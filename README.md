# Restaurant API

This is an API made to manage restaurant orders.

**The API has:**

- Express server
- Error handlers
- Routes
- Swagger documentation
- Validations
- User sessions
- Unit testing

## Dependencies installed:

### [AWS-SDK](https://www.npmjs.com/package/aws-sdk)

This will be used to upload the imags to Amazon S3.

### [bcrypt](https://www.npmjs.com/package/bcrypt)

Library to hash the passwords before they are stored into the database.

### [Dotenv](https://www.npmjs.com/package/dotenv)

Used to create environment variables, there is an env.example file that has to be filled with credentials that is imported in the config/index file to add new ones.

### [Express](https://www.npmjs.com/package/express)

Used to set up the server and routes

### [Express-validator](https://www.npmjs.com/package/express-validator)

Express middleware to validate and sanitize your express requests

### [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

Sign encrypted tokens to identify an user with the server.

### [multer](https://www.npmjs.com/package/multer)

Node middlewared used to upload files.

### [mysql2](https://www.npmjs.com/package/mysql2)

Node mysql to be able to use sequelize.

### [sequelize](https://www.npmjs.com/package/sequelize)

ORM tool to be able to manipulate SQL databases.

### [Morgan](https://www.npmjs.com/package/morgan)

To get in console or log all the HTTP requests made from users, by default is **'silly'**

### [Swagger UI express](https://www.npmjs.com/package/swagger-ui-express)

To documentate the code and how it works, type of data required for each object or JSON, test the HTTP methods in a graphical way, by default it uses the **_'/documentation'_** route and can be changed in the config file.

### [Winston](https://www.npmjs.com/package/winston)

To make a console log in case the NODE_ENV is **'development'** or make a log file if it is **'production'**

## Dev dependencies

### [Nodemon](https://www.npmjs.com/package/nodemon)

Used to start the server everytime a file saves.

## Project Setup

```
npm install
```

## Project start

```
npm run start
```

## Compile and Hot-Reload for Development

```
npm run dev
```

### Swagger documentation

The swagger documentation can be accesed in the route

```
/documentation
```
