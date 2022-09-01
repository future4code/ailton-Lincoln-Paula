import { connection } from "./connection"

export default async function getAllProductsData():Promise<any>{

    try {

        const products = await connection.raw(`
            
         SELECT * FROM labecommerce_products
        
        `)
    
         return products[0]
    
        
    } catch (error:any) {
        
          console.log(error.message)
    
    }



}