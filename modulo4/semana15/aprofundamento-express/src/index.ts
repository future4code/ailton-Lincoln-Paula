import express from "express";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors());

// EXERCICIO 1

app.get('/ping', (req,res) =>{

    res.status(200).send("Pong! 🏓")

})

// =====================================================================================================

// EXERCICIO2

type AllTasksUsers = {
    userId:number
    id:number
    title:string
    completed:boolean
}

// =====================================================================================================

// EXERCICIO3

const listTasks:AllTasksUsers[] = [{

    userId: 1,
    id: 1,
    title: "Correr",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: "Ir academia",
    completed: false
  },
  {
    userId: 2,
    id: 3,
    title: "Dar ração para cachorro",
    completed: false
  },
  {
    userId: 2,
    id: 4,
    title: "Ir ao médico",
    completed: true
  },
  {
    userId: 2,
    id: 5,
    title: "Desenvolver projeto",
    completed: false
  },
  {
    userId: 3,
    id: 6,
    title: "Estudar backend",
    completed: false
  }]

// =====================================================================================================

// EXERCICIO 4

app.get('/getTasks/:complet', (req,res) =>{

    const {complet} = req.params

    const verifi = () =>{

        if(complet === "true"){
            return true
        }else{
            return false
        }
    }

    const mapTrueOrFalse = listTasks.filter((tasks)=>{
        if(tasks.completed === verifi()){
            return tasks
        }
    })

    res.status(200).send(mapTrueOrFalse)

})



// =====================================================================================================

// EXERCICIO 5


app.post('/createTask', (req,res) =>{

  const pegaInfoArr = listTasks[listTasks.length-1]
  const guardaUltimoId =  pegaInfoArr.id + 1
  const {userId, title} = req.body

    const newTask:AllTasksUsers ={
        userId: userId,
        id:guardaUltimoId,
        title: title,
        completed: false
    }

    listTasks.push(newTask)
    res.status(201).send(listTasks)
})



// =====================================================================================================

// EXERCICIO 6


app.put('/editTask/:id', (req,res) =>{
    const {id} = req.params

    const findTask = listTasks.find((task)=>{
        if(task.id === Number(id)){
            task.completed = !task.completed
            return task
        }
    })

      res.status(201).send(findTask)

})



// =====================================================================================================

// EXERCICIO 7


app.delete('/delTask/:id', (req,res)=>{

    const {id} = req.params

    const deleteTask = listTasks.filter((tasks)=>{
        if(tasks.id !== Number(id)){
            return tasks
        }
    })
    res.status(200).send(deleteTask)
})


// =====================================================================================================

// EXERCICIO 8

app.get('/getTask/:userId', (req,res)=>{

    const {userId} = req.params

    const returnTask = listTasks.filter((tasks)=>{
        if(tasks.userId === Number(userId)){
            return tasks
        }
    })
    res.status(200).send(returnTask)

})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
}); 