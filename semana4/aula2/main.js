// VARIAVEL BASE
const funcionarios = [
  { nome: "drew", salario: 1234.23 },
  { nome: "vieira", salario: 1234.23 },
  { nome: "andre", salario: 1234.23 },
];

// MAP, COLOCADO DENTRO DE UMA VARIAVEL RETORNARA UM NOVO ARRAY
const novosFuncionarios = funcionarios.map((funcionario) => {
  return {
    ...funcionario,
    salarioFormatado: "formatado",
  };
});

// NOVO ARRAY RETORNADO
const novosFuncionariosRetornado = [
  { nome: "drew", salario: 1234.23, salarioFormatado: "formatado" },
  { nome: "vieira", salario: 1234.23, salarioFormatado: "formatado" },
  { nome: "andre", salario: 1234.23, salarioFormatado: "formatado" },
];
