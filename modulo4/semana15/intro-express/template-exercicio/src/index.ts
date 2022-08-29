import express, { response } from "express";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors());

// EXERCICIO - 1

app.get('/', (resquest,response)=>{ response.send('Funcionou sua primeira API LINCOLN !')})


//======================================================================================================


// EXERCICIO - 2

type Pessoa = {
    id:number,
    name:string,
    phone:number,
    email:string|number,
    website:string|number
}[]

//======================================================================================================

// EXERCICIO - 3

const usuarios:Pessoa = [
    {
        id: 1,
    name: 'lincoln',
    phone:3232,
    email:'lincoln@hotmail.com',
    website:'lincoln.com.br'
},
{
    id: 2,
name: 'fanny',
phone:3535,
email:'fanny@hotmail.com',
website:'fanny.com.br'
},
{
    id: 3,
name: 'mina',
phone:3636,
email:'mina@hotmail.com',
website:'mina.com.br'
}
]


//======================================================================================================

// EXERCICIO - 4

app.get('/all-users', (request, response) =>{

    response.send(usuarios)


})



//======================================================================================================

// EXERCICIO - 5

type Posts = {
    id:number,
    title:string,
    body:string,
    userId:number
}[]



//======================================================================================================

// EXERCICIO - 6


const posts:Posts = [
    {
        id:1,
        title: "Comer feijoada",
        body: "Comer feiojoada engorda ?",
        userId: 1
    },

    {
        id:2,
        title: "Palmeiras tem mundial ?",
        body: "Galera, o palmeiras tem mundial ou não ?",
        userId: 2
    },

    {
        id:3,
        title: "Maior de minas",
        body: "Atlético é o maior de minas ? ?",
        userId: 3
    }

]

// Prefiro criar fora pois com o id do usuário sabemos qual post são os dele.


//======================================================================================================

// EXERCICIO - 7

app.get('/get-posts', (request, response) =>{

    response.send(posts)

})



//======================================================================================================

// EXERCICIO - 8


app.get('/get-post/:id', (request, response) =>{

    const idUser = +request.params.id

    const ReturnPostId:Posts = posts.filter((post)=>{
        return post.userId === idUser
    })

    response.send(ReturnPostId)

})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});