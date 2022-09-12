export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }

  const client1: Client = {
    name: "Nexa",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
  }

//   console.log(client1)


/*EXERCICIO1

a)Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? 
Por que isso aconteceu?
 
Resposta: Consegui acessar todas as propriedades do objeto client1

*/  

export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }

//   const place1 = new Place("36240196")

/*EXERCICIO2

a) Mesmo sabendo que não é possível, tente criar uma instância dessa classe 
(ou seja: `new Place(...)`). Qual foi o erro que o Typescript gerou?

Resposta: Não foi possível criar uma instância de uma classe abstrata.


b) Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância 
dessa classe?

Resposta: Não pode ser usada para criar objetos para acessá-la, 
ela deve ser herdada de outra classe, ou retirar a nomeclatura de abstract

*/  

export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }
   public getResidentsQuantity(){
        return this.residentsQuantity
    }
  }

  const residence1 = new Residence(544, "36240196")
//   console.log("getResidence:", residence1.getCep())


  export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }
    public getFloorsQuantity(){
        return this.getFloorsQuantity
    }
  }

  const commerce1 = new Commerce(16,"36240196")
//   console.log("getCommerce:", commerce1.getCep())

  export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
      cep: string
     ) {
          super(cep);
    }
    public getMachinesQuantity(){
        return this.machinesQuantity
    }
  }

  const industry1 = new Industry(26,"36240196")
//   console.log("getIndustry:", industry1.getCep())



/*EXERCICIO3

a) O que precisaríamos fazer para conseguir efetivamente criar uma instância da classe Place?
 (última pergunta do exercício anterior)

Resposta: ela deve ser herdada de outra classe, ou retirar a nomeclatura de abstract


b) Por que a Place não é uma interface?

Resposta: Pois se fosse uma interface, não conseguiriamos manipular as suas propriedade,
coisas como protected ou privade, seriam impossiveis com interface.

c) Por que a classe Place é uma Classe Abstrata?

Resposta: Pois não será necessário a criação de uma instância para essa classe.

*/


class ResidentialClient extends Residence implements Client{
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity,cep)
    }

    public getCpf(){
      return  this.cpf
    }

    public calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }

  }

  const cliente1 = new ResidentialClient("Lincoln",1,500,"600600064",1,"36240196")
  
/*EXERCICIO4

a) Que métodos e propriedades essa classe possui? Por quê?

  Resposta: Esta classe possuirá seus proprios metodos e propriedades, sendo possivel
  acessar aquele que forem publicos.
*/

class CommercialClient  extends Commerce implements Client{
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity,cep)
    }

    public getCnpj(){
      return  this.cnpj
    }

    public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }

  }

  const commercial1 = new CommercialClient("Lincoln",1,500,"600600064",1,"36240196")


  /*EXERCICIO5

a) Quais as semelhanças dessa classe com a `ResidentialClient`?

Resposta: A tem o mesmo contrato cliente, e possuem diversas propriedades iguais.


b) Quais as diferenças dessa classe com a `ResidentialClient`?

Resposta: A diferença que são filhas de mães diferentes, e ocorre a mudança de cpf para cpnj, além do preço de 
consumo ser diferente.
*/


class IndustrialClient extends Industry implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private industryNumber: string, // tanto faz ser string ou number
      machinesQuantity: number,
      cep: string
    ) {
      super(machinesQuantity, cep);
    }
  
    public getIndustryNumber(): string {
      return this.industryNumber;
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
  }

  const clienteIndustrial1 = new IndustrialClient("Oxford",1,5000000,"50",150,"36240196")

/*EXERCICIO6

a)De qual classe a `IndustrialClient` deve ser filha? Por quê?

Resposta: ela deve ser filha da class Industry, pois foi a class criada justamente para o tipo de cliente
que fosse uma industria, onde é possivel ter contagem de máquinas.


b)Que interface a `IndustrialClient` implementa? Por quê?

Resposta: Ela possui o contrato do tipo Client, pois apesar de ser uma industria, não deixa
de possuir um contrato como clietne.


c)Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?

Resposta: 


*/