<h1>Exercícios Introdução-SQL</h1>

### Exercício 1-a-b-c)

```
- temos um id, como chave primária e única.
- para cada ator, um name que é do tipo string e não aceita.
- nulo, salário que é um número do tipo float (não inteiro) .
- uma data de nascimento, do tipo data .
- uma string contendo no máximo 6 caracteres.

b)
- SHOW DATABASES - Mostra todos os banco dados presentes naquela conexão
- SHOW TABLES - Mostra todas as tables, tabelas daquela conexão

c)O resultado foi todos as propriedades contidas na tabela ator, id, name, salary.. com todas seus tipos e chaves.
```



### Exercício 2-a-b-c-d-e-f) 

```
a) Criado.

b)Error Code: 1062. Duplicate entry '02' for key 'PRIMARY', aconteceu pois a propriedade id, declarada como primary key, ou seja, chave única, tentou deixar de ser uma chave única, para ser duplicada.

c)O erro dado, se refere a tentativa de adicionar 5 dados, tendo declarado apenas 3

d)Erro pois o nome não pode ser nulo, e estamos tentando adicionar um usuário sem o nome, poderia ser resolvido, deixando a aceitaçao de nulo na propriedade name, ou apenas adicionando o nome do usuário.

e)A propriedade data, só aceita string, adicionado aspas.

f)Criado !

```



### Exercício 3-a-b-c-d-e)

```
a) SELECT * from Actor WHERE gender = "female"
b)SELECT salary from Actor WHERE name = "Tony Ramos"
c) SELECT * from Actor WHERE gender = "invalid", retornou uma tabela com os valores nulos, pois não conseguiu achar uma string invalid na propriedade gender.
d)SELECT id,name,salary from Actor WHERE salary =< 500
e)O comando estava tentando procurar uma propriedade chamada nome, não existia, apenas propriedade chamada NAME.

```



### Exercício 4-a-b-c-d)

```
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
a) A query acima busca todos os dados de atores/atoras, onde seus nomes começam com a letra A ou a letra J, e o seu salário é maior que 300000.

b)SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 3500000

c)SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%");

D)SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000

```



### Exercício 5-a-b-c-d-e)

```
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL UNIQUE,
    sinopse TEXT NOT NULL,
    lanc_date DATE NOT NULL,
    avaliation INT NOT NULL
);

INSERT INTO Movie (id, name, sinopse, lanc_date, avaliation)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);

INSERT INTO Movie (id, name, sinopse, lanc_date, avaliation)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);

INSERT INTO Movie (id, name, sinopse, lanc_date, avaliation)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);

INSERT INTO Movie (id, name, sinopse, lanc_date, avaliation)
VALUES(
  "004", 
  "Kung Fu Panda",
  "Po é um panda que trabalha na loja de macarrão da sua família e sonha em transformar-se em um mestre de kung fu.",
  "2008-04-07", 
  10
);

```



### Exercício 6-a-b-c)

```
a)SELECT id,name,avaliation FROM Movie
WHERE id = "001"

b)SELECT * FROM Movie
WHERE name = "Kung Fu Panda"

c)SELECT id,name,sinopse FROM Movie
WHERE avaliation >= 7

```



### Exercício 1-a-b-c-d)

```
a)SELECT * FROM Movie
WHERE (name LIKE "%vida%");

b)SELECT * FROM Movie
WHERE (name LIKE "K%");

c)SELECT * FROM MOVIE
WHERE lanc_date < "2022-08-22";

d)SELECT * FROM Movie
WHERE lanc_date < "2022-08-22" AND (name LIKE "%Dois%" OR sinopse LIKE "%doce%") AND avaliation > 7;

```