
const posts:post = [
      {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
      },
      {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
      },
      {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
      },
      {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
      },
      {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
      }
    ]
  
    
//  a) Copie o código acima para um arquivo .ts depois:
    
// - crie um *type* para representar um post;
// - Utilize esse mesmo tipo criado acima para fazer a tipagem do array posts.
// - Dica
        
// Lembre-se da variável de tipo do typescript, que é uma descrição estrutural 
// do comportamento de um objeto. Ou seja, o type define as propriedades e tipos
//  que o objeto deve ter. 
 

 type post = {
    autor:string,
    texto:string
 }[]
        



// ======================================================================================================
// b) Observe abaixo a função buscarPostsPorAutor(), escrita em JavasScript:
    

//     function buscarPostsPorAutor(posts, autorInformado) {
//       return posts.filter(
//         (post) => {
//           return post.autor === autorInformado
//         }
//       )
//     }


// Quais são as entradas e saídas dessa função? Copie a função para o mesmo arquivo
//      .ts do array de posts e faça a tipagem necessária.

// entradas: array de objetos e string,
// saida: objeto



    function buscarPostsPorAutor(posts:post, autorInformado:string) {
      return posts.filter(
        (post) => {
          return post.autor === autorInformado
        }
      )
    }

    console.log(buscarPostsPorAutor(posts,"Hermione Granger"))