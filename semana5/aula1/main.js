const lista = document.getElementById("lista");

console.log({ lista });

// Recebe HTML Collection (similar a array)
const itens = document.getElementsByTagName("li");

// Converte um HTML Collection em Array
const itensArray = [...itens];

//
const itensLista1 = document.querySelectorAll("#lista1 li");

console.log({ itensLista1 });
