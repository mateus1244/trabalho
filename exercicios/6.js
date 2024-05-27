let num1 = document.querySelector("#numero1");
let num2 = document.querySelector("#numero2");
let num3 = document.querySelector("#numero3");
let num4 = document.querySelector("#numero4");
let botao = document.querySelector("#menor"); 

function Menor()
{

       let vlr1 = num1.value;
       let vlr2 = num2.value;
       let vlr3 = num3.value;
       let vlr4 = num4.value;
       let  menor = vlr1 ;
       if (menor > vlr2){
              menor = vlr2
       }
       if (menor > vlr3){
              menor = vlr3
       }
       if (menor > vlr4){
              menor = vlr4
       }
     alert (menor)
}

botao.onclick = function(){
       Menor()
}     