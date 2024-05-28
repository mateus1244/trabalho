function calcularIngredientes() { 
    let numPessoas = parseInt(document.getElementById("pessoas").value); 
    let ovos = numPessoas * 2; 
    let queijoGramas = numPessoas * 50; 

    let resultado = document.getElementById("resultado"); 
    resultado.textContent ="Para " + numPessoas + " pessoa(s) será necessário: " + ovos + " ovos e " + queijoGramas + " gramas de queijo."; 
} 

    
