
function calcularOperacoes() { 
    let num1 = parseInt(document.getElementById('num1').value); 
    let num2 = parseInt(document.getElementById('num2').value); 
 
    let soma = num1 + num2; 
    let subtracao = num1 - num2; 
    let multiplicacao = num1 * num2; 
    let divisao = num2 !== 0 ? num1 / num2 : "Divisão por zero não permitida"; 
 
    let resultado = "Soma: " + soma + "<br>"; 
    if (num1 >= num2) { 
        resultado += "Subtração: " + subtracao + "<br>"; 
    } 
    if (num1 % 2 === 0) { 
        resultado += "Multiplicação: " + multiplicacao + "<br>"; 
    } 
    if (divisao !== "Divisão por zero não permitida") { 
        resultado += "Divisão: " + divisao; 
    } 
 
    document.getElementById('resultado').innerHTML = resultado; 
} 
