function calcularDivisao() { 
    let total = parseFloat(document.getElementById('total').value); 
     
    let valorCarlos = Math.floor(total / 3); 
    let valorAndre = Math.floor(total / 3); 
    let valorFelipe = total - (valorCarlos + valorAndre); 
     
    document.getElementById('resultado').innerText = `Carlos deve pagar: R${valorCarlos.toFixed(2).replace('.', ',')}
André deve pagar: R${valorAndre.toFixed(2).replace('.', ',')}
Felipe deve pagar: R${valorFelipe.toFixed(2).replace('.', ',')}`; 
} 