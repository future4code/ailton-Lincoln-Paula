import { Router } from 'express'
import { postController } from '../PostDependences'


export const postRouter = Router()


postRouter.post("/create", postController.createPost)
postRouter.get("/", postController.getPosts)
// etc