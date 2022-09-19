import { Request, Response } from "express";
import { MissingFields } from "../error/MissingFields";
import Recipe from "../model/Recipe";
import { UserDatabase } from "../data/UserDatabase";
import { RecipeDatabase } from "../data/RecipeDatabase";
import Authenticator from "../services/Authenticator";
import GenerateId from "../services/GenerateId";
import { HashManager } from "./../services/HashManager"

class RecipeEndpoint {

    public async createRecipe(req: Request, res: Response){
     
        try {

              const {title, description} = req.body  
              const token = req.headers.authorization!


            const userVerifyToken = new Authenticator().verifyToken(token)


              if(!title || !description){
                throw new MissingFields
              }

              if(typeof title !== "string" || typeof description !== "string"){
                throw new Error(` As informações devem ser do tipo string ! `)
              }

              const acctualyDate = new Date()
              const month = acctualyDate.getMonth()+1
              const day = acctualyDate.getDate()
              const year = acctualyDate.getFullYear()
              const date = `${year}-${month}-${day}`
              
              const id = new GenerateId().createId();

              const recipeData = new RecipeDatabase

              const recipe = new Recipe(id, title, description, date)
              
             const result = await recipeData.createRecipe(recipe)


             res.status(201).send(result)

        } catch (error: any) {

            res.status(res.statusCode || 500).send({message: error.message})

        }



    }

    public async getRecipe(req: Request, res: Response){
        try {
            const id: string = req.params.id
            
            if(!id){
                throw new Error(`Passe o id da receita ! `)
            }

            const recipeData = new RecipeDatabase()
            const recipeResult = await recipeData.getRecipe(id)

           if(!recipeResult.length){
            throw new Error(`Receita não encontrada, verifique o id, e tente novamente !`)
           }

           res.status(200).send({message: `Aqui está a receita`, data: recipeResult})


        } catch (error: any) {
            res.status(res.statusCode || 500).send({message: error.message})
        }
    


    }

}

export default RecipeEndpoint



