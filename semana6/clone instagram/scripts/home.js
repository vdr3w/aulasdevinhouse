let usuario = {
  name: "Andre Vieira",
  username: "vdrew",
  qtd_seguidores: 21,
  qtd_seguindo: 22,
  qtd_publi: 100,
  foto: "https://avatars.githubusercontent.com/u/84882983?v=4",
};

var nomes = [
  "https://http.cat/images/202.jpg",
  "https://http.cat/images/202.jpg",
  "https://http.cat/images/202.jpg",
  "https://http.cat/images/301.jpg",
  "https://http.cat/images/404.jpg",
  "https://http.cat/images/408.jpg",
  "https://http.cat/images/417.jpg",
  "https://http.cat/images/498.jpg",
  "https://http.cat/images/498.jpg",
  "https://http.cat/images/500.jpg",
];

function exibirImage() {
  var galeria = document.getElementById("galeria");

  nomes.forEach((item) => {
    var image = document.createElement("img");
    var div = document.createElement("div");
    div.classList.add("grid-item");

    image.setAttribute("src", item);
    div.appendChild(image);

    galeria.appendChild(div);
  });
}

function mostrarInformacoes() {
  document.getElementById("name").innerText = usuario.name;
  document.getElementById("username").innerText = usuario.username;
  document.getElementById("qtd_seguidores").innerText = usuario.qtd_seguidores;
  document.getElementById("qtd_seguindo").innerText = usuario.qtd_seguindo;
  document.getElementById("qtd_publi").innerText = usuario.qtd_publi;
  exibirImage();
}

function gerarTextoBemVindo() {
  const nome = localStorage.getItem("nome_usuario");

  if (!nome) {
    window.location.href = "./index.html";
  } else {
    document.getElementById("bem_vindo_usuario").innerText =
      "Bem-vindo " + nome + "! Dalhe";
  }
}

gerarTextoBemVindo();

window.onload = mostrarInformacoes;
