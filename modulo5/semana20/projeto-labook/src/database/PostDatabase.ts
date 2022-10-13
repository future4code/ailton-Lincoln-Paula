import { IPostDB, IPostLikeDB, Post } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public createPost = async (post: Post) => {

        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId()
        }

        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .insert(postDB)
    }

    public postModelLike = (post: Post) =>{

        const postLikeDB: IPostLikeDB = {
            id:post.getId(),
            content: post.getContent(),
            user_id: post.getUserId(),
            like:post.getLikes()
        }

        return postLikeDB

    }

    public getPosts = async () => {

      const result =  await BaseDatabase

            .connection(PostDatabase.TABLE_POSTS)
            .select("*")

            return result
        }

        public getLikes = async (postId: string) => {

            const result =  await BaseDatabase
      
            .connection(PostDatabase.TABLE_LIKES)
            .select()
            .count('id As Likes')
            .where({post_id: postId})
      
                  return result[0].Likes as number

              }

}