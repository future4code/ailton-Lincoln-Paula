import express, {request, response} from "express";
import cors from "cors";
import {Product, Products} from './data'

const app = express();
app.use(express.json());
app.use(cors());


//EXERCICIO 1

app.get('/test', (req, res)=>{

    res.send('Api funcionando !')

})

// ===================================================================================================


//EXERCICIO 3 / 7

app.post('/addProduct', (req, res)=>{

 try {
    
     const {name, price} = req.body 
        
        if(!name || !price){
            res.statusCode = 401
            throw new Error("Ei , não pode mandar valores vazios")
        }
        if(typeof name !== "string"){
            res.statusCode = 401
            throw new Error("Ei , o nome precisa ser do tipo String")
        }
        if(typeof price !== "number"){
            res.statusCode = 401
            throw new Error("Ei , o número precisa ser do tipo Númerico")
        }
        if(price <= 0){
            res.statusCode = 401
            throw new Error("Ei , o valor precisa ser maior que 0")
        }
    
        const newProduct:Product = {
            id: Products.length+1,
            name: name,
            price: price
        } 
    
        Products.push(newProduct)
    
        res.status(201).send(Products)

 } catch (error: any) {

    res.status(res.statusCode || 500).send({ message: error.message })

 }  

})


// ===================================================================================================


//EXERCICIO 4

app.get('/allProducts', (req,res)=>{

    res.send(Products)

})

// ===================================================================================================


//EXERCICIO 5 / 8

app.put('/edit', (req,res)=>{

try {

    if(!req.body.price){
        res.statusCode = 401
        throw new Error("Ei , o valor precisa ser declarado")
    }
    if(typeof req.body.price !== "number"){
        res.statusCode = 401
        throw new Error("Ei , o valor precisa ser numérico")
    }
    if(req.body.price <= 0){
        res.statusCode = 401
        throw new Error("Ei , o valor precisa ser maior que 0")
    }
    if(!req.body.id){
        res.statusCode = 401
        throw new Error("Ei , o id precisa ser declarado")
    }
   if(Products.filter((product) => { return product.id === req.body.id }).length === 0) {
        res.statusCode = 404
        throw new Error(`Id nao encontrado !`)
      }


    const edit = Products.filter((product)=>{
   
        if(product.id === req.body.id){
            product.price = req.body.price
            return product
        }
      
       })
       
       res.send({message: "Produto adicionado !", data: edit})



} catch (error: any) {

    res.status(res.statusCode || 500).send({ message: error.message })

}
 

})


// ===================================================================================================


//EXERCICIO 6 / 9

app.delete('/delete/:id', (req,res)=>{


    try {
        
     const id = Number(req.params.id)

     if(!id){
        res.statusCode = 401
        throw new Error("Ei , o id precisa ser declarado")
     }
     if(Products.filter((product) => { return product.id === id }).length === 0) {
        res.statusCode = 404
        throw new Error(`Id nao encontrado !`)
      }

        const deleteProduct = Products.filter((product)=>{
    
            if(product.id !== id){
                return product
            }
            
       })
    
        res.send(deleteProduct)

    } catch (error: any) {

        res.status(res.statusCode || 500).send({ message: error.message })
        
    }

 })


   



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});