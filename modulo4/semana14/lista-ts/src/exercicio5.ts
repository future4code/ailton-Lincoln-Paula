// Considerando o array de usuários abaixo, crie uma função que receba 
// este array como parâmetro e retorne uma lista
// com apenas os emails dos usuários “admin”. 



enum ROLE1 {
	USER = 'user',
    ADMIN = 'admin'
}

type pessoas5 = {
    name:string,
    email:string
    role:ROLE1


}[]

const pessoas:pessoas5 =[
	{name: "Rogério", email: "roger@email.com", role: ROLE1.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE1.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE1.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE1.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE1.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE1.ADMIN}      
] 

function returnEmail (arr:pessoas5):string[] {
    
    const arrAux:string[] = []
    arr.filter((arr)=> {if(arr.role === 'admin'){
        arrAux.push(arr.email)
    }})
    
    return arrAux


}

console.log(returnEmail(pessoas))