
        function verificarNumeros() { 
            let num1 = parseInt(document.getElementById("numero1").value); 
            let num2 = parseInt(document.getElementById("numero2").value); 
            let resultado = document.getElementById("resultado"); 
 
            if (num1 > num2) { 
                resultado.textContent = "O primeiro número é maior que o segundo."; 
            } else if (num1 < num2) { 
                resultado.textContent = "O primeiro número é menor que o segundo."; 
            } else { 
                resultado.textContent = "Os números são iguais."; 
            } 
        } 
   