function calcularFerraduras() { 
    let numCavalos = document.getElementById('numCavalos').value; 
    let numFerraduras = 0; 
 
    if (numCavalos > 0) { 
        numFerraduras = numCavalos * 4; // Cada cavalo precisa de 4 ferraduras 
        document.getElementById('resultado').innerText = 'Total de ferraduras permitidas: ' + numFerraduras; 
    } else { 
        document.getElementById('resultado').innerText = 'Por favor, informe um número válido de cavalos.'; 
    } 
} 
 

