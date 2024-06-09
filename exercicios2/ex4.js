function calcularDiasDeVida() { 
    let nome = document.getElementById('nome').value; 
    let idade = parseInt(document.getElementById('idade').value); 
    let diasDeVida = idade * 365; 
 
    let mensagem = nome.toUpperCase() + ',  Você já viveu ' + diasDeVida + ' dias'; 
    document.getElementById('resultado').textContent = mensagem; 
} 