<!DOCTYPE html>
<html lang="pt-br">

<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Semana 1 - Aula 1 - BackEnd</title>

 <style lang="">
 .container {
  margin: 0 auto;
  min-width: 300px;
  max-width: 300px;
  border: 1px solid #000;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
 }

 .container>label {
  padding: 10px;
 }

 .container>input {
  margin-right: 5px;
 }
 </style>
</head>

<body>
 <?php 
   $nome = 'drew'; // String
   $idade = 30; // Inteiro
   $preco = 19.99; // Pontos Flutuantes
   $pessoa = null; // Nula
   $lista = ["item1", "item2", "item3"]; // Array simples
   $lista2 = array('item1', 'item2'); // Array forma 'antiga'
   $approved = true; // Boolean
   $objpessoa = (object) [    // Array associativo
    'nome' => 'drewobj',
    'idade' => 30,
    'preco' => 19.99,
   ];
   $pessoas = [       // Array multi-dimensional (array de arrays)
    [
      'nome' => 'drew1',
      'idade' => 31,],
    [
      'nome' => 'drew2',
      'idade' => 30,
    ]
    ];

var_dump($objpessoa->nome); // Equivalente ao console log

?>
 <br>
 <?php echo $objpessoa->nome?> // chamando array associativo
 <br>
 <?php echo "meu nome é $nome e tenho $idade anos e meu limite é de $preco" ?>
 <br>
 <?= "...."?>
 <br>
 <br>
 <br>
 <br>


 <form class="container" action="">
  <h2>CARTA DE FERIAS</h2>
  <label for="">Nome:</label>
  <input type="text" placeholder="Nome Funcionario">
  <label for="">Inicio:</label>
  <input type="date">
  <label for="">Fim:</label>
  <input type="date">
  <br>
  <button type="submit">Gerar</button>
 </form>

</body>

</html>