import { fazerCadastro } from "../utils/fazerCadastro.js";
import { regexEmail, regexTelefone } from "../utils/regex.js";

document
  .getElementById("formCadastro")
  .addEventListener("submit", fazerCadastro);

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
