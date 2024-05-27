
        function identificarProduto() {
            let codigo = document.getElementById('codigo').value;

            let produto = '';

            if (codigo === '001') {
                produto = 'Parafuso';
            } else if (codigo === '002') {
                produto = 'Porca';
            } else if (codigo === '003') {
                produto = 'Prego';
            } else {
                produto = 'Diversos';
            }

            document.getElementById('resultado').textContent = `O código ${codigo} corresponde ao produto: ${produto}`;
        }


