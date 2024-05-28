  function verificarIdade() { 
  let nome1 = document.getElementById('nome1').value; 
  let ano1 = parseInt(document.getElementById('ano1').value); 
  let nome2 = document.getElementById('nome2').value; 
  let ano2 = parseInt(document.getElementById('ano2').value); 
  let nome3 = document.getElementById('nome3').value; 
  let ano3 = parseInt(document.getElementById('ano3').value); 
 
  let anoAtual = new Date().getFullYear(); 
 
  let idade1 = anoAtual - ano1; 
  let idade2 = anoAtual - ano2; 
  let idade3 = anoAtual - ano3; 
 
  let resultado = document.getElementById('resultado'); 
 
  if (idade1 > idade2 && idade1 > idade3) { 
    resultado.textContent = "Pessoa mais velha: " + nome1 + " - " + idade1 + " anos"; 
    resultado.innerHTML += "<br>Segunda pessoa: " + nome2 + " - " + idade2 + " anos"; 
    resultado.innerHTML += "<br>Terceira pessoa: " + nome3 + " - " + idade3 + " anos"; 
  } else if (idade2 > idade1 && idade2 > idade3) { 
    resultado.textContent = "Pessoa mais velha: " + nome2 + " - " + idade2 + " anos"; 
    resultado.innerHTML += "<br>Segunda pessoa: " + nome1 + " - " + idade1 + " anos"; 
    resultado.innerHTML += "<br>Terceira pessoa: " + nome3 + " - " + idade3 + " anos"; 
  } else { 
    resultado.textContent = "Pessoa mais velha: " + nome3 + " - " + idade3 + " anos"; 
    resultado.innerHTML += "<br>Segunda pessoa: " + nome1 + " - " + idade1 + " anos"; 
    resultado.innerHTML += "<br>Terceira pessoa: " + nome2 + " - " + idade2 + " anos"; 
  } 
} 
 
 