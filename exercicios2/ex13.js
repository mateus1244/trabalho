function calcularArea() { 
    let raio = document.getElementById('raioInput').value; 
     
    if (raio <= 0) { 
        document.getElementById('resultado').innerText = 'Por favor, insira um raio válido.'; 
        return; 
    } 
     
    let area = 3.14 * raio * raio; 
    document.getElementById('resultado').innerText = `A área da pizza é ${area.toFixed(2)} cm².`; 
} 