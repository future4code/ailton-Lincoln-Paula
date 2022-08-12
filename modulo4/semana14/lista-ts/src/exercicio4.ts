// O seguinte `array` traz as pessoas colaboradoras de uma empresa, com seus
//  salários, setores e se trabalham presencialmente ou por home office:

enum SETORES {
	MARKETING="marketing",
	VENDAS="vendas",
	FINANCEIRO="financeiro",
}

type pessoas = {
    nome:string,
    salário:number,
    setor:SETORES,
    presencial:boolean
}[]

const arrayTrabalhos:pessoas = [
	{ nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: SETORES.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: SETORES.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: SETORES.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: SETORES.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: SETORES.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: SETORES.MARKETING, presencial: true }
]

function filterMarketingPresencial (arr:pessoas) {

    return arr.filter((pessoa)=> {return pessoa.setor === 'marketing' && pessoa.presencial === true})

}


console.log(filterMarketingPresencial(arrayTrabalhos))

// Considerando o `array`acima, crie um `ENUM` para os setores e um `
// type` para as pessoas colaboradoras. Em seguida, crie uma função que receba este 
// `array`como parâmetro e retorne apenas as pessoas do setor de marketing que trabalham 
// presencialmente.