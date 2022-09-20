import {app} from './controller/app'
import {UserController} from './controller/UserController'
import {PingController} from './controller/PingController'


const userController = new UserController()
const pingController = new PingController()

app.post("/criar-usuario", userController.create)
app.post("/login", userController.login)
app.get("/usuario/perfil",userController.getProfile)
app.delete("/usuario/deletar",userController.deleteUser)
