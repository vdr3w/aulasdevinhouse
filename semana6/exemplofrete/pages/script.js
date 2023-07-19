document.getElementById("cepForm").addEventListener("submit", exibirDados);

function exibirDados(event) {
  event.preventDefault();

  const cep = document.getElementById("cep").value;

  // url: viacep.com.br/ws/01001000/json/
  if (cep.length === 8 || cep.length === 9) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((dataCep) => {
        document.getElementById(
          "result"
        ).innerHTML = `<p><b>CEP:</b> ${dataCep.cep} 📍</p>
      <p><b>Endereço:</b> ${dataCep.logradouro} 🏠</p>
      <p><b>Bairro:</b> ${dataCep.bairro} 🏙️</p>
      <p><b>Cidade:</b> ${dataCep.localidade} 🌆</p>
      <p><b>Estado:</b> ${dataCep.uf} 🏞️</p>
      <p><b>DDD:</b> ${dataCep.ddd} ☎️</p>`;
      })
      .catch(() => {
        alert("ERRO");
      });
  } else {
    alert("Digite um CEP Completo (01001-000)");
  }
}
