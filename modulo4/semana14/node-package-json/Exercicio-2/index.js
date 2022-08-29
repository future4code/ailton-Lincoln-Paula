const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

	if(operacao, num1, num2){
    switch(operacao){
	case "soma":
		return console.log("a soma dos numeros é:", num1+num2)
		break;
	case "subtração":
		return console.log("a subtração dos números é:", num1-num2)
		break;
	case "multiplicação":
		return console.log("a multiplicação dos números é:", num1*num2)
		break;
	case "divisão":
		return console.log("a divisão dos números é:",num1/num2)
		break;
     default:
         return  console.log('Escreva as operações por extenso !')
     break;
	}}else{
		console.log('Faltou algum argumento !')
	}
