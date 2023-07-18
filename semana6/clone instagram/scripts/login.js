import { usuarios } from "../constantes/usuarios.js";

document.getElementById("form-login").addEventListener("submit", realizarLogin);

document.getElementById("aceitar").addEventListener("click", salvarDecisao);
document.getElementById("rejeitar").addEventListener("click", salvarDecisao);

function salvarDecisao() {
  localStorage.setItem("decisao-permissao", "ok");
  document.getElementById("modal-permission").style.display = "none";
}

const campoEmail = document.getElementById("campo-email");
const campoSenha = document.getElementById("campo-senha");
const loginButton = document.getElementById("login-button");

function resetForm() {
  campoEmail.classList.remove("input-error");
  campoEmail.classList.remove("input-error");
}

function realizarLogin(event) {
  event.preventDefault();

  const email = campoEmail.value;
  const senha = campoSenha.value;

  resetForm();

  if (email === "") {
    campoEmail.classList.add("input-error");
    campoEmail.focus();
  } else if (senha === "") {
    campoSenha.classList.add("input-error");
    campoSenha.focus();
  } else {
    loginButton.disabled = true;
    loginButton.style.opacity = 0.5;
    loginButton.innerText = "Logando ...";

    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.email === email && usuario.password === senha
    );
    console.log(usuarioEncontrado);
    if (usuarioEncontrado) {
      localStorage.setItem("nome_usuario");

      campoEmail.style.display = "none";
      campoSenha.style.display = "none";
      loginButton.style.display = "none";

      document.getElementById("form-login").innerText = "Entrando ...";

      setTimeout(() => {
        window.location.href = "./home.html";
      }, 3000);
    } else {
      loginButton.disabled = false;
      loginButton.style.opacity = 1;
      loginButton.innerText = "Entrar";

      alert("Usuario nao encontrado");
    }
  }
}

function exibirModal() {
  const decisao = localStorage.getItem("decisao-permissao");

  if (decisao !== "ok") {
    document.getElementById("modal-permission").style.display = "flex";
  }
}

setTimeout(exibirModal, 5000);
