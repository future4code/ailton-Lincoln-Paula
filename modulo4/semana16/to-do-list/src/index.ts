import express, {Express,Request, Response} from "express";
import cors from 'cors'
import { AddressInfo } from "net";
import createUser from './endpoints/createUser'
import getUserID from './endpoints/getUserID'
import editUser from './endpoints/editUserNickname'
import createTask from './endpoints/createTask'
import getTaskID from './endpoints/getTaskID'
import getAllUsers from './endpoints/getAllUsers'
import getTaskForIdUser from './endpoints/getTaskForIdUser'
import getUserForName from './endpoints/getUserForName'


const app: Express = express();
app.use(express.json());
app.use(cors());


app.post('/user', createUser)
app.get('/user/:id', getUserID)
app.put('/user/edit/:id', editUser)
app.post('/task', createTask )
app.get('/task/:id',getTaskID )
app.get('/users/all', getAllUsers)
app.get('/task', getTaskForIdUser)
app.get('/user', getUserForName)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
