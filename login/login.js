

//console.log("Hello Wold!");

//alert("Hello World!");

//var nome = "Zau"; pribido, da muito problema e ele esta sendo muito recomendado a cair no desuso. Não usaremos!!

//let nome = "Zau"; 
//console.log (nome);

//const nome = "Zau"; o const não permite que a gente substitua valores de constantes

const campoSenha = document.getElementById("senha");
const btnSenha = document.querySelector("#mostrar-senha");
//console.log(campoSenha.type);

btnSenha.addEventListener("click", function() {



    // if(campoSenha.type == "password") {
    //     campoSenha.type = "text";
    // }
    // else {
    //     campoSenha.type = "password";
    // }

//ternário
    campoSenha.type = campoSenha.type == "password" ? "text" : "password"
});