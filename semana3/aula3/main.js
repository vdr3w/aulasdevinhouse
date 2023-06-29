console.log("drew");

const elementoH1 = document.getElementById("titulo");
// console.log(elementoH1);

const idade = 15;

if (idade >= 18) {
  // console.log("é maior de idade");
} else {
  // console.log("É menor de idade");
}

// EXEMPLO VARIOS CASOS MESMA VARIAVEL

//CASO 1 - ELSE IF
const numeroA = 0;

if (numeroA === 0) {
  console.log("zero");
} else if (numeroA === 1) {
  console.log("um");
} else if (numeroA === 2) {
  console.log("dois");
} else {
  console.log("outro");
}

//CASO 2 - SWITCH
switch (numeroA) {
  case 0:
    console.log("zero");
    break;

  case 1:
    console.log("um");
    break;

  case 2:
    console.log("dois");
    break;

  default:
    console.log("outro");
}

// ESTRUTURAS DE REPETIÇÃO

// EXEMPLO (FOR) até 10
// ([código inicial]; [condição]; [incrementos])
for (let index = 6; index < 10; index++) {
  console.log(index);
}
// EXEMPLO (FOR) em array
const listaA = ["banana", "arroz", "pao"];
for (let index = 0; index < listaA.length; index++) {
  console.log(`${index}: ${listaA[1]}`);
}

// EXEMPLO (WHILE) - Tomar cuidado com loops infinitos
let entradaA = "fim";
while (entradaA !== "fim") {
  entradaA = prompt("Digite um comando:");
  // console.log(entradaA);
}

// EXEMPLO (DO WHILE)
let entradaB = "fim";
do {
  // entradaB = prompt("Digite um comando:");
  console.log(entradaB);
} while (entradaB !== "fim");

// EXEMPLO forEach
const listaB = ["doritos", "feijao", "ovo"];

listaB.push("drew");

listaB.forEach((showItem, showIndice) => {
  console.log(showIndice, showItem);
});

// EXEMPLO DESTRUCTURING
const coordA = [4, 6, 4];

// const x = coordA[0];
// const y = coordA[1];
// const z = coordA[2];

const [x, y, z] = coordA; // <<<<<

console.log(x, y, z);

// EXEMPLO OBJETO DESTRUCTURING
const coordB = { a: 3, b: 2, c: 6 };
const { a: arroz, b, c } = coordB; // ':' renomeia 'a' para 'arroz'
console.log(arroz, b, c);
