import express, { Request, Response } from "express";
import cors from "cors";
import { users, Users, Extract } from "./data";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/createAccount", (req: Request, res: Response) => {
  const body = req.body;
  let errorNumber = 500;

  try {
    if (!body.name) {
      errorNumber = 400;
      throw new Error("Ei não pode mandar dados vazios!");
    }
    if (typeof body.name !== "string") {
      errorNumber = 404;
      throw new Error(`Ei o nome precisa ser uma string`);
    }
    if (typeof body.cpf !== "number") {
      errorNumber = 404;
      throw new Error(`Ei o cpf precisa ser um número`);
    }
    if (typeof body.birthDate !== "string") {
      errorNumber = 404;
      throw new Error(`Ei a data de nascimento precisa ser uma string`);
    }
    if (body.cpf.toString().length < 11) {
      errorNumber = 404;
      throw new Error("Ei o cpf precisa ter 11 digitos !");
    }

    function idadeMaior18(nascimento: string) {
      let hoje = new Date();
      const diaAtual: number = hoje.getDate();
      const anoAtual: number = hoje.getFullYear();
      const mesAtual: number = hoje.getMonth() + 1;

      let date = nascimento.split("-");

      const dia = Number(date[0]);
      const mes = Number(date[1]);
      const ano = Number(date[2]);

      let m: number = mesAtual - mes;
      let idade: number = anoAtual - ano;

      if (m < 0 || (m === 0 && diaAtual < dia)) {
        idade--;
      }

      if (idade < 18) {
        errorNumber = 404;
        throw new Error("Você não é maior de idade !");
      }
    }

    idadeMaior18(body.birthDate);

    if(
      users.filter((user) => {
        return user.cpf === body.cpf;
      }).length > 0
    ) {
      errorNumber = 400;
      throw new Error(`Cpf já existente no banco de dados`);
    }

    const newUser: Users = {
      id: users.length + 1,
      name: body.name,
      cpf: body.cpf,
      birthDate: body.birthDate,
      balance: 0,
      extract: [{
        valor: 0,
        data: "",
        description: "",
      }],
    };

    users.push(newUser);
    res
      .status(201)
      .send({
        message: "Usuário cadastrado no banco, parabéns !",
        data: users,
      });
  } catch (error: any) {
    res.status(errorNumber).send({ message: error.message });
  }
});

app.get("/getBalance", (req: Request, res: Response) => {
  let errorNumber = 500;
  const { name, cpf } = req.body;

  try {
    if (!name) {
      errorNumber = 400;
      throw new Error("Ei não pode mandar dados vazios!");
    }
    if (typeof name !== "string") {
      errorNumber = 404;
      throw new Error(`Ei o nome precisa ser uma string`);
    }
    if (typeof cpf !== "number") {
      errorNumber = 404;
      throw new Error(`Ei o cpf precisa ser um número`);
    }
    if (cpf.toString().length < 11) {
      errorNumber = 404;
      throw new Error("Ei o cpf precisa ter 11 digitos !");
    }

    if (
      users.filter((user) => {
        return (
          user.name.toLocaleLowerCase() === name.toLocaleLowerCase() &&
          user.cpf === cpf
        );
      }).length > 0
    ) {
      users.filter((user) => {
        if (
          user.name.toLocaleLowerCase() === name.toLocaleLowerCase() &&
          user.cpf === cpf
        ) {
          res.send(`O seu saldo atual é:${user.balance}`);
        }
      });
    } else {
      errorNumber = 404;
      throw new Error("Usuário não encontrado, verifique seu cpf/nome");
    }
  } catch (error: any) {
    res.status(errorNumber).send({ message: error.message });
  }
});

app.put("/addBalance", (req: Request, res: Response) => {
  let errorNumber = 500;
  const body = req.body;

  let hoje = new Date();
  const diaAtual: number = hoje.getDate();
  const anoAtual: number = hoje.getFullYear();
  const mesAtual: number = hoje.getMonth() + 1;

  try {
    if (!body.name || !body.cpf || body.value <= 0) {
      errorNumber = 400;
      throw new Error("Ei não pode mandar dados vazios!");
    }
    if (typeof body.name !== "string") {
      errorNumber = 404;
      throw new Error("Ei o nome precisa ser uma string !");
    }
    if (typeof body.cpf !== "number") {
      errorNumber = 404;
      throw new Error("Ei o cpf precisa ser um número !");
    }
    if (typeof body.value !== "number") {
      errorNumber = 404;
      throw new Error("Ei o saldo precisa ser um número !");
    }
    if (body.cpf.toString().length < 11) {
      errorNumber = 404;
      throw new Error("Ei o cpf precisa ter 11 digitos !");
    }

    if (
      users.filter((user) => {
        return (
          user.name.toLocaleLowerCase() === body.name.toLocaleLowerCase() &&
          user.cpf === body.cpf
        );
      }).length > 0
    ) {
      users.filter((user) => {
        if (
          user.name.toLocaleLowerCase() === body.name.toLocaleLowerCase() &&
          user.cpf === body.cpf
        ) {
          user.balance += body.value;
          user.extract.push({
            valor: body.value,
            data: `${diaAtual}-${mesAtual}-${anoAtual}`,
            description: "Deposito de dinheiro"
          })
          res.send({ message:`Saldo adicionado ! saldo atual: ${user.balance}`, extrato: user.extract});
        }
      });
    } else {
      errorNumber = 404;
      throw new Error("Usuário não encontrado, verifique seu cpf/nome");
    }
  } catch (error: any) {
    res.status(errorNumber).send({ message: error.message });
  }

  //  const userVerify
});

