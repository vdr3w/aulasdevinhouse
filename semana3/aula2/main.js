// ARRAY EXEMPLOS >>>
console.log("Aula 2");

const texto = "casa";
// console.log(texto);

// const array = []; // Inicializa um array sem elementos
const array = ["arroz", "feijao", "pao"]; // valores [0], [1], [2], [...]

array.push("drew"); // Adicionar valores no array com o push
array[4] = "cenoura";

// console.log(array); // Chama o array inteiro
// console.log(array[3]); // Chama apenas o index 0 (primeira posicao) do array

// console.log(array.length); // Mostra comprimento do array

// console.log(array[array.length - 1]); // Acessa o ultimo item do array
// console.log(array.at(-1)); // Acessa o ultimo item do array

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// console.log(matriz[1][1]); // Chamando o valor 5 (meio da matriz)

// OBJETOS EXEMPLOS >>>
// KEY-VALUE

const obj = { test: 33, bla: 35, drew: 54 }; // Cria um objeto
obj.drew = "drew"; // Mudando o valor de 'drew' no objeto

// console.log(obj);
// console.log(obj.drew); // Acessa o valor 'drew'
// console.log(obj["drew"]); // Acessa o valor 'drew'

// MUITO COMUM - ESTRUTURA ARRAY COM MANIPULAÇÃO DE OBJETOS
const listaPessoas = [
  {
    id: 1, // index 0
    nome: "Drew",
    profissao: "Programador",
  },
  {
    id: 2, // index 1
    nome: "Vieira",
    profissao: "Dev",
  },
  {
    id: 3, // index 2
    nome: "Andre",
    profissao: "Escritor de Codigo",
  },
];

// console.log(listaPessoas[0].profissao); // Chama a Profissao do index[0]

// ESCOPO EXEMPLOS >>>

// Escopo de Função
// 'var' obedece apenas escopo de função
function definirLargura() {
  largura = 100;
  // console.log(largura);
}

// definirLargura();

// Escopo de bloco
// 'var' nao é contida em escopo de bloco
var altura = 100;

if (true) {
  var largura = 100;
  // console.log(largura);
}

// console.log(largura);

// const e let são contidas em escopo de bloco e tambem escopo de função
const comprimento = 0;

if (true) {
  const comprimento = 111;
  console.log(comprimento); // Valor = 111 pois estamos chamando dentro do escopo da função aonde o valor esta contido.
}

console.log(comprimento); // Valor = 0 pois const esta contido no IF
