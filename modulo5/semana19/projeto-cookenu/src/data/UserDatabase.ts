import User from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

  public async createUser(user: User) {
    try {
      await this.getConnection().raw(`
            
            INSERT INTO users_cookenu (id, name, email, password)  VALUES 
            ("${user.getId()}", "${user.getName()}", "${user.getEmail()}", "${user.getPassword()}")
            
            `);

      return `Usuario ${user.getName()} cadastrado com sucesso`;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async edit(id: string, nickname: string) {
    try {
      await this.getConnection()
        .update({ nickname })
        .into("users_cookenu")
        .where({ id });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserByEmail(email: string) {
    try {
      const result = await this.getConnection()
        .select("*")
        .from("users_cookenu")
        .where({ email: email });

      if (!result.length) {
        return undefined;
      }
      return new User(
        result[0].id,
        result[0].name,
        result[0].email,
        result[0].password
      );
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserByPassword(senha: string) {
    try {
      const result = await this.getConnection()
        .select("*")
        .from("users_cookenu")
        .where({ password: senha });

      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserById(id: string) {
    try {
      const result = await this.getConnection()
        .select("*")
        .from("users_cookenu")
        .where({ id });

      return result[0];
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async followUser(userRequisition: string, userFollow: string) {
    try {
      const result = await this.getConnection().raw(`
            
      INSERT INTO usuario_seguidores (user_id, follower_id) 
      VALUES ("${userRequisition}", "${userFollow}");

`);
        return `Usuário seguido com sucesso !`

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async unfollowUser(userRequisition: string, userUnfollow: string) {
    try {
      const result = await this.getConnection().raw(`
            
      DELETE FROM usuario_seguidores WHERE user_id = "${userRequisition}" AND follower_id = "${userUnfollow}"
`);
        return `Unfollow no usuário com sucesso !`

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  
  public async getRecipeFollowers(user: string) {
    try {
      const result = await this.getConnection().raw(`
            
      ;`)

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

}
