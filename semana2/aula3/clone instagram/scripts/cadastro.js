function fazerCadastro() {
  var nome = document.getElementById("campo-nome-completo").value;

  if (nome === "") {
    document.getElementById("campo-nome-completo").classList.add("input-error");
    document.getElementById("campo-nome-completo").focus();
    document.getElementById("error-nome").hidden = false;
    document.getElementById("error-nome").innerText = "O Nome é Obrigatório";
  }

  var email = document.getElementById("campo-email").value;
  var telefone = document.getElementById("campo-telefone").value;
  var senha = document.getElementById("campo-senha").value;
}
