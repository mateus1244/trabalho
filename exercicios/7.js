
    
        function verificarParOuImpar() {
            let numero = parseInt(document.getElementById('numero').value);

            if (isNaN(numero)) {
                alert('Por favor, insira um número válido.');
                return;
            }

            if (numero % 2 === 0) {
                document.getElementById('resultado').textContent = `${numero} é um número PAR.`;
            } else {
                document.getElementById('resultado').textContent = `${numero} é um número ÍMPAR.`;
            }
        }
   