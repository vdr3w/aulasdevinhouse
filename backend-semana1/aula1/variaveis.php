<!DOCTYPE html>
<html lang="en">

<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width= <?php 
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
 <br>, initial-scale=1.0">
 <title>Document</title>
</head>

<body>

</body>

</html>