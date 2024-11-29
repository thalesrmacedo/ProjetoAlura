let usuario = "";
let elemento = document.querySelector("#usuario");

while (usuario == "") {
    usuario = prompt("Qual o seu nome?");
}

if (usuario == null) {
    elemento.textContent = 'Seja muito bem vindo.';
} else {
    elemento.textContent = usuario;
}