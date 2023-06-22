function fazerCadastro() {
  var nome = document.getElementById("campo-nome-completo").value;
  var email = document.getElementById("campo-email").value;
  var telefone = document.getElementById("campo-telefone").value;
  var senha = document.getElementById("campo-senha").value;

  if (nome === "") {
    document.getElementById("campo-nome-completo").classList.add("input-error");
    document.getElementById("campo-nome-completo").focus();
    document.getElementById("error-nome").hidden = false;
    document.getElementById("error-nome").innerText = "O Nome é Obrigatório";
  } else if (senha.length < 9) {
    document.getElementById("campo-senha").classList.add("input-error");
    document.getElementById("error-senha").hidden = false;
    document.getElementById("error-senha").innerText =
      "A senha precisa ter no minimo 9 caracteres";
  }
}
