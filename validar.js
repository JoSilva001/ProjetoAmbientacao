/*
  A função é um trecho
  de código (algoritmo) que
  realiza uma tarefa específica
*/

function validar(){
    //declara as variáveis
    //o tipo é implícito
    //JS é fracamente tipada
    var login; 
    var senha;
    //Pegar o elemento
    login = document.getElementById("login").value;
    senha = document.getElementById("senha").value;
    
    if (login === '' || senha === '' )
    {
      alert("login e senha obrigatórios");
      return false;
    }
    else if (login === "senai" && senha === "123456")
    {

      return true;
    }
    else
    {
        alert("Sai fora")
        return false;
    }
}

/*var input = document.querySelector("input");

input.onclick = validar()
{
    var nome = prompt ("...")
}*/