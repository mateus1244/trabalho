 
function calcularArea() {  
    let comprimento = document.getElementById('comprimento').value;  
    let largura = document.getElementById('largura').value;  
    let area = 0;  
 
    if (comprimento > 0 && largura > 0) {  
        area = comprimento * largura;  
        document.getElementById('resultado').innerText = 'Área do terreno: ' + area + " metros quadrados";
    } else {  
        document.getElementById('resultado').innerText = 'Por favor, informe dimensões válidas para o terreno.';  
    }  
} 
