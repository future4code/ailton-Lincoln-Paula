import {Request, Response} from 'express'
import { PostBusiness } from "../business/PostBusiness";
import { IPostInputDTO } from '../models/Post';

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}


    public createPost = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization!
            const { content } = req.body

            const input: IPostInputDTO = {
                token,
                content
            }

            const response  = await this.postBusiness.create(input)
            
            res.status(201).send(response)
        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }


    public getPosts = async (req: Request, res: Response) => {

        try {
          
            const token = req.headers.authorization!
            
            const response  = await this.postBusiness.getPosts(token)

        } catch (error: any) {

            res.status(400).send({ message: error.message })

        }


    }
}