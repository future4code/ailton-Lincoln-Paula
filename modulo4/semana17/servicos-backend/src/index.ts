import { app } from "./app";
import { getAdress } from "./endpoints/getAdress";

app.get("/getAdress/:cep",getAdress)

