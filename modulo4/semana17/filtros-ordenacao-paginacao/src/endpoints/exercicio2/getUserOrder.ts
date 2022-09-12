import { Request, Response } from "express"
import selectUserOrder from "../../data/exericio2/selectUserOrder"
import selectAllUsers, {selectUser} from './../../data/exercicio1/selectAllUsers'

export const getUserOrder = async(req: Request,res: Response): Promise<void> =>{
   try {

    let name = req.params.name as string
    let type = req.params.type as string
    let order = req.params.order as string

    if(!name) {
        name = ''
    }
    if(!type){
        type = ''
    }
    if(!order){
        order = ''
    }


    const result = await selectUserOrder(name,type,order)


    if(name === '' && type === '' && order === ''){
        name = '%' as string
        type = '%' as string
        order = 'ASC' as string
        
       const users = await selectUserOrder(name,type,order)

       res.status(200).send(users)
    
    }

    // }else{

    //    const user = await selectUser(name)
    //    res.status(200).send(user)

    // }
      
   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}