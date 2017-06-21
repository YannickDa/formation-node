const users = ["Toto", "Tata"]

module.exports = {
  usersAction: function (req, res) {
    res.json(users)
  },
  userAction: function (req, res) {
    const user = req.body.user
    users.push(user)
    res.end()
  }
}
