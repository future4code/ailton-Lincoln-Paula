import {User} from './types/types'
import axios from 'axios'
import {BASE_URL} from './constants/url'

// *a.* Se apenas trocarmos o retorno da função para: `Promise<user[]>` ,
//  teremos algum erro de tipagem?

// Não daria nenhum tipo de erro, pois o retorno seria examente igual ao retorno 
// tipado


// b. É boa prática fazermos um mapeamento do resultado de uma Promise, caso seja 
// indicado que ela retorne um `Promise<any>`. Explique com as suas palavras o porquê
//  de fazermos isso

//  O mapeamento dos dados, serve basicamente como uma forma de tratamento de tudo aquilo
// que queremos filtrar, pegar ou utilizar. Quando se tem a tipagem de tipo any
// muita das vezes não sabemos o que ao certo a nossa função pode retornar.
// por isso o mapeamento é muito utilizado, para o tratamento de dados.


// c. Reimplemente a função, corretamente.

const getSubs3 = async (): Promise<User[]> =>{

    const result =  await axios.get(`${BASE_URL}/subscribers`)
    return  result.data.map((res: any) => {
            return {
            id: res.id,
            name: res.name,
            email: res.email,
            }
        });

}
getSubs3()
