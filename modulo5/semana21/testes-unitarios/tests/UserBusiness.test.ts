import { UserBusiness } from "../src/business/UserBusiness"
import { ILoginInputDTO, ISignupInputDTO } from "../src/models/User"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { HashManagerMock } from "./mocks/HashManagerMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { UserDatabaseMock } from "./mocks/UserDatabaseMock"

describe("Testando a UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )
    
    test("Retorna token e mensagem de sucesso ! ", async () => {

        const input: ISignupInputDTO = {
            email: "lincoln@teste.com",
            name: "Lincoln",
            password: "lincoln123"
        }

        const response = await userBusiness.signup(input)
        // console.log(response)
        expect(response.message).toBe("Cadastro realizado com sucesso")
        expect(response.token).toBe("token-mock-normal")
    })

    test("Retorna token, e mensagem de sucesso !", async () => {
        const input: ILoginInputDTO = {
            email: "astrodev@gmail.com",
            password: "bananinha"
        }

        const response = await userBusiness.login(input)
        expect(response.message).toBe("Login realizado com sucesso")
        expect(response.token).toBe("token-mock-admin")
    })

})