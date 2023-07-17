export function fazerCadastro() {
  var nome = document.getElementById("campo-nome-completo").value;
  var email = document.getElementById("campo-email").value;
  var telefone = document.getElementById("campo-telefone").value;
  var senha = document.getElementById("campo-senha").value;

  reset();

  if (nome === "") {
    document.getElementById("campo-nome-completo").classList.add("input-error");
    document.getElementById("campo-nome-completo").focus();
    document.getElementById("error-nome").hidden = false;
    document.getElementById("error-nome").innerText = "O Nome é Obrigatório";
  } else if (regexEmail.test(email) === false) {
    document.getElementById("campo-email").classList.add("input-error");
    document.getElementById("error-email").hidden = false;
    document.getElementById("error-email").innerText = "Digite um Email válido";
  } else if (regexTelefone.test(telefone) === false) {
    document.getElementById("campo-telefone").classList.add("input-error");
    document.getElementById("error-telefone").hidden = false;
    document.getElementById("error-telefone").innerText =
      "Digite um telefone válido";
  } else if (senha.length < 9) {
    document.getElementById("campo-senha").classList.add("input-error");
    document.getElementById("error-senha").hidden = false;
    document.getElementById("error-senha").innerText =
      "A senha precisa ter no minimo 8 caracteres";
  }
}
