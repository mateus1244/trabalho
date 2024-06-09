function calcularValor() { 
    let peso = parseFloat(document.getElementById('peso').value); 
    let valorAPagar; 

    if (peso > 0) { 
        valorAPagar = 12 * peso; 
        document.getElementById('resultado').textContent = 'Valor a pagar: R$ ' + valorAPagar.toFixed(2); 
    } else { 
        document.getElementById('resultado').textContent = 'Peso inválido. Informe um valor maior que zero.'; 
    } 
} 
