import Recipe from "../model/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
  public async createRecipe(recipe: Recipe): Promise<any> {
    try {
      await this.getConnection().raw(`
            
            INSERT INTO recipes_cookenu (id, title, description, date) 
            VALUES ("${recipe.getId()}", "${recipe.getTitle()}", "${recipe.getDescription()}", "${recipe.getDate()}");
            `);

      return `Receita ${recipe.getTitle()} adicionada com sucesso !`;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getRecipe(id: string): Promise<any> {
    try {
      const recipeResult = await this.getConnection().raw(`
             
             SELECT * FROM recipes_cookenu WHERE id = "${id}"
             `);

      return recipeResult[0];
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

}
