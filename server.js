const express = require("express")
const bodyParser = require("body-parser")

const IndexController = require("./controllers/IndexController")
const UsersController = require("./controllers/UsersController")

const server = express()

server.use(bodyParser.urlencoded({ extended: false }))

server.use(express.static("public"))

server.get("/", IndexController.indexAction)

server.get("/users", UsersController.usersAction)
server.post("/user", UsersController.userAction)

server.listen(3000)
