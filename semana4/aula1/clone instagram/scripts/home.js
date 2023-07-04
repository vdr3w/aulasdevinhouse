// exemplo de array
var listaSeguidores = ["drew", "andre", "leonardo", "rocha", "vieira"];

function exibirNome() {
  listaSeguidores.forEach((item) => {
    console.log(item);
  });
}

exibirNome();

// Object
var usuario = {
  name: "Andre Vieira",
  username: "vdrew",
  qtd_seguidores: 21,
  qtd_seguindo: 22,
  qtd_publi: 100,
  foto: "https://avatars.githubusercontent.com/u/84882983?v=4",
};

function mostrarInformacoes() {
  document.getElementById("name").innerText = usuario.name;
  document.getElementById("username").innerText = usuario.username;
  document.getElementById("qtd_seguidores").innerText = usuario.qtd_seguidores;
  document.getElementById("qtd_seguindo").innerText = usuario.qtd_seguindo;
  document.getElementById("qtd_publi").innerText = usuario.qtd_publi;
}

window.onload = mostrarInformacoes;
