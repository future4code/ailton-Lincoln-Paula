import { goToPage } from "../../routes/coordinator"

export const Deslogar = (Navigate) =>{


    alert('Deslogando..')
    localStorage.clear()
    goToPage(Navigate, 'home')


}