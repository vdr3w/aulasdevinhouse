<?php 

$name = "Drew Vieira";

$age = 30;

$salary_expectation = 15000;

$description = "Lorem ipsum";

$open_to_negotiation = true;

$skills = ['JavaScript','Html','CSS', 'Vue'];

$address = [
 'cep' => '81560420',
 'city' => 'Curitiba',
 'state' => 'PR',
 'neighborhood' => 'Uberaba',
 'number' => '141',
 'complement' => 'Sobrado',
 'street' => 'Rua Butia',
];

$contacts = (object) [
 'github' => 'https://github.com/vdr3w',
 'phone' => '41999489713',
 'linkedin' => 'https://www.linkedin.com/in/vieiradrew/',
];

$experiences = [
    [
        'company_name' => 'DrewTech',
        'cargo' => 'Programador',
        'period' => '12/02/2020 até 12/10/2023',
        'description' => '...................'
    ],
    [
        'company_name' => 'Drew Tech',
        'cargo' => 'Programador',
        'period' => '12/02/2020 até 12/10/2023',
        'description' => '...................'
    ]
]
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Currículo</title>
 <style>
 body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
 }

 header {
  background-color: #007BFF;
  color: #fff;
  text-align: center;
  padding: 20px;
 }

 h1 {
  font-size: 36px;
  margin-bottom: 10px;
 }

 h2 {
  font-size: 24px;
  margin-top: 20px;
 }

 .container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
 }

 p {
  margin: 0;
 }

 ul {
  list-style-type: square;
  padding-left: 20px;
 }
 </style>
</head>

<body>

 <header>
  <h1><?php echo $name ?></h1>
  <p><?php echo "$address[street] - $address[number] - $address[neighborhood]"; ?></p>
  <p><?php echo "$address[cep] - $address[city] - $address[state]"; ?></p>
  <br>
  <p>Github: <?php echo $contacts->github ?></p>
  <p>Telefone: <?php echo $contacts->phone ?></p>
  <br>
  <h3><?php echo $open_to_negotiation ? 'ACEITO NEGOCIACAO' : 'NAO ABERTO A NEGOCIACAO' ?></h3>
 </header>

 <div class="container">
  <h2>Resumo Profissional</h2>
  <p><?php echo $description; ?></p>

  <h2>Experiência Profissional</h2>
  <ul>
   <?php
            foreach ($experiences as $experience) {
            ?>
   <li>
    <p><strong><?php echo $experience['company_name'] ?></strong></p>
    <p>Cargo: <?php echo $experience['cargo'] ?></p>
    <p>Período: <?php echo $experience['period'] ?></p>
    <p><?php echo $experience['description'] ?>.</p>
   </li>
   <?php
            }
            ?>

  </ul>

  <h2>Formação Acadêmica</h2>
  <ul>
   <li>
    <p><strong>Nome da Universidade</strong></p>
    <p>Curso: Nome do Curso</p>
    <p>Ano de Conclusão: Ano de Conclusão</p>
   </li>
  </ul>

  <h2>Habilidades Técnicas</h2>
  <ul>
   <?php
            foreach ($skills as $skill) {
                echo "<li>$skill</li>";
            }
            ?>
  </ul>



  <h2>Habilidades Técnicas</h2>
  <ul>
   <li><?php echo $skills[0] ?></li>
   <li><?php echo $skills[1] ?></li>
   <li><?php echo $skills[2] ?></li>
   <li><?php echo $skills[3] ?></li>
  </ul>
 </div>
</body>

</html>