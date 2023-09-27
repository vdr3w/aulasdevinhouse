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
 <?php echo $_SERVER['PHP_SELF']?>
 <form class="container" method="post" action="<?php echo $_SERVER['PHP_SELF']?>">
  <h2>CARTA DE FERIAS</h2>
  <label for="">Nome:</label>
  <input type="text" placeholder="Nome Funcionario" name="name">
  <label for="">Inicio:</label>
  <input type="date" name="start_date">
  <label for="">Fim:</label>
  <input type="date" name="end_date">
  <br>
  <button type="submit">Gerar</button>
 </form>

 <?php 
  if( isset($_POST['name']) && $_POST['start_date'] && $_POST['end_date']) {

  $name = $_POST['name'];
  $start_date = $_POST['start_date'];
  $end_date = $_POST['end_date'];

    ?>

 <div class="container">
  <p>Nome: <?php echo $name?></p>
  <p>Inicio Das Ferias: <?php echo $start_date?></p>
  <p>Fim Das Ferias: <?php echo $end_date?></p>
 </div>

 <?php
  } else {
    echo "Preencha informações";
  }
?>

</body>

</html>