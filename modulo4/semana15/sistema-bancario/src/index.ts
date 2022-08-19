import express, {Request, Response} from "express";
import cors from "cors";
import { users, Users} from "./data";


const app = express();
app.use(express.json());
app.use(cors());


app.post('/createAccount', (req: Request, res: Response) =>{
   const body = req.body
      let errorNumber = 500  
      
      try {
        if(!body.name){
            errorNumber = 400
            res.send("Ei não pode mandar dados vazios!")
            }
    if(typeof body.name !== 'string'){
        errorNumber = 404
        res.send(`Ei o nome precisa ser uma string`)
    }
    if(typeof body.cpf !== 'number'){
        errorNumber = 404
        res.send(`Ei o cpf precisa ser um número`)
    }
    if(typeof body.birthDate !== 'number'){
        errorNumber = 404
        res.send(`Ei a data de nascimento precisa ser um número`)
    }
    if(body.cpf.toString().length < 11){
        errorNumber = 404
        res.send("Ei o cpf precisa ter 11 digitos !")
    }
        
    function idadeMaior18(nascimento:string){
    
      let hoje = new Date();
      const diaAtual:number = hoje.getDate()
      const anoAtual:number = hoje.getFullYear()
      const mesAtual:number = (hoje.getMonth()+1)
    
      let date = nascimento.split('-')

      const dia = Number(date[0])
      const mes = Number(date[1])
      const ano = Number(date[2])

      let m:number = mesAtual - mes
      let idade:number = anoAtual - ano
    
      if(m < 0 || (m === 0 && diaAtual < dia)){
        idade--;
      }
    
      if(idade < 18){

        errorNumber = 404
        throw new Error("Você não é maior de idade !")
      }
    
    }

    idadeMaior18(body.birthDate)

    if(users.filter((user) => { return user.cpf === body.cpf }).length > 0) {
        errorNumber = 400
        throw new Error(`Cpf já existente no banco de dados`)
      }
      
    const newUser:Users = {

        id: users.length+1,
        name: body.name,
        cpf: body.cpf,
        birthDate: body.birthDate,
        balance: 0,
        extract: {
          valor: 0,
          data: "",
          description: "",
        },
    }
    
      users.push(newUser)
      res.status(201).send({message: "Usuário cadastrado no banco, parabéns !", data: users})


} catch (error: any) {
    
    res.status(errorNumber).send({ message: error.message })
}

})

app.get("/getBalance", (req: Request, res: Response) =>{
    let errorNumber = 500
    const {name, cpf} = req.body

    try {
        if(!name){
            errorNumber = 400
            res.send("Ei não pode mandar dados vazios!")
            }
        if(typeof name !== 'string'){
            errorNumber = 404
            res.send(`Ei o nome precisa ser uma string`)
        }
        if(typeof cpf !== 'number'){
            errorNumber = 404
            res.send(`Ei o cpf precisa ser um número`)
        }
        if(cpf.toString().length < 11){
            errorNumber = 404
            res.send("Ei o cpf precisa ter 11 digitos !")
        }

    if((users.filter((user)=>{return user.name.toLocaleLowerCase() === name.toLocaleLowerCase() && user.cpf === cpf})).length > 0){
        users.filter((user)=>{ if(user.name.toLocaleLowerCase() === name.toLocaleLowerCase() && user.cpf === cpf){
                 res.send(`O seu saldo atual é:${user.balance}`)
            }})
        }else{
            errorNumber = 404
            throw new Error('Usuário não encontrado, verifique seu cpf/nome')
        }

     
        
    } catch (error: any) {
    res.status(errorNumber).send({ message: error.message })
    }
    


   
})

app.put('/addBalance', (req: Request,res: Response) =>{
    let errorNumber = 500
    const body = req.body

    try {
        
        if(!body.name || !body.cpf || body.add <= 0){
            errorNumber = 400
            res.send("Ei não pode mandar dados vazios!")
            }
        if(typeof body.name !== 'string'){
        errorNumber = 404
        res.send("Ei o nome precisa ser uma string !")
        }
        if(typeof body.cpf !== 'number'){
            errorNumber = 404
            res.send("Ei o cpf precisa ser um número !")

        }
        if(typeof body.add !== 'number'){
            errorNumber = 404
            res.send("Ei o saldo precisa ser um número !")
        }
        if(body.cpf.toString().length < 11){
            errorNumber = 404
            res.send("Ei o cpf precisa ter 11 digitos !")
        }
        // console.log(body)
        // if((users.filter((user)=>{return user.name.toLocaleLowerCase() === body.name.toLocaleLowerCase() && user.cpf === body.cpf})).length > 0){
        //     users.filter((user)=>{ if(user.name.toLocaleLowerCase() === body.name.toLocaleLowerCase() && user.cpf === body.cpf){
        //              res.send(`O seu saldo atual é:${user.balance}`)
        //         }})
        //     }else{
        //         errorNumber = 404
        //         throw new Error('Usuário não encontrado, verifique seu cpf/nome')
        //     }
        
    } catch (error: any) {
     res.status(errorNumber).send({ message: error.message })
    }



//  const userVerify

})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
}); 