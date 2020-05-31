var lista = ["ke2", "ha2", "fu2", "ho2", "e2", "i2", "u2", "o2", "ka2", "ki2", "ku2", "ko2", 
"sa2", "shi2","su2", "se2", "so2", "ta2", "chi2", "tsu2", "te2", "to2", "na2", "nini2", "nu2",
"ne2", "no2", "hi2", "he2", "ma2", "mi2", "mu2", "me2", "mo2", "ra2", "ri2", "ru2", "re2", "ro2",
"ya2", "yu2", "yo2", "wa2", "wo2", "nn2"];

function mostrar1(texto, botao) { //Duas variaveis são definidas quando chama a função
    input = input1.value;

    if (input.toLowerCase() == texto) {
        if (lista.length == 0) {
            corpo1.style.display = "none";
            corpo2.style.display = "block";
        } else {
            sorteio = parseInt(Math.random() * lista.length);
            var sair = lista[sorteio];
            a2.src = `./Imagens/${sair}.png`;
            botao.setAttribute("onclick", `mostrar1('${sair}',this)`); // Mudar a função do onclick
            lista.splice(lista.indexOf(sair), 1); // a partir do 0 tira 1 
        }
    } else {
        alert('Resposta errada. Tente novamente!!!');
    }
}