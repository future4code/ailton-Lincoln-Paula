```
//Exercicio onde se faz o cálculo de média ponderada, primeiro calculei as notas tiradas nas provas pelos pesos
//Após isso, divide todas as notas pelos pesos somadas (6) pesos(1+2+3) e fiz uma condicional retorando os conceitos.

function calculaNota(ex, p1, p2) {
    // Escreva seu código aqui
    let pesoPrimeiraProva = p1*2
    let pesoSegundaProva = p2*3
    let calculoMedia = (ex+pesoPrimeiraProva+pesoSegundaProva)/6
    
    if(calculoMedia >= 9){
      return "A"
    } 
    else if(calculoMedia < 9 && calculoMedia >= 7.5){
      return "B"
    }
    else if(calculoMedia < 7.5 && calculoMedia >= 6 ){
      return "C"
    }
    else if(calculoMedia < 6){
      return "D"
    }
    
  }
```

