function clicarBotao() {
  var email = document.getElementById("campo-email").value;
  var senha = document.getElementById("campo-senha").value;
  // remover o input-error faz com que a borda vermelha do erro de digitação suma assim que o botao for clicado
  document.getElementById("campo-email").classList.remove("input-error");
  document.getElementById("campo-senha").classList.remove("input-error");

  // Com esse IF e ELSE IF se a pessoa nao digitar o email, fica vermelho a borda e foca no email, se digitar o email e esquecer a senha, o foco vira a senha e a borda da senha fica vermelha.
  if (email === "") {
    // Com boas praticas a melhor forma de se fazer profissionalmente é a seguinte, usando o classList.add >>>
    document.getElementById("campo-email").classList.add("input-error");
    // focar o cursor no elemento depois do erro
    document.getElementById("campo-email").focus();
    // alert("O Campo de Email é Obrigatório");
  } else if (senha === "") {
    document.getElementById("campo-senha").classList.add("input-error");
    document.getElementById("campo-senha").focus();
  } else {
    // ELSE e ELSE IF usado, botao só muda caso o email e senha estejam certos
    document.getElementById("login-button").disabled = true;
    document.getElementById("login-button").style.backgroundColor = "gray";
    document.getElementById("login-button").innerText = "Entrando..";
    // Faz a janela mudar de link (pode ser usado ./nomedoarquivo.html para navegar ao inves de usar url)
    window.location.href = "https://www.google.com";
  }
}
