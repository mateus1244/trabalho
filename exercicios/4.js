let ipValor1 = document.querySelector("#ipValor1");
let ipValor2 = document.querySelector("#ipValor2");
let ipValor3 = document.querySelector("#ipValor3");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function Calcular(){
    let vlr1 = Number(ipValor1.value);
    let vlr2 = Number(ipValor2.value);
    let vlr3 = Number(ipValor3.value);
    //calcular a media aritimética

    let mediaAritmetica = (vlr1 + vlr2 + vlr3) / 3;

    //calcular a média ponderada (3, 2 e 5)
    let somaValoresPesos = (vlr1 * 3) + (vlr2 * 2) + (vlr3 * 5);
    let somaPesos = 3 + 2 + 5;
    let mediaPonderada = somaValoresPesos / somaPesos;

    //soma das médias 
    let somaMedias = mediaAritmetica + mediaPonderada;
    //media das medias
    let mediaMedia = somaMedias / 2;

    h3Resultado.innerHTML = "Media aritmetica: "+mediaAritmetica+"<br>"+
    " Media ponderada:"+mediaPonderada+"<br>"+
    " soma das Medias"+somaMedias+"<br>"+
    " soma das Medias"+mediaMedia;

}  btCalcular.onclick = function(){
    Calcular();
}

