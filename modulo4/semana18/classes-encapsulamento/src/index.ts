
// type Transaction = {
//     description: string,
//     value: number,
//     date: string
//   }

class Transaction  {
    // tipagem
    private date: string;
    private value: number;
    private description: string;

    // recebe, constroi
    constructor(date:string, value:number, description:string){
        this.date = date;
        this.value = value;
        this.description = description
    }
    // metodos getters

    public getDate():string {
        return this.date
    }
    public getValue():number {
        return this.value
    }
    public getDescription():string {
        return this.description
    }
}

const transaction1 = new Transaction("30-08-2022", 500, "Skin do lol")
const transaction2 = new Transaction("02-09-2022", 1500, "100 diamantes do free fire")
console.log('transação2:',transaction2.getDescription())

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(cpf: string, name: string, age: number,) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }

    const user1 = new UserAccount("123456789","Lincoln",22)
    const user2 = new UserAccount("987654321","Aisha",25)
    console.log(user1,user2)



class Bank  {
        // tipagem
        private accounts: UserAccount[];

        // recebe, constroi
        constructor(accounts:UserAccount[]){
            this.accounts = accounts;

        }
        // metodos getters
       public getUsers():UserAccount[] {
            return this.accounts
        }
}


// EXERCÍCIO 1 
  /*a) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
  
  R: SERVE PARA INICIAR/INICIALIZAR UM OBJETO CRIADO A PARTIR DE UMA CLASSE
  
  
  
b) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe
   (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem 
  "Chamando o construtor da classe User" foi impressa no terminal?
  
  R: IMPRIMIU 1 VEZ, QUANDO SE ADICIONA MAIS DE UM USUÁRIO, IRÁ IMPRIMIR A MENSAGEM CORRESPONDENTE
  AO NÚMEROS DE USUÁRIOS CRIADOS.



c) Como conseguimos ter acesso às propriedades privadas de uma classe?  
  
  R: CLASSE PRIVADAS SOMENTE SÃO ACESSÍVEIS, PERANTE A CRIAÇÃO DE FUNÇÕES DENTRO DA CLASSE, QUE PERMITE
  A ALTERAÇÃO OU VISUALIZAÇÃO DESSAS PROPRIEDADES PRIVADAS.
  EX: visualizarBalance(){ return this.balance}
  
  */



// EXERCÍCIO 2
/* 
     OK !
  
  */

// EXERCÍCIO 3
/* 
     OK !
  
  */


