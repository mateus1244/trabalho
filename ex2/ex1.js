
let cotacao = document.querySelector("#cotacao");
let calcular = document.querySelector("#calcular");
let resultados = document.querySelector("#resultados")

function Reajuste(){
    let valor = Number(cotacao.value);
    let valor1 = valor + Number(valor * (1/100) )
    let valor2 = valor + Number(valor * (2/100) )
    let valor3 = valor + Number(valor * (5/100) )
    let valor4 = valor + Number(valor * (10/100) )
    
    resultados.innerHTML = "reajuste de 1%: " + valor1+"<br>"+
    "reajuste de 2%: " + valor2+"<br>"+
    "reajuste de 5%: " + valor3+"<br>"+
    "reajuste de 10%: " + valor4
    
} calcular.onclick = function(){
    Reajuste();
}

