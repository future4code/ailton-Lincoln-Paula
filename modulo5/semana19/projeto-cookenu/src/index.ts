import { app } from "./app";
import RecipeEndpoint from "./endpoints/Recipe";
import UserEndpoint from "./endpoints/User"

const user = new UserEndpoint()
const recipe = new RecipeEndpoint()

app.post('/signup', user.createUser)
app.post('/login', user.login)
app.post('/user/follow', user.follow)
app.post('/user/unfollow', user.unfollow)
app.get('/user/profile', user.infoUser)
app.get('/user/feed', user.recipeFollowers)
app.get('/user/:id', user.infoUsers)


// endpoint recipe
app.post('/recipe', recipe.createRecipe)
app.get('/recipe/:id', recipe.getRecipe)