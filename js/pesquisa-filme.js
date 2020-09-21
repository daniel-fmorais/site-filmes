var pesquisaFilme = document.querySelector("#filmePesquisado");

pesquisaFilme.addEventListener("keyup", function() {
    var filmePesquisado = pesquisaFilme.value;
    if (filmePesquisado.length >= 2) {
        //Pesquisa ID do Filme
        let xhr = new XMLHttpRequest();
        xhr.open("GET","https://api.themoviedb.org/3/search/movie?api_key=0edfa7a3a718f6ba6d4d640c67ea0420&query="+filmePesquisado);
        xhr.send()

        xhr.addEventListener("load", function () {
            let respostaServer = xhr.responseText;
            let resultadoPesquisa = JSON.parse(respostaServer);
            let listaFilmes = resultadoPesquisa.results;

            for (i = 0; i < listaFilmes.length ; i++) {
                idFilme = listaFilmes[i].id;
                nomeFilme = listaFilmes[i].title;
                console.log(idFilme)
                console.log(nomeFilme);
            }
        });
    }
});
