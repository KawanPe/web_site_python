const btn = document.querySelector("#bntplay");

btn.addEventListener("click", function(e){
  var codigo = document.querySelector("#codigo");
  var codigovalor = codigo.value;
  var console = document.querySelector("#console");
  codigovalor = codigovalor.trim();
  var inicio = codigovalor.substr(0,7);
  var inicio2 = codigovalor.substr(0,8);
  var inicio3 = codigovalor.substr(0,9);
  var fim = codigovalor.substr(-2);
  var fim2 = codigovalor.substr(-3);
  var n;
   
   
  if(inicio == "print('" || inicio2 == "print( '" || inicio == "Print('" || inicio2 =="Print( '" || inicio == "PRINT('" || inicio2 == "PRINT( '" || inicio2 == "print ('"  || inicio2 == "Print ('" || inicio2 == "PRINT ('"  || inicio3 == "print ( '"  || inicio3 == "Print ( '" || inicio3 == "PRINT ( '" ){
    if(fim == "')" || fim2 == "' )" || fim == "') "){
      if (inicio2 == "print ('" || inicio2 == "print( '" || inicio2 == "Print ('" || inicio2 == "Print( '"  || inicio2 == "PRINT ('" || inicio2 == "PRINT( '"){
        if(fim2 =="' )"){
          n = codigovalor.slice(0, -3);
          n = n.substring(8);
          console.innerText = n;
        }else{
          n = codigovalor.slice(0, -2);
          n = n.substring(8);
          console.innerText = n;
        }
      }else if(inicio3 == "print ( '" || inicio3 == "Print ( '" || inicio3 == "PRINT ( '"){
        if(fim2 =="' )"){
          n = codigovalor.slice(0, -3);
          n = n.substring(9);
          console.innerText = n;
        }else{
          n = codigovalor.slice(0, -2);
          n = n.substring(9);
          console.innerText = n;
        }
      }else if (inicio == "print('" || inicio == "Print('" || inicio == "PRINT('"){
        if(fim2 =="' )"){
          n = codigovalor.slice(0, -3);
          n = n.substring(7);
          console.innerText = n;
        }else{
          n = codigovalor.slice(0, -2);
          n = n.substring(7);
          console.innerText = n;
        }
      }
    }else{
      alert("Erro: 1- tente remover os espaços em branco depois dos Parênteses. 2- feche as ASPAS SIMPLES e Parênteses abertos");
      console.innerText = "";
    }
  }else{
    alert("Erro camando não identificado: 1 -Remova o espaço entre o comando Print e o Parênteses. 2- troque as aspas duplas por aspas simples. 3- feche todas as aspas e Parênteses");
    console.innerText = "";
  }
});