app.patch("/payAccount", (req: Request, res: Response) => {
  let errorNumber = 500;
  const body = req.body;

  try {
    if (!body.name || !body.cpf || body.price <= 0 || !body.description) {
      errorNumber = 400;
      throw new Error("Ei não pode mandar dados vazios!");
    }
    if (typeof body.name !== "string") {
      errorNumber = 404;
      throw new Error("Ei o nome precisa ser uma string !");
    }
    if (typeof body.cpf !== "number") {
      errorNumber = 404;
      throw new Error("Ei o cpf precisa ser um número !");
    }
    if (typeof body.price !== "number") {
      errorNumber = 404;
      throw new Error("Ei o preço precisa ser um número !");
    }
    if (typeof body.data !== "string") {
      errorNumber = 404;
      throw new Error("Ei o data precisa ser uma string !");
    }
    if (body.cpf.toString().length < 11) {
      errorNumber = 404;
      throw new Error("Ei o cpf precisa ter 11 digitos !");
    }

    const paymetUser = users.filter((user) => {
      if (
        user.name.toLocaleLowerCase() === body.name.toLocaleLowerCase() &&
        user.cpf === body.cpf
      ) {
        const arrDate = body.data.split("-");
        let hoje = new Date();
        const diaAtual: number = hoje.getDate();
        const anoAtual: number = hoje.getFullYear();
        const mesAtual: number = hoje.getMonth() + 1;

        if (user.balance < body.price) {
          throw new Error(`Saldo insuficiente ! seu saldo é ${user.balance}`);
        }
        const d1 = new Date(anoAtual, mesAtual, diaAtual);
        const d2 = new Date(arrDate[2], arrDate[1], arrDate[0]);

        let diff = d2.getTime() - d1.getTime();
        diff = diff / (1000 * 60 * 60 * 24);

        if (diff < 0) {
          throw new Error("Data não pode ser anterior ao dia de hoje!");
        }

        if (body.data === "") {
          body.data = `${diaAtual}-${mesAtual}-${anoAtual}`;
        }
        
        const newExtract:Extract = {
            valor: body.price,
            data: body.data,
            description: body.description
        }

        user.balance -= body.price
          user.extract.push(newExtract)
        res.send({message:`Pagamento efetuado com sucesso ! saldo em conta ${user.balance}`,
      data: user})
      }
    });

  } catch (error: any) {
    res.status(errorNumber).send({ message: error.message });
  }
});

app.put("/transfer", (req: Request, res: Response) =>{

   let errorNumber = 500;
    const body = req.body


    let hoje = new Date();
    const diaAtual: number = hoje.getDate();
    const anoAtual: number = hoje.getFullYear();
    const mesAtual: number = hoje.getMonth() + 1;

  try {

    if (!body.name || !body.cpf || body.value <= 0 || !body.destinatary) {
      errorNumber = 400;
      throw new Error("Ei não pode mandar dados vazios!");
    }
    if (typeof body.name !== "string") {
      errorNumber = 404;
      throw new Error("Ei o nome precisa ser uma string !");
    }
    if (typeof body.cpf !== "number") {
      errorNumber = 404;
      throw new Error("Ei o cpf precisa ser um número !");
    }
    if (typeof body.value !== "number") {
      errorNumber = 404;
      throw new Error("Ei o valor precisa ser um número !");
    }
    if (typeof body.destinatary !== "string") {
      errorNumber = 404;
      throw new Error("Ei o destinatário precisa ser uma string !");
    }
    if (body.cpf.toString().length < 11) {
      errorNumber = 404;
      throw new Error("Ei o cpf precisa ter 11 digitos !");
    }

    if(users.filter((user)=>{return user.name.toLocaleLowerCase() === body.name.toLocaleLowerCase()}).length === 0){
      errorNumber = 404;
      throw new Error("Usuário não existente no banco de dados !");
    }
    if(users.filter((user)=>{return user.name.toLocaleLowerCase() === body.destinatary.toLocaleLowerCase()}).length === 0){
      errorNumber = 404;
      throw new Error("Destinatário não existente no banco de dados !");
    }
    if(body.name === body.destinatary){
      errorNumber = 404
      throw new Error("Destinatário deve ser diferente do usuário !");
    }

   const verifyBalance =  users.filter((user)=>{
      if(user.name === body.name){
        if(user.balance < body.value){
          errorNumber = 400
          throw new Error("Saldo insuficiente !");
        }
      }
     })


    const transfer = users.filter((users)=>{

      if(body.name.toLocaleLowerCase() === users.name.toLocaleLowerCase()){
        users.balance -= body.value

        users.extract.push({
            valor: -body.value,
            data: `${diaAtual}-${mesAtual}-${anoAtual}`,
            description: `transferência bancária, destinário: ${body.destinatary} `
        })
      }

      if(body.destinatary.toLocaleLowerCase() === users.name.toLocaleLowerCase()){
        users.balance += body.value

        users.extract.push({
          valor: body.value,
          data: `${diaAtual}-${mesAtual}-${anoAtual}`,
          description: `transferência bancária, remetende: ${body.name} `
      })
      }
    })

    res.send({message: "Transferência concluída !", data: users})

  } catch (error: any) {
      res.status(errorNumber).send({ message: error.message });
  }


})

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
