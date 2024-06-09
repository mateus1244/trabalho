
function calcularLitros() {  
    let precoLitro = parseFloat(document.getElementById('precoLitro').value);  
    let valorPagamento = parseFloat(document.getElementById('valorPagamento').value);  
    let litros;  

    if (precoLitro > 0 && valorPagamento > 0) {  
        litros = valorPagamento / precoLitro;  
        document.getElementById('resultado').textContent = 'Litros de gasolina colocados no tanque: ' + litros.toFixed(2);  
    } else {  
        document.getElementById('resultado').textContent = 'Valores inválidos. Informe valores maiores que zero.';  
    }  
} 