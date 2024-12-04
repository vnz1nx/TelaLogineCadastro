
function alteraVisibilidadeDeSenha(idInput, idOlho) {
  const input = document.getElementById(idInput)
  const olho = document.getElementById(idOlho)

  if (input.type == "password") {
      input.type = "text";
      olho.setAttribute('class', 'fa-regular fa-eye');
  } else {
      input.type = "password";
      olho.setAttribute('class', 'fa-regular fa-eye-slash');
  }
}

function resultado(){
  const email = document.getElementById("usuario").value
  const senha = document.getElementById("senha").value
  const result = document.getElementById("resultado");

 confirm(`Email digitado: ${email}`) 

  if (email == "Admin" && senha == "Adminsucesso"){
    window.location.href = "PaginaInicial.html";
  } else {
    alert("Forma de login invalida");
  }

}