var lista = ["ke", "ha", "fu", "ho", "e", "i", "u", "o", "ka", "ki", "ku", "ko", "sa", "shi",
 "su", "se", "so", "ta", "chi", "tsu", "te", "to", "na", "nini", "nu", "ne", "no", "hi", "he", 
 "ma", "mi", "mu", "me", "mo", "ra", "ri", "ru", "re", "ro", "ya", "yu", "yo", "wa", "wo", "nn"];

function mostrar1(texto, botao) { //Duas variaveis são definidas quando chama a função
    input = input1.value;

    if (input.toLowerCase() == texto) {
        if (lista.length == 0) {
            corpo1.style.display = "none";
            corpo2.style.display = "block";
        } else {
            sorteio = parseInt(Math.random() * lista.length);
            var sair = lista[sorteio];
            a.src = `./Imagens/${sair}.png`;
            botao.setAttribute("onclick", `mostrar1('${sair}',this)`); // Mudar a função do onclick
            lista.splice(lista.indexOf(sair), 1); // a partir do 0 tira 1 
        }
    } else {
        alert('Resposta errada. Tente novamente!!!');
    }
}