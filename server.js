const express = require("express")
const IndexController = require("./controllers/IndexController")

const server = express()

server.get("/", IndexController.indexAction)

server.listen(3000)
