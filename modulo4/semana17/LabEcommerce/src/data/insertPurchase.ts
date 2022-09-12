import { connection } from "./connection"
import {Purchase} from './../types/typeProduct'

export async function insertPurchase(newPurchase:Purchase):Promise<any> {
    
try {

  await connection.raw(`
    INSERT INTO labecommerce_purchases (id, user_id, product_id, quantity, total_price)
    VALUES ("${newPurchase.id}", "${newPurchase.user_id}", "${newPurchase.product_id}",
    ${newPurchase.quantity}, ${newPurchase.total_price});

    `)

    
} catch (error:any) {
    
      console.log(error.message)

}


}