import { seguidores } from "../constantes/seguidores.js";

const seguidoresFormatados = seguidores.map((seguidor) => {
  return {
    ...seguidor,
    apelido:
      "#" +
      seguidor.nome
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(" ", "_"),
  };
});

document.getElementById("form-pesquisa").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevenindo o comportamento padrão do formulário (recarregar a página)

  const valorPesquisa = document.getElementById("input-pesquisa").value; // Pegando o valor do input de pesquisa

  // Filtrando os seguidores pelo nome com base no valor de pesquisa, deixando-os caixa baixa, e o resultado tambem
  const seguidoresFiltrados = seguidoresFormatados.filter((seguidor) =>
    seguidor.nome
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(
        valorPesquisa
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
      )
  );

  document.getElementById("corpo-tabela").innerHTML = ""; // Limpando o corpo da tabela antes de adicionar novas linhas

  // Iterando sobre os seguidores filtrados e criando uma linha de tabela para cada um
  seguidoresFiltrados.map((seguidor) => {
    const tr = document.createElement("tr");

    const tdFoto = document.createElement("td");
    tdFoto.innerHTML = `<img src=${seguidor.url}>`;
    tr.appendChild(tdFoto);

    const tdNome = document.createElement("td");
    tdNome.innerHTML = `${seguidor.nome} (${seguidor.apelido})`;
    tr.appendChild(tdNome);

    const tdSeguidores = document.createElement("td");
    tdSeguidores.innerHTML = seguidor.quantidade_seguidores;
    tr.appendChild(tdSeguidores);

    const tdPublicacoes = document.createElement("td");
    tdPublicacoes.innerHTML = seguidor.quantidade_publicacoes;
    tr.appendChild(tdPublicacoes);

    document.getElementById("corpo-tabela").appendChild(tr); // Adicionando a linha de tabela ao corpo da tabela
  });
});

// Função que cria linhas na tabela para cada seguidor
function criarLinhasTabela() {
  // Iterando sobre os seguidores formatados e criando uma linha de tabela para cada um
  seguidoresFormatados.map((seguidor) => {
    const tr = document.createElement("tr");

    const tdFoto = document.createElement("td");
    tdFoto.innerHTML = `<img src=${seguidor.url}>`;
    tr.appendChild(tdFoto);

    const tdNome = document.createElement("td");
    tdNome.innerHTML = `${seguidor.nome} (${seguidor.apelido})`;
    tr.appendChild(tdNome);

    const tdSeguidores = document.createElement("td");
    tdSeguidores.innerHTML = seguidor.quantidade_seguidores;
    tr.appendChild(tdSeguidores);

    const tdPublicacoes = document.createElement("td");
    tdPublicacoes.innerHTML = seguidor.quantidade_publicacoes;
    tr.appendChild(tdPublicacoes);

    // Adicionando a linha de tabela ao corpo da tabela
    document.getElementById("corpo-tabela").appendChild(tr);
  });
}

function exibirObservacao() {
  const seguidoresAtivos = seguidoresFormatados.every(
    (seguidor) => seguidor.quantidade_publicacoes >= 20
  );

  if (seguidoresAtivos === true) {
    document.getElementById("observation-message").innerText =
      "Parabens sua rede de seguidores é ativa!";
    document
      .getElementById("observation-message")
      .classList.remove("disabled-message");
  } else {
    document.getElementById("observation-message").innerText =
      "Sua rede não é ativa!";
    document
      .getElementById("observation-message")
      .classList.remove("disabled-message");
  }
}

//ACUMULADOR =

function quantidadeDePublicacoesSeguidores() {
  const total = seguidoresFormatados.reduce((acumulador, itemDaVez) => {
    return itemDaVez.quantidade_publicacoes + acumulador;
  }, 0);

  console.log(total);

  const nomes = seguidoresFormatados.reduce((acumulador, itemDaVez) => {
    return acumulador + "," + itemDaVez.nome;
  }, "");

  console.log(nomes);
}

quantidadeDePublicacoesSeguidores();
exibirObservacao();

window.onload = criarLinhasTabela;
