       let num1 = document.querySelector("#numero1");
       let num2 = document.querySelector("#numero2");
       let botao = document.querySelector("#maior"); 

       function Maior()
       {

              let vlr1 = num1.value;
              let vlr2 = num2.value;
              let  maior = vlr1 ;
              if (maior < vlr2){
                     maior = vlr2
              }
            alert (maior)
       }

       botao.onclick = function(){
              Maior()
       }     

