function calcularPedido() { 
    let sabor1 = document.getElementById('sabor1').value; 
    let sabor2 = document.getElementById('sabor2').value; 
    let sabor3 = document.getElementById('sabor3').value; 
    let sabor4 = document.getElementById('sabor4').value; 
    let refrigerantes = parseInt(document.getElementById('refrigerantes').value); 
    let valorPizza = 12; 
    let valorRefrigerante = 7; 

    if (sabor1 === '' || sabor2 === '' || sabor3 === '' || sabor4 === '') { 
        document.getElementById('resultado').innerText = 'Por favor, preencha todos os sabores de pizza.'; 
        return; 
    } 

    let totalPizzas = 4 * valorPizza; 
    let totalRefrigerantes = refrigerantes * valorRefrigerante; 
    let totalPagar = totalPizzas + totalRefrigerantes; 

    document.getElementById('resultado').innerText = 'Sabores escolhidos: ' + sabor1 + ', ' + sabor2 + ', ' + sabor3 + ', ' + sabor4 + ' | Valor total a pagar: R$ ' + totalPagar + '.00'; 
} 
