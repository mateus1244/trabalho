function calcularDiasPassados() { 
    let dia = parseInt(document.getElementById('dia').value); 
    let mes = parseInt(document.getElementById('mes').value); 
    let diasPassados = 0; 

    if (dia > 0 && dia <= 30 && mes > 0 && mes <= 12) { 
        switch (mes) { 
            case 12: 
                diasPassados += 30; // Novembro 
            case 11: 
                diasPassados += 30; // Outubro 
            case 10: 
                diasPassados += 30; // Setembro 
            case 9: 
                diasPassados += 30; // Agosto 
            case 8: 
                diasPassados += 30; // Julho 
            case 7: 
                diasPassados += 30; // Junho 
            case 6: 
                diasPassados += 30; // Maio 
            case 5: 
                diasPassados += 30; // Abril 
            case 4: 
                diasPassados += 30; // Março 
            case 3: 
                diasPassados += 30; // Fevereiro 
            case 2: 
                diasPassados += dia; // Janeiro 
        } 

        document.getElementById('resultado').textContent = 'Dias passados desde o início do ano: ' + diasPassados; 
    } else { 
        document.getElementById('resultado').textContent = 'Data inválida. Informe um dia e mês válidos.'; 
    } 
} 
