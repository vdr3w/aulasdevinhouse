console.log("aula4");
const elementoLista = document.getElementById("lista");

// EXEMPLO DE FUNCAO DENTRO DE OBJETO
// const objeto = {
//   teste: () => {
//     console.log("funciona mesmo");
//   },
// };

// objeto.teste();

// FUNCOES DE ARRAY
// const array = [3, 2];

// array.push(6);

// console.log(array);

// ARRAY DE OBJETOS
const pessoas = [
  {
    id: 1,
    nome: "Drew",
    idade: 29,
  },
  {
    id: 2,
    nome: "Vieira",
    idade: 30,
  },
  {
    id: 3,
    nome: "Andre",
    idade: 31,
  },
];

// EXEMPLO for COMUM
for (let i = 0; i < pessoas.length; i++) {
  console.log(pessoas[i].nome);
}

// EXEMPLO for of
for (let item of pessoas) {
  console.log(item.nome);
}

// EXEMPLO forEach <<< MAIS USADO NO MERCADO D TRABALHO
pessoas.forEach((item) => {
  const { id, nome, idade } = item;
  const elementoItem = document.createElement("li");

  elementoItem.innerHTML = `Id: ${id} Nome: ${nome} Idade:${idade}`;

  elementoLista.appendChild(elementoItem);
});

// EXEMPLO map
// cria um novo array com os returns de cada volta
const resultado = pessoas.map((item) => {
  return item.idade;
});

console.log(resultado);

// EXEMPLO filter
const filtrado = pessoas.filter(({ id, nome, idade }) => {
  return idade < 32; // retorna todos os elementos que derem true a exec.
});

console.log(filtrado);

// EXEMPLO find
const encontrado = pessoas.find((item) => {
  return item.id === 1; // retorna apenas o primeiro elemento que der true a exec.
});

// EXEMPLO findIndex
const indiceEncontrado = pessoas.findIndex((item) => {
  return item.id === 1; // mostra o INDEX do item
});

if (indiceEncontrado >= 0) {
  console.log(indiceEncontrado); // 0
} else {
  console.log(`indicenao Encontrado`);
}

// EXEMPLO every
const todosSatisfazem = pessoas.every((item) => {
  return item.id === 1; // testa uma vez com cada elemento e ve se todos os elementos satisfazem a condicao.
});

console.log({ todosSatisfazem }); // false - APENAS UM ELEMENTO TEM `ID 1`

// EXEMPLO some
const algumSatisfaz = pessoas.some((item) => {
  return item.id === 1; // testa uma vez com cada elemento e ve se pelo menos um dos elementos satisfaz a condicao.
});

console.log({ algumSatisfaz }); // true - PELO MENOS UM ELEMENTO TEM `ID 1`

// EXEMPLO include
const palavras = ["feijao", "arroz", "beterraba"];

const simInclui = palavras.includes("arroz");

// EXEMPLO reduce
const numeros = [5, 78, 1, 36];

// let total = 0;
// numeros.forEach((num) => total += num)

function funcRedutora(acumulador, num) {
  return acumulador + num;
}

const total = numeros.reduce(funcRedutora, 0);

console.log({ total }); // reduziu a array para numero
