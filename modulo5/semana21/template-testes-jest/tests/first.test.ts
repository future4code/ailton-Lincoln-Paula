
describe("Olá, estamos testando",()=>{


    test("Paridade",()=>{

        expect(verificaParidade(112)).toBe(true)

    })

    test("Caixa Alta",()=>{

        expect(retornaCaixaAlta('bananinha')).toBe('bananinha'.toUpperCase())

    })

    test("Verifica Separacao",()=>{

        expect(retornaSeparado("labenu")).toStrictEqual([ 'l', 'a', 'b', 'e', 'n', 'u' ])

    })

    test("Verifica Número",()=>{

        expect(retornaNumber("50")).toBe(50)

    })

    test("Verifica Tamanho",()=>{

        expect(retornaTamanho("abap")).toBe(4)

    })

    test("Verifica 1 a 10",()=>{

        expect(retornaNumberoEntre1e10()).toBeGreaterThan(0)
        expect(retornaNumberoEntre1e10()).toBeLessThan(11)

    })

    test("Verificando usuário", () =>{

        const usuarioAstrodev = {
                nome: "Astrodev",
                idade: 21,
                profissao: "admin"
        }

        expect(arrUsers).toContainEqual(usuarioAstrodev)

    })

    test("Verifica Media", () =>{

        const media = 7.5

        expect(media).toBe(retornaMedia([7,8,9,6]))

    })

    test("Verifica Idade", () =>{

        const idade = 21

        expect(retornaIdade(2000)).toBe(22)

    })

    test("Verifica Data Formatada", () =>{

        const data = '2000/07/30'

        expect(retornaDataFormatada(data)).toBe("30/07/2000")

    })

})

const verificaParidade=(num: number): boolean =>{

    return num % 2 == 0

 }


 const retornaCaixaAlta = (string: string): string =>{

    return string.toUpperCase()

 }

 const retornaSeparado = (string: string):string[] =>{

    let arr: string[] = []

    for(let index of string){

         arr.push(index)

    }

    return arr

 }

 const retornaNumber = (numString: string): number =>{

    return Number(numString)

 }

 const retornaTamanho = (palavra: string): number =>{

    return palavra.length

 }

 const retornaNumberoEntre1e10 = (): number =>{
    
    return Math.floor(Math.random() * 10 + 1)

 }

 interface ArrUsers  {
    nome: string,
    idade: number,
    profissao: string
 }

 const arrUsers: ArrUsers[] = [
    {
    nome: "Astrodev",
    idade: 21,
    profissao: "admin"
 },
{
    nome: "Lincoln",
    idade: 22,
    profissao: "dev"
},
{
nome: "Lucas",
idade: 19,
profissao: "marketing"
}
]


const retornaMedia = (arrNum: number[]): number =>{

    let soma = 0


    for(let index of arrNum){
        soma = soma+index
    }

    return soma / arrNum.length
 }


 const retornaIdade = (anoNasc: number): number =>{

    const date = new Date()
    const year = date.getFullYear()
    
    return year - anoNasc
  
  }

  
  const retornaDataFormatada = (dataQualquer: string): string =>{

    const arrData = dataQualquer.split('/')

    return `${arrData[2]}/${arrData[1]}/${arrData[0]}`
  
  }