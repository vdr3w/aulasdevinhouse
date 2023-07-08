import { fazerCadastro } from "../utils/fazerCadastro";

// Armazenar regex
// ADICIONAR REGEX PARA O RESTO DOS INPUTS <<<<<<<<<<
var regexTelefone = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Função reset para limpar os campos invalidos caso os inputs estejam validos.
function reset() {
  document
    .getElementById("campo-nome-completo")
    .classList.remove("input-error");
  document.getElementById("error-nome").hidden = true;

  document.getElementById("campo-email").classList.remove("input-error");
  document.getElementById("error-email").hidden = true;

  document.getElementById("campo-telefone").classList.remove("input-error");
  document.getElementById("error-telefone").hidden = true;

  document.getElementById("campo-senha").classList.remove("input-error");
  document.getElementById("error-senha").hidden = true;
}
