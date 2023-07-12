function PessoaFunc(nome, idade) {
  return {
    nome: nome,
    idade: idade,
    mostraIdade() {
      console.log("Nome: " + this.nome, ", Idade: " + this.idade);
    },
  };
}

const drew = PessoaFunc("Drew", 30); // Nome: Drew , Idade: 30 #main.js:6
const vieira = PessoaFunc("Vieira", 29); // Nome: Vieira , Idade: 29 #main.js:6

drew.mostraIdade();
vieira.mostraIdade();

// Equivalente em classe
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    // console.log({ nome, idade }); // Resultado:
    // Pessoa {nome: 'Drew', idade: 30} #main.js:22
    // Pessoa {nome: 'Vieira', idade: 29} #main.js:22
  }

  mostraIdade() {
    console.log(this.idade);
  }
}

new Array();
// Pessoa {nome: 'Drew', idade: 30} #main.js:35
const drew2 = new Pessoa("Drew2", 30);

// Pessoa {nome: 'Vieira', idade: 29} #main.js:35
const vieira2 = new Pessoa("Vieira2", 29);

console.log(drew2, vieira2);
