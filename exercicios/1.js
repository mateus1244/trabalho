
function calcularTroco() {
  let valorProduto = parseFloat(document.getElementById('valorProduto').value);
  let valorPago = parseFloat(document.getElementById('valorPago').value);

  if (isNaN(valorProduto) || isNaN(valorPago)) {
      alert('Por favor, insira valores numéricos válidos.');
      return;
  }

  const troco = valorPago - valorProduto;

  if (troco < 0) {
      document.getElementById('troco').textContent = 'Valor pago insuficiente.';
  } else {
      document.getElementById('troco').textContent = `Troco a ser dado: R$ ${troco.toFixed(2)}`;
  }
}

    