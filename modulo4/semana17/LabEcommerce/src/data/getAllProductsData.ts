import { connection } from "./connection"

export default async function getAllProductsData(search:string, order:string):Promise<any>{

    try {

        const products = await connection.raw(`
            
        SELECT * FROM labecommerce_products WHERE name LIKE "%${search}%" ORDER BY name ${order};
        
        `)
    
         return products[0]
    
        
    } catch (error:any) {
        
          console.log(error.message)
    
    }



}