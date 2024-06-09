
function imprimirNumeros() { 
    let numero = document.getElementById('numero').value; 
   
    if (numero.length <= 3) { 
      let centena = Math.floor(numero / 100); 
      let dezena = Math.floor((numero % 100) / 10); 
      let unidade = numero % 10; 
   
      document.getElementById('saida').innerHTML = 'CENTENA =' + centena +'DEZENA = ' + dezena + 'UNIDADE =' + unidade; 
    } else { 
      document.getElementById('saida').innerHTML = 'Por favor, digite um número de até 3 dígitos.'; 
    } 
  } 
  