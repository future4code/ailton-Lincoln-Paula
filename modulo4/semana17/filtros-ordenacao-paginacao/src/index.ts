import { app } from "./app";
import { getAllUsers } from "./endpoints/exercicio1/getAllUsers";
import {getUserType} from './endpoints/exercicio1/getUserType'
import {getUserOrder} from './endpoints/exercicio2/getUserOrder'

app.get("/user", getAllUsers)
app.get("/user/:type", getUserType)
app.get("/user/:name/:order/:type", getUserOrder)

