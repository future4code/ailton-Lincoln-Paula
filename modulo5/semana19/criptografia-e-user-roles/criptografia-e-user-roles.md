<h1>Exercícios de Criptografia e User Roles</h1>

<h3>Exercício 1</h3>

```
a)*O que são os `round` e `salt`? Que valores são recomendados para o `round`? Que valor você usou? Por quê?*

R: O salt é uma cadeira de caracteres aleatória concatenada com uma senha já criptografada por algum hash, então é uma forma de adicionar mais segurançã ainda no processo de criptografia.
O round é conhecido também como cost, ou o tempo que a criptografia demorará para acontecer, sendo um tempo maior para uma criptografia mais complexa, e uma criptografia mais rápida em uma criptografia menos complexa.


b)Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por criptografar uma string usando o bcryptjs.   

R: async generateHash(senha: string): Promise<string> {

    const cost = Number(process.env.COST);
    const salt = await bcryptjs.genSalt(cost);
    const hash = await bcryptjs.hash(senha, salt)
    return hash
}


c) Agora, crie a função que verifique se uma string é correspondente a um hash, use a função compare do bcryptjs

R: async compare(senha: string, hash: string): Promise<boolean> {
    return bcryptjs.compare(senha, hash)
}
```



<h3>Exercício 2</h3>

```
a) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.

R: O de cadastrar deve ser modificado antes, pois não tem como usar a função de comparar da lib hash, sendo que não tem nenhum senha já criada com os metodos aprendidos de criptografia.


b) Faça a alteração do primeiro endpoint

R: const passCript = await Hash.generateHash(password)


c) Faça a alteração do segundo endpoint

R:  const correctPassword = await new HashManager().compare(password, emailExist.password)

const token = new Authenticator().generateToken(emailExist.id)


d) No exercício de ontem, nós criamos o endpoint user/profile. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.

R: Não vai mudar, pois o token continua sendo o mesmo, gerado por uma lib diferente. 


```



<h3>Exercício 3</h3>

```
a) *Altere a sua tabela de usuários para ela possuir uma coluna `role`. Considere que pode assumir os valores `normal`  e `admin`. Coloque `normal` como valor padrão.*

R: ALTER TABLE aula_intro_aut_user
ADD user_role varchar(255) not null default("NORMAL");


b) *Altere o type `AuthenticationData e a função getData()` para representarem esse novo tipo no token.*

R: OK


c) *Altere o cadastro para receber o tipo do usuário e criar o token com essa informação. (Não esqueça de adicionar na função query para inserir agora o valor de role do usuário à coluna role no banco)*

R: OK


d) *Altere o login para criar o token com o `role` do usuário*

R: OK

```




<h3>Exercício 4</h3>

```
a) Altere o endpoint para que retorne um erro de Unauthorized para os usuários que "não sejam normais" e tentem acessar esse endpoint

R: OK
```


