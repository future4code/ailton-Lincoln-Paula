// EXERCÍCIO DE INTERPRETAÇÃO CÓDIGO
//EXERCÍCIO 1

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

  /*
  A)) 
  SERÁ IMPRESSO NO COSOLE, TODOS OS ITENS, TODOS OS NÚMEROS DO INDEX, E A ARRAY USUARIO TODA, SEM QUE NECESSARIAMENTE
  PRECISEMOS FAZER UM LOOP COM FOR OU WHILE, A FUNÇÃO MAP, JÁ RETORNARÁ ITEM POR ITEM DO NOSSO ARRAY */



  //EXERCICIO 2

//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

  /* 
  A))
  SERÁ IMPRESSO NO CONSOLE, APENAS OS ITENS NOME, QUE ESTÁ DENTRO DA ARRAY, OU SEJA, "Amanda Rangel"
  "Láis Petra" e "Letícia Chijo" */ 
  


  //EXERCICIO 3

//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

  /*SERÁ IMPRESSO NO CONSOLE, TUDO AQUILO QUE FOR DIFERENTES DO APELIDO CHIJO, OU SEJA, SERÃO IMPRESSOS
  OS OBJETOS: { nome: "Amanda Rangel", apelido: "Mandi" },
              { nome: "Laís Petra", apelido: "Laura" } */


            

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
//EXERCÍCIO 1

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//A)) APENAS O NOME DOS DOGUINHOS NO CONSOLE

//  const novoArrayNomeDoguinhos = pets.map((objeto, numeroDosDoguinhos, arrayDosPets) => {
//           return objeto.nome  })

//           console.log(novoArrayNomeDoguinhos)




//B)) APENAS OS DOGUINHOS SALSICHAS JUNTAMENTE DE SEUS NOMES.

//  const novoArrayDoguinhoSalsicha = pets.filter((objeto, numeroDosDoguinhos, arrayDosPets) => {
//           return objeto.raca === "Salsicha"  })

//           console.log(novoArrayDoguinhoSalsicha)



//C)) APENAS RETORNANDO MENSAGEM DE DESCONTO PARA OS POODLES

// const novoArrayDoguinhosDesconto = pets.filter((objeto, numeroDosDoguinhos, arrayDosPets) => {

//             return objeto.raca === "Poodle"  }).map((objeto) => {
//                     console.log("Você ganhou um cupom de desconto de 10% para tosar o/a " + objeto.nome)
//                 })
              

//EXERCÍCIO 2

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }]


//A))APENAS O NOME DOS PRODUTOS NO CONSOLE


//  const novoArrayNomeProduto = produtos.map((objeto, numeroHortifruti, arrayProdutos) => {
//           return objeto.nome  })

//           console.log(novoArrayNomeProduto)


//B))OBJETO COM DESCONTO DE 5% (0.95%)

//  const novoArrayDescontoProduto = produtos.map((objeto, numeroHortifruti, arrayProdutos) => {
//     return { nome : objeto.nome, 
//         preco : (objeto.preco * 0.95 )}} )
        
//           console.log(novoArrayDescontoProduto)



//C))RETORNA APENAS NOME DAS BEBIDAS
//   const retornaApenasBebidas = produtos.filter((objeto,  numeroHortifruti, arrayProdutos) => {
//         if(objeto.categoria === "Bebidas") {
//             console.log(objeto.nome) 
//         }
         
//     })


//D))RETORNA APENAS OBJETOS COM YPE NO NOME

//   const retornaApenasYpe = produtos.filter((objeto,  numeroHortifruti, arrayProdutos) => {
//         if(objeto.nome.includes("Ypê")) {
//             console.log(objeto.nome) 
//         }
         
//     })

//E))RETORNA APENAS STRINGS COM OBJETOS DE NOME "YPE".

// const novoArrayRetornaString = produtos.filter((objeto, numeroHortifruti, arrayProdutos ) => {

//             return objeto.nome.includes("Ypê")}).map((objeto) => {
//                     console.log("Compre", objeto.nome, "por", + objeto.preco)
//                 })
              


//DESAFIOS 
//(AINDA FAZENDO !)
