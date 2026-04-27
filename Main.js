let titulo = document.querySelector("h1")
let input = document.querySelector("#titulo")

function alterarTitulo(){
    if (input.value !== ""){
        titulo.innerText = input.value
    } else {
        alert("Preencha a porcaria da input, seu animal!")
    }
}

let botao = document.querySelector("button")
botao.addEventListener("click", alterarTitulo)