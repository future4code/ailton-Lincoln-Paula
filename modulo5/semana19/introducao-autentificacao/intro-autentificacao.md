<h1>Exercícios de Introdução a autentificação</h1>

<h3>Exercício 1</h3>

```
a) *Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?*

R: Concordo, pois a abrangência do tipo string, permite uma variação infinitas vezes maior do que o tipo numérico, ja que string aceitam números, letras, caracteres.


b) *A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.*

R: Ok
```



<h3>Exercício 2</h3>

```
a) *Explique o código acima com as suas palavras.*

R: O código passado, adiciona um usuário na tabela userTableName.

b) Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.

R: CREATE TABLE aulaAutentifUser (
id VARCHAR(64) PRIMARY KEY,
name VARCHAR(64) NOT NULL,
nickname VARCHAR(64) NOT NULL,
email VARCHAR(64) NOT NULL,
password VARCHAR(64) NOT NULL);

c) Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.

R: public async createUser(user: User) {

await this.getConnection().insert({
id: user.getId(),
name: user.getName(),
nickname: user.getNickName(),
email: user.getEmail(),
password: user.getPassword()
}).into("aulaAutentifUser")
}

```



<h3>Exercício 3</h3>

```
a) O que a linha as string faz? Por que precisamos usar ela ali?

Ela diz que o a informação será da tipagem de string.

b) Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.

R: generateToken(id: string) {

const token = jwt.sign(
{
   id
},
process.env.JWT_KEY as string,
{
expiresIn: process.env.EXPIRES_IN
}
);
return token
}
```




<h3>Exercício 4</h3>

```
a) OK

b) OK

c) OK
```



<h3>Exercício 5</h3>

```
a) OK
const EmailExist = await userDataBase.getUserByEmail(email)

if(EmailExist){
res.statusCode = 400
throw new Error(`Email existing in database`)
}
```


<h3>Exercício 6</h3>

```
a) Ok
```



<h3>Exercício 7</h3>

```
a) *O que a linha `as any` faz? Por que precisamos usá-la ali?*
R: Ela tipa a constante como any, essa é uma dos poucos uso da tipagem any, pois o a constante que verifica o se o token corresponde a lib jsonwebtoken, pode retorna um objeto de uma tipagem um pouco diferente da que estamos acostumados.

b) *Crie uma função que realize a mesma funcionalidade da função acima*
```



<h3>Exercício 8</h3>

```
a) Ok
```

