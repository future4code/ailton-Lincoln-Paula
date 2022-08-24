import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from 'dotenv';
import { Request, Response } from "express"


dotenv.config();
const app: Express = express();
app.use(express.json());
app.use(cors());


export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

// pega o usuário pelo nome => comentado pq get da conflito
//  app.get("/actor/:name", async (req: Request, res: Response) => {
//    try {

//       const name = req.params.name
      
//       const getUserByName = async (name: string): Promise<any> => {
//          const result = await connection.raw(`
//             SELECT * FROM Actor WHERE name = '${name}'
//             `)

//             return result[0][0]
//       }

      
//        console.log(await getUserByName(name))

//    } catch (error:any) {
//        console.log(error.message)
//      res.status(500).send("Unexpected error")
//    }
//  })



//  pega o usuário pelo id passado => comentado pq get da conflito
// app.get("/users/:id", async (req: Request, res: Response) => {
//    try {
//       const id = req.params.id
      
//             // const busca ator pelo id, feita com o raw
//             const getActorById = async (id: string): Promise<any> => {
//                const result = await connection.raw(`
//                  SELECT * FROM Actor WHERE id = '${id}'
//                `)
             
//                 return result[0][0]
      
//              }

//          console.log(await getActorById(id))


//    } catch (error:any) {
//        console.log(error.message)
//      res.status(500).send("Unexpected error")
//    }
//  })



// pegar a quantidade de atores ou atrizes, conforma passado o gender
// app.get("/users/:gender", async (req: Request, res: Response) => {

//    const gender = String(req.params.gender)

//     try {
        
//      if(gender !== "male" && gender !== "female"){
//       res.statusCode = 404
//       throw new Error(`O valor de entrada precisa ser female ou male`)
//      }

//      const getCountGender = async(gender :string) :Promise<any> =>{
//       const result = await connection.raw(`
//          SELECT COUNT(*) FROM Actor WHERE gender = '${gender}';
//          `)

//          return result[0][0].count
//      }
       
//        console.log(await getCountGender(gender))

//     } catch (error:any) {
//       res.status(res.statusCode || 500).send({ message: error.message })
//     }
//  })

// adicionar usuário na tabela actor
app.post('/create', async(req:Request, res:Response): Promise<any> =>{
  
   try {
               const createActor = async (
               id: string,
               name: string,
               salary: number,
               dateOfBirth: Date,
               gender: string
             ): Promise<void> => {
               await connection
                 .insert({
                   id: id,
                   name: name,
                   salary: salary,
                   birth_date: dateOfBirth,
                   gender: gender,
                 })
                 .into("Actor");
             };
         
      createActor(req.body.id,req.body.name,req.body.salary,req.body.dateOfBirth,req.body.gender)
         res.status(201).send(`Usuário criado com sucesso !`)
         
      } catch (error:any) {
         res.status(res.statusCode || 500).send({message: error.message})
      }

})


app.put('/usersAttSalary', async(req:Request, res:Response) =>{

   try {
      const {id, salary} = req.body

      const updateSalary = async(id: string, salary:number):Promise<any> =>{

      await connection("Actor")
      .update({
         salary: salary
      }).where("id",id)

       }

      await updateSalary(id, salary)
      
      res.send(`O salário foi atualizado`)

      
   } catch (error:any) {

      res.status(res.statusCode || 500).send({message: error.message})

   }


})


app.delete('/delete/:id', async(req:Request, res:Response) =>{

   try {
         const {id} = req.params  

         const deleteUser = async(id:string):Promise<any> =>{

            await connection("Actor").delete().where("id",id)
            
         }

         deleteUser(id)
         res.send(`Usuário deletado !`)
            
   } catch (error:any) {

      res.status(res.statusCode || 500).send({message: error.message})

   }})

   
app.get("/getMD", async(req:Request, res:Response) =>{

   try { 
      const gender = String(req.body.gender)

      const getMDGender = async(gender:string): Promise<any> =>{

       const result = await  connection("Actor").avg("salary").where("gender", gender)
          console.log(result[0])
      }

      getMDGender(gender)


   } catch (error: any) {
      
      res.status(res.statusCode || 500).send({message: error.message})

   }
   


})  


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});