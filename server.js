const express = require("express")
const bodyParser = require("body-parser")

const IndexController = require("./controllers/IndexController")
const UsersController = require("./controllers/UsersController")

const server = express()

server.use(bodyParser.json())

server.get("/", IndexController.indexAction)

server.get("/users", UsersController.usersAction)
server.post("/user", UsersController.userAction)

server.listen(3000)
