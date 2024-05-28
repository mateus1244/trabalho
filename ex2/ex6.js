
function verificarNota() { 
  let nota = parseFloat(document.getElementById('nota').value); 

  let mensagem = ''; 
  if (nota < 60 && nota > 40) { 
      mensagem = 'Precisa fazer prova substitutiva'; 
  } else if (nota >= 60) { 
      mensagem = 'Aprovado'; 
  } else { 
      mensagem = 'Reprovado'; 
  } 

  document.getElementById('resultado').innerText = mensagem; 
} 