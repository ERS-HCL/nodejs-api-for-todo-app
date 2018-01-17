# Nodejs API for TODO APP(Backend) [Demo](https://sleepy-citadel-54178.herokuapp.com/api/todos)

![nodejs api for todo app](assets/img/logo.jpeg)

This project provides Nodejs API with Express and MongoDB, a backend for frontend or use it as a base for building any kind of API.


### Please go to below link for Frontend

[Angular5 TODO APP Git Repo](https://github.com/mdarif-k/angular-todo-app-using-mongodb-backend)

## Getting Started

These instructions will help you to up and running app on your local machine for development and testing purposes. you can deploy app in local system.

### Prerequisites

We need to install the mongodb in our system after installation go to bin directory and open command prompt and give below commands

```
> mongod
> mongo
```
when we will mongo our mongo server is restarted we need to create the database, use below command to create the database

```
> use todo
```

this command will create the database and switched to the same database

### Installing

need to install npm packages

```
> npm install
```

## Deployment in local system

we need to use below command to run our app

```
> node index.js
```


## Built With

* [Nodejs](https://nodejs.org/en/) - Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient
* [express](https://www.express.com/) - Allows to set up middlewares to respond to HTTP Requests.
* [mongoose](http://mongoosejs.com/docs/) - Used to connect to mongodb