
function calcularTurmas() { 
    let numAlunos = parseInt(document.getElementById("alunos").value); 
    let numTurmas = parseInt(document.getElementById("turmas").value); 
    let pessoasPorTurma = Math.floor(numAlunos / numTurmas); 
    let pessoasSemTurma = numAlunos % numTurmas; 

    let resultado = document.getElementById("resultado"); 
    resultado.textContent = "Quantidade de pessoas por turma: " + pessoasPorTurma + ". Pessoas sem turma: " + pessoasSemTurma + "."; 
} 
