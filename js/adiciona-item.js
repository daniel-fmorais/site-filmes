var botaoAdicionar = document.querySelector("#botao-adicionar");
var formularioVisivel = false;

botaoAdicionar.addEventListener("click", function() {

    var formulario = document.querySelector("#formulario-adicionar");

    if (!formularioVisivel) {
        formulario.classList.remove("invisivel");
        formularioVisivel = true;
        pesquisaFilme.focus();
    }
    else {
        formulario.classList.add("invisivel");
        formularioVisivel = false;
    }
});
