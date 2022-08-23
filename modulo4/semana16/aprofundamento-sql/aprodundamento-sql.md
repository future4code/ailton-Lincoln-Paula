<h1> Aprofundamento - SQL </h1>


### Exercício 1: a,b,c,d)

```
a) ALTER TABLE Actor DROP COLUMN salary;
Essa alteração apaga a coluna de salário da tabela de atores.

b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
Essa alteração muda a propriedade da columa gender para o nome sex.

c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
Esta alteração muda a propriedade, fazendo a propriedade gender, deixar se receber apenas 6 caracteres, podendo agora receber 255 (padrão).

d)ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

```



### Exercício 2: a,b,c,d)

```
a) UPDATE Actor
SET name = "Fernandinha Montinho", birth_date = "2000-07-30"
WHERE id = "003";

b) UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "8";

UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "8";

c) UPDATE Actor
SET name = "Lincoln", salary = 50, birth_date = "2005-07-02", gender= "male"
WHERE id = "004";

d) Ele deu okay, aceitou a mudança, mesmo não existindo nenhuma pessoa com aquele id passado.

```



### Exercício 3: a,b)

```
a)DELETE FROM Actor as DELETE_FERNANDINHA
WHERE name = "Fernandinha Montinho";


b)DELETE FROM Actor as DELETE_MALE_SALARY100000
WHERE gender = "male" AND salary > 1000000;

```



### Exercício 4: a,b,c,d)

```
a) SELECT MAX(salary) as SALARY_MAX_MALE from Actor;

b) SELECT MIN(salary) as SALARY_MIN_FEMALE from Actor WHERE gender = "female"

c)SELECT COUNT(*) as GET_COUNTE_FEMALE from Actor WHERE gender = "female"

d)SELECT SUM(salary) as SUM_SALARY_ACTORS from Actor;

```



### Exercício 5: a,b,c,d,e)

```
a) A query primeiramente faz a contagem por generos, ou seja, contagem de quantas pessoas temos por genero da tabela atores, e grupaliza por genero a contagem.

b)SELECT id, name FROM Actor as NAME_DESC ORDER BY name DESC;

c)SELECT * FROM Actor as SALARY_ASC ORDER BY salary ASC;

d)SELECT * FROM Actor as SALARY_DESC_3 ORDER BY salary DESC LIMIT 3;

e)SELECT AVG(salary), gender FROM Actor as MED_GENDER GROUP BY gender;
```



### Exercício 6: a,b,c,d)

```
a)ALTER TABLE Movie
ADD playing_limit_date varchar(255);

b)ALTER TABLE Movie
CHANGE avaliation avaliation float;

c)UPDATE Movie
SET lanc_date = "2022/05/30"
WHERE id = "001";

UPDATE Movie
SET lanc_date = "2022/11/02"
WHERE id = "002";


d) "001",
DELETE FROM Movie WHERE id = "001"

UPDATE Movie
SET sinopse = "Teste, após ter excluído um item pelo ID."
WHERE id = "001";

A mensagem foi a mesma que a mensagem utilizada no exercicío 2-D, deu mensagem de sucesso, mas acabou que nada aconteceu.

```



### Exercício 7: a,b,c,d,e,f)

```
a)SELECT * FROM Movie as RATING_MOVIE_7  WHERE avaliation > 7.5;

b)SELECT AVG(avaliation) FROM Movie as AVALIATION_MED;

c)SELECT COUNT(*) FROM Movie as QUANTY_MOVIES;

d)SELECT COUNT(*) FROM Movie as MOVIES_LANC WHERE lanc_date > "2022-08-23";

e)SELECT MAX(avaliation) FROM Movie as MAX_RATING;

f)SELECT MIN(avaliation) FROM Movie as MAX_RATING;

```



### Exercício 8: a,b,c,d)

```
a)SELECT * FROM as NAME_ORDER Movie ORDER BY name ASC;

b)SELECT * FROM as NAME_DESC_5 Movie ORDER BY name DESC LIMIT 5;

c)SELECT * FROM Movie as DATE_DESC_3 ORDER BY lanc_date DESC LIMIT 3;

d)SELECT * FROM Movie as RAT_MAX_3 ORDER BY avaliation DESC LIMIT 3;



```