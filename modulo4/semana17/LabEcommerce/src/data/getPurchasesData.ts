import { connection } from "./connection"
import {UserInfo} from './../types/typeUser'
import {ProductInfo} from './../types/typeProduct'


export type PurchasesUser = {
    idPerson:string,
    namePerson:string,
    productInfo:ProductInfo[]
}

export async function getPurchasesData(userId:string):Promise<any>{

    try {

      const result = await connection.raw(`
        
      SELECT labecommerce_users.id as userId, labecommerce_users.name,
      labecommerce_products.name as productName,
      labecommerce_purchases.id as productId, labecommerce_purchases.quantity, 
      labecommerce_purchases.total_price
      FROM labecommerce_purchases
      INNER JOIN labecommerce_users ON
      labecommerce_purchases.user_id = labecommerce_users.id
      INNER JOIN labecommerce_products ON
      labecommerce_purchases.product_id = labecommerce_products.id
      WHERE labecommerce_users.id = "${userId}";
        
        `)  
        
        let allPurchases:ProductInfo[] = []
        let infoPerson:any = {}
        await result[0].map((person:any) =>{

           infoPerson = {
             idPerson:person.userId,
             namePerson:person.name
            }

            allPurchases.push({
                productId: person.productId,
                productName: person.productName,
                quantity: person.quantity,
                total_price: person.total_price
            })


         })
         
         const purchasesUser:PurchasesUser = {
            idPerson:infoPerson.idPerson,
            namePerson:infoPerson.namePerson,
            productInfo:allPurchases
         }

         return purchasesUser

    } catch (error:any) {
        
          console.log(error.message)
    
    }



}