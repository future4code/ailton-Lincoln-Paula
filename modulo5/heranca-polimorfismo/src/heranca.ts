class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }

      public introduceYourself(): string {
        return `Olá, bom dia! ${this.getName()}`
      }
  }

const user0 = new User("001", "user1@hotmail.com", "Joao", "joao123")

// console.log(user0)

/* EXERCÍCIO1
a) Seria possível imprimir a senha (password) atrelada a essa instância?

Resposta: Apesar da propriedade password estar privada, foi possível visualizar a sua no console
 o seu valor atribuido



b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?

Resposta: Apenas uma vez, pois criado apenas um objeto provindo da class User
*/ 


class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

  const custumer1 = new Customer("002", "custumer1@hotmail.com", "Felix", "felix123","1553625124")
  const custumer2 = new Customer("003", "custumer2@hotmail.com", "Ana", "ana123","543212156")
//   console.log(custumer1.)
//   console.log(custumer2)
    console.log(custumer1.introduceYourself())
  
  /*EXERCICIO2 
a) Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal?

Resposta: Foi impressa 2 vezes, pois foi criado 2 usuários.


b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? 
Por quê?

Resposta: Foi impressa 3 vezes, pois foi criado 2 usuários agora com Customer e 1 anteriormente.

*/


/*EXERCICIO3
Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?

Resposta: Não foi possível imprimir, pois a propriedade password, esta de forma privada.

*/


/*EXERCICIO4
Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?

Resposta: Não foi possível imprimir, pois a propriedade password, esta de forma privada.

*/


/*EXERCICIO5
Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?

Resposta: Não foi possível imprimir, pois a propriedade password, esta de forma privada.

*/