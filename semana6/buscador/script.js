document
  .getElementById("form-pesquisa")
  .addEventListener("submit", pesquisarPerfil);

function pesquisarPerfil(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;

  // https://api.github.com/users/${usename}

  fetch(`https://api.github.com/users/${username}`).then((response) =>
    response
      .json()
      .then((data) => {
        const profileDiv = document.getElementById("profile");

        profileDiv.innerHTML = `
      <img src="${data.avatar_url}" alt="">
      <p>Nome: ${data.name}</p>
      <p>Login: ${data.login}</p>
      <p>Bio: ${data.bio}</p>
      <p>Repositorios: ${data.public_repos}</p>`;
      })
      .catch(() => {
        alert("ERRO");
      })
  );
}
