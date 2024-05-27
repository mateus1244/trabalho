
function calcularValor() {
    let taxaConversao = 10; // Taxa de conversão em Reais por kg

    let peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(peso)) {
        alert('Por favor, insira um valor numérico válido para o peso.');
        return;
    }

    const valorEmReais = peso * taxaConversao;

    document.getElementById('resultado').textContent = `O valor do produto com peso ${peso} kg e de R$ ${valorEmReais.toFixed(2)}`;
}
