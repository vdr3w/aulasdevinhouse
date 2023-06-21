function clicarBotao() {
  var email = document.getElementById("campo-email").value;
  var senha = document.getElementById("campo-senha").value;
  // console.log(email);
  // console.log(senha);

  if (email === "") {
    alert("O Campo de Email é Obrigatório");
  }
}
