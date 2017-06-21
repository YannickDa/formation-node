$(function () {
  const refreshUsers = function () {
    $.get("/users", function (users) {
      $('#list').html(users.map(function (user) {
        return "<li>" + user + "</li>"
      }))
    })
  }

  $("#addUser").on("submit", function (e) {
    e.preventDefault();
    $(".error").remove()

    const form = e.target
    if (form.username.value !== "") {
      $.post("/user", { user: form.username.value }, function () {
        $("#list").append("<li>" + form.username.value + "</li>")
      })
    } else {
      $(form).append("<div class=\"error\">Veuillez saisir un username</div>")
    }
  })

  refreshUsers();
})
