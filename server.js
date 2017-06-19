const express = require("express")

const server = express()

server.get("/", function (req, res) {
  res.end("Hello World :")
})

server.listen(3000)
