import { PostBusiness } from "./business/PostBusiness";
import { PostController } from "./controller/PostController";
import { PostDatabase } from "./database/PostDatabase";
import { Authenticator } from "./services/Authenticator";
import { IdGenerator } from "./services/IdGenerator";


export const postController = new PostController(
    new PostBusiness(
        new PostDatabase(),
        new IdGenerator(),
        new Authenticator()
    )
)