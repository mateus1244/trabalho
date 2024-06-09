function calcularDistancia() { 
    let x1 = parseInt(document.getElementById('x1').value); 
    let y1 = parseInt(document.getElementById('y1').value); 
    let x2 = parseInt(document.getElementById('x2').value); 
    let y2 = parseInt(document.getElementById('y2').value); 

    let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)); 

    document.getElementById('resultado').textContent = 'A distância entre os pontos é: ' + distancia.toFixed(2); 
} 