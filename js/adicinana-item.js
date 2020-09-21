var botaoAdicionar = document.querySelector("#botao-adicionar");
var formularioVisivel = false;

botaoAdicionar.addEventListener("click", function() {

    var formulario = document.querySelector("#formulario-adicionar");

    if (!formularioVisivel) {
        formulario.classList.remove("invisivel");
        formularioVisivel = true;
    }
    else {
        formulario.classList.add("invisivel");
        formularioVisivel = false;
    }
});

