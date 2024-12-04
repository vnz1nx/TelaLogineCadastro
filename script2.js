// Código do lado do cliente (executado no navegador)
function cadastra() {
  const nomeP = document.getElementById("nome").value;
  const emailP = document.getElementById("email").value;
  const senhaP = document.getElementById("senha").value;
  const confSenhaP = document.getElementById("confirmSenha").value;

  const result = document.getElementById("resultado");

  if (senhaP === confSenhaP && nomeP !== "" && emailP !== "" && senhaP !== "" && confSenhaP !== "") {
    result.innerHTML = "Cadastro efetuado.";
    fetch('/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome: nomeP, email: emailP, senha: senhaP })
    })
    .then(response => response.text())
    .then(data => {
      console.log(data); // Você pode lidar com a resposta do servidor conforme necessário
    });
  } else {
    if (senhaP !== confSenhaP || nomeP === "" || emailP === "") {
      result.innerHTML = "Reveja as informações e informe todos os dados.";
    } else {
      result.innerHTML = "Login não efetuado, senhas não coincidem.";
    }
  }
}

function alteraVisibilidadeDeSenha(idInput, idOlho) {
  const input = document.getElementById(idInput);
  const olho = document.getElementById(idOlho);

  if (input.type === "password") {
    input.type = "text";
    olho.setAttribute('class', 'fa-regular fa-eye');
  } else {
    input.type = "password";
    olho.setAttribute('class', 'fa-regular fa-eye-slash');
  }
}
