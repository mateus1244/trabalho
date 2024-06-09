function calcularSalario() { 
    let salario = parseFloat(document.getElementById('salario').value); 
    let aumento = salario * 0.15; 
    let salarioComAumento = salario + aumento; 
    let descontoImposto = salarioComAumento * 0.08; 
    let salarioFinal = salarioComAumento - descontoImposto; 

    let resultado = document.getElementById('resultado'); 
    resultado.innerHTML = `Salário inicial: R$ ${salario.toFixed(2)} <br> 
                           Salário com aumento de 15%: R$ ${salarioComAumento.toFixed(2)} <br> 
                           Salário final após desconto de 8% de impostos: R$ ${salarioFinal.toFixed(2)}`; 
} 
