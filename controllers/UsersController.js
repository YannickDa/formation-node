const users = ["Toto", "Tata"]

module.exports = {
  usersAction: function (req, res) {
    res.json(users)
  }
}
