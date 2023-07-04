const nomes = [
  { nome: "drew", cpf: "08978918993" },
  { nome: "vieira", cpf: "08978918994" },
  { nome: "andre", cpf: "08978918992" },
];

const usuario = nomes.find((item) => item.nome.includes("drew"));
