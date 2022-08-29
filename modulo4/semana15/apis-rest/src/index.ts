import express, {Request, Response} from "express";
import cors from "cors";
import {users, UsersType} from './data'


const app = express();

app.use(express.json());
app.use(cors());

// EXERCICIO 1, 2 e 3 (REFATORADO)

app.get('/users', (req: Request, res: Response) =>{
    let errorNumber = 500;
    try {

    const type:string = req.query.type as string 
    const name:string = req.query.name as string
    
    if(type.length === 0 && name.length === 0 ){
        
        errorNumber = 400
        throw new Error("Ei, não pode mandar dados vazios !")
    }

    if(type && type.toLowerCase() !== 'normal' &&  type.toLowerCase() !== 'admin'){

        errorNumber = 400
        throw new Error("Só é aceito tipo normal e admin")

    }
    if(name.length > 0){

        if(users.filter((users) => { return users.name.toLowerCase() === name.toLowerCase() }).length === 0) {
            errorNumber = 404
    
            throw new Error(`Usuário não encontrado !`)
          }

    }

    

    const roleUsers = users.filter((users)=>{

     return users.type.toLowerCase().includes(type.toLowerCase()) && 
     users.name.toLowerCase().includes(name.toLowerCase())
    })

    res.send(roleUsers)


    } catch (error:any) {
        res.status(errorNumber).send({ message: error.message });
    }


})

// *a. Qual método HTTP você deve utilizar para isso?*
// Utilizar o metodo GET para buscar/pegar algo

// *b. Como você indicaria a **entidade** que está sendo manipulada?*
// Indicaria com o nome users, para ficar claro que tem relação com usuário o endpoint


// *a.* Como você passou os parâmetros de type para a requisição? Por quê?
// Passei por query, achei mais vantajoso e simples. 

// b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?
// Na criação do array podemos fazer type enum para essa propriedade, e no endpoint podemos fazer 
// verificação pra ver de fato o que esta chegando e como esta chegando com if.


// *a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?*
// query ou params, sendo params mais utilizados para números e query para strings.




// =====================================================================================================

// EXERCICIO 4 


app.post('/users/create', (req: Request, res: Response) =>{
    let errorNumber = 500;

    try {

       const newUser:UsersType = {

        "id": users.length+1,
        "name": req.body.name,
        "email": req.body.email,
        "type": req.body.type,
        "age": req.body.age

       } 


     if(!newUser.name || !newUser.email || !newUser.type || !newUser.age){

        errorNumber = 400;
        throw new Error("Ei não pode mandar valores vazios !");

     }   
    
     users.push(newUser)
     res.status(201).send({message: "Usuário criado", data: users})

    } catch (error: any) {

        res.status(errorNumber).send({ message: error.message });
    }


})

// a. Mude o método do endpoint para `PUT`. O que mudou?
// Nada mudou, continua adicionando normalmente

// b. Você considera o método `PUT` apropriado para esta transação? Por quê?
// "PUT: Create or update a resource with the supplied representation;
// POST: Submits data to be processed by the identified resource"

// Esse trecho da documentação da microsoft fala que put serve para criar/atualizar, e post
// para enviar dados para serem processados 


//EXERCICIO 5 

app.put('/editUser/:id', (req: Request, res: Response) =>{
    let errorNumber = 500;

    try {

    const id = Number(req.params.id)

        if(typeof req.body.name !== "string"){
            errorNumber = 400
            throw new Error(`O nome deve ser uma string !`)
        }


       if(users.filter((user) => { return user.id === id }).length === 0) {
        errorNumber = 404
        throw new Error(`Id nao encontrado !`)
      }

      if(!req.body.name){

        errorNumber = 400;
        throw new Error("Ei não pode mandar valores vazios !");

     } 

     const editName = users.filter((user)=>{
        if(user.id === id){
            user.name = req.body.name
        }
     })
    
     res.status(201).send({message: "Usuário modificado", data: users})

    } catch (error: any) {

        res.status(errorNumber).send({ message: error.message });
    }


})


// EXERCICIO 7


app.delete('/delete/:id', (req,res)=>{


    try {

     const id = Number(req.params.id)

     if(!id){
        res.statusCode = 401

        throw new Error("Ei , o id precisa ser declarado")

     }

     if(typeof id !== "number") {
        res.statusCode = 400
        throw new Error(`Id precisa ser do tipo númerico !`)
      }

     if(users.filter((user) => { return user.id === id }).length === 0) {
        res.statusCode = 404
        throw new Error(`Id nao encontrado !`)
      }

        const deleteUser = users.filter((user)=>{

            if(user.id !== id){
                return user
            }

       })

       res.status(200).send({message: "Usuário deletado !", data: deleteUser})

    } catch (error: any) {

        res.status(res.statusCode || 500).send({ message: error.message })

    }

 })

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});