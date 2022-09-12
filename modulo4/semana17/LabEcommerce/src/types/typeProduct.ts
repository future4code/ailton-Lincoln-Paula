export type Produtc = {
    
    id:string,
    name:string,
    price:number,
    image_url:string
    
    }

 export type Purchase = {
        id:string,
        user_id:string,
        product_id:string,
        quantity:number,
        total_price:number,
 }

 export type ProductInfo = {
       productId: string,
       productName: string,
       quantity: number,
       total_price: number
}