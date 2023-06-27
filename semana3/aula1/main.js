console.log("oi");

// < Exemplo Função Comum

// f(x, y) = x * 2 - y
// f(2, 3) = 2 * 2 - 3
// f(2, 3) = 4 - 3
// f(2, 3) = 1

// função em js
function f(x, y) {
  const resultado = x * 2 - y;
  return resultado;
}

const retorno = f(2, 3);
console.log(retorno);
// />

// Exemplo Função Efemera (Temporaria/Anonima)
(function () {
  console.log("Executou a funcao!");
})();
// />

// Exemplo Arrow Function

// comparação com funcao normal dentro de variavel
const funcaoComum = function () {
  console.log("Função Comum");
};

funcaoComum();

// Exemplo Equivalencias 1
// Arrow Function
const funcaoArrow = (a) => {
  return "Funcao arrow. " + a;
};

// const funcaoArrow = (a) => "Função Arrow" + a;
console.log(funcaoArrow("Drew"));
// />

// Exemplo Equivalencias 2
function executaEssa(funcaoExterna) {
  const retorno = funcaoExterna(3);
  console.log(retorno);
}

// Funcao comum passa por parametro
executaEssa(function (a) {
  return a * 2;
});
// Arrow Function passada por parametro
executaEssa((a) => a * 2);
// />
