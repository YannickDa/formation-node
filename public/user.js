$(function () {
  $("#addUser").on("submit", function (e) {
    e.preventDefault();
    $(".error").remove()

    const form = e.target
    if (form.username.value !== "") {
      $.post("/user", { user: form.username.value }, function () {
        console.log("Ajouté !")
      })
    } else {
      $(form).append("<div class=\"error\">Veuillez saisir un username</div>")
    }
  })
})
