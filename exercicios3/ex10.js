function converterTempo() { 
    let totalDias = parseInt(document.getElementById('dias').value); 

    let anos = 0; 
    let meses = 0; 
    let dias = 0; 

    if (totalDias >= 0) { 
        anos = Math.floor(totalDias / 360); 
        totalDias = totalDias % 360; 

        meses = Math.floor(totalDias / 30); 
        dias = totalDias % 30; 

        document.getElementById('resultado').textContent = `Tempo de trabalho sem acidentes: ${anos} anos, ${meses} meses e ${dias} dias.`; 
    } else { 
        document.getElementById('resultado').textContent = 'Quantidade de dias inválida. Informe um valor maior ou igual a zero.'; 
    } 
} 
