import { PostDatabase } from "../database/PostDatabase"
import { IPostInputDTO, Post, IPostOutputDTO } from "../models/Post"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}


    public create = async (input: IPostInputDTO) => {

        const tokenUser = input.token
        const content = input.content

        if (!tokenUser || !content) {
            throw new Error("Um ou mais parâmetros faltando")
        }

        if (content.length < 3) {
            throw new Error("O post precisa ter mais de 3 caracteres")
        }

        const idPost = this.idGenerator.generate()
        
        const idUser: any = this.authenticator.getTokenPayload(tokenUser)


        const post = new Post(
            idPost,
            content,
            idUser.id,
        )   
        
        await this.postDatabase.createPost(post)
        // const hashedPassword = await this.hashManager.hash(password)

        const response: IPostOutputDTO = {
            message: "Post criado com sucesso"
        }

        return response

    
    }

    public getPosts =  async (token: string) =>{

        if (!token) {
            throw new Error("Você não tem autorização !")
        }

        const posts = await this.postDatabase.getPosts()

        return posts

    }

}