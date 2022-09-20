import { BaseDataBase } from "./BaseDatabase";
import { User, feedDB, UserBD } from "../models/User";

export class UserDatabase extends BaseDataBase {
  public static TABLE_USERS = "Arq_Users";

  async getUserByEmail(email: string): Promise<User | undefined> {

    const result = await this.getConnetion()
      .select("*")
      .from(UserDatabase.TABLE_USERS)
      .where({ email });

    if (!result.length) {
      return undefined;
    }

    return new User(
      result[0].id,
      result[0].name,
      result[0].email,
      result[0].password,
      result[0].role
    );
  }

  async getUserById(id: string): Promise<any> {
    const result = await this.getConnetion()
      .select("*")
      .from(UserDatabase.TABLE_USERS);

    return result;
  }

  async createUser(user: User): Promise<string> {
    await this.getConnetion()
      .insert({
        id: user.getId(),
        email: user.getEmail(),
        name: user.getName(),
        password: user.getPassword(),
        role: user.getRole().toUpperCase(),
      })
      .into(UserDatabase.TABLE_USERS);

    return `Usuario cadastrado com sucesso`;
  }

  async deleteUserData(id: string): Promise<string | undefined> {

    const result = await this.getConnetion().raw(`
      DELETE FROM ${UserDatabase.TABLE_USERS} WHERE id = "${id}"
    `)

    return `Usuário deletado com sucesso !`
  }
}
