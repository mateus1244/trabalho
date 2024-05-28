 
        function verificarParOuImpar() { 
            let numero = parseInt(document.getElementById("numero").value); 
            let resultado = document.getElementById("resultado"); 
 
            if (numero % 2 === 0) { 
                resultado.textContent = "O número inserido é Par."; 
            } else { 
                resultado.textContent = "O número inserido é Ímpar."; 
            } 
        } 
   