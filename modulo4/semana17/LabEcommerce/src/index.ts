import { app } from "./app";
import {createUser} from "./endpoints/createUser";
import {getAllUsers} from './endpoints/getAllUsers'
import {createProduct} from './endpoints/createProduct'
import {getAllProducts} from './endpoints/getAllProducts'
import {createPurchases} from './endpoints/createPurchases'
import {getAllPurchases} from './endpoints/getAllPurchases'
app.get("/users", getAllUsers)
app.get("/products", getAllProducts)
app.get("/users/:user_id/purchases", getAllPurchases)
app.post("/users",createUser)
app.post("/products", createProduct)
app.post("/purchases", createPurchases)