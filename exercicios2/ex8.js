

function calcularValorArrecadado() { 
    let qtdPequenas = parseInt(document.getElementById('qtdPequenas').value); 
    let qtdMedias = parseInt(document.getElementById('qtdMedias').value); 
    let qtdGrandes = parseInt(document.getElementById('qtdGrandes').value); 
    let valorArrecadado = 0; 

    if (qtdPequenas >= 0 && qtdMedias >= 0 && qtdGrandes >= 0) { 
        valorArrecadado = (qtdPequenas * 10) + (qtdMedias * 12) + (qtdGrandes * 15); 
        document.getElementById('resultado').textContent = 'Valor arrecadado com a venda: R$ ' + valorArrecadado; 
    } else { 
        document.getElementById('resultado').textContent = 'Quantidades inválidas. Informe valores maiores ou iguais a zero.'; 
    } 
} 