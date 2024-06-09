function calcularVendas() {   
    let qtdPao = document.getElementById('qtdPao').value;   
    let qtdBroa = document.getElementById('qtdBroa').value;   
    let valorTotal = 0;   
    let valorPao = qtdPao * 0.12;   
    let valorBroa = qtdBroa * 1.50;   
 
    if (qtdPao >= 0 && qtdBroa >= 0) {   
        valorTotal = valorPao + valorBroa;   
        let poupanca = valorTotal * 0.10;   
        document.getElementById('resultado').innerText = 'Total arrecadado: R$ ' + valorTotal + ' Valor a guardar na poupança: R$' + poupanca.toFixed(2);
    } else {   
        document.getElementById('resultado').innerText = 'Por favor, informe quantidades válidas de pães e broas.';   
    }   
}   
 