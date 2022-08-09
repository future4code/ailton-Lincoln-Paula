
//1- Para rodar alguma coisa no back end através do terminal, podemos rodar o comando node (nome do arquivo).

const red = "\u001b[31m";
const blue = "\u001b[34m";
const reset = "\u001b[0m"

if(process.argv[2], process.argv[3])
{
console.log(`Olá ${red + process.argv[2]}`,`${reset + 'você possui'}`,`${blue + process.argv[3]} anos !`)

}else{
    console.log('Erro, faltou algum argumento !')
}

