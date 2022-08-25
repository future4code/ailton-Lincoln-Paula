<h1> Relações SQL </h1>



### Exercício 1-a-b-c-d-e)

```
a)A chave estrangeira, é uma 'propriedade' declarada no criamento da tabela. Ela tem como finalidade, 'concatenar' ou 'ligar' elementos de uma tabela, com a outra, dessa forma tendo uma melhor performance, podendo dividir propriedades entre tabelas, mantendo relações.

b)FEITO !

c)Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`ailton-lincoln-paula`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Esse errou, foi devido a foreign key, tentar fazer a ligação de uma coisa, com outra inexistente na tabela movie.

d)ALTER TABLE Movie DROP COLUMN avaliation;
FEITO !

e)Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`ailton-lincoln-paula`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

O resultado foi o mesmo obtido na realiazção do exercício (C), acontece errou ao tentar deletar um filme que foi aclopado em outra table, precisamos primeiramente excluir da tabela auxiliar, para excluir da tabela principal.

```



### Exercício 2-a-b-c-d)

```
a)Esta tabela criada, podemos dizer de grosso modo, que serve para ser uma tabela de ponte, entre os filmes e os atores, representando quais atores estão ligados as quais filmes, uma relação que pode ser de vários para vários, ou seja, um ator pode estrelar mais de um filme, e um filme pode ter vários atores, por isso o uso de duas keys estrangeiras, no ligamento desses dados.	

b) PRIMEIRAMENTE, CRIADO 6 FILMES/ 6ATORES, depois criado as relações.

c)Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`ailton-lincoln-paula`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

O Mesmo erro dos exercícios passados, onde a key estrangeira, foreing key, nos avisa que estamos tentando conectar coisas de tabelas, ou propriedades entre tabelas, inexistentes.

d)Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`ailton-lincoln-paula`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Erro devido ao tentarmos apagar dados de uma tabela que esta ligado a outra, devemos primeiramente cortar essa ligação, para poder apagar.


```



### Exercício 3-a-b)

```
a) O operador ON, serve como uma condição de verificação, como se ele juntasse uma tabela com a outra e fizesse a busca.

b)SELECT nome,id,avaliation FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

c)SELECT movie_id,name,Rating.rate FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```



### Exercício 4-a-b-c)

```
a) SELECT movie_id,name,sinopse,Rating.rate FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

b)SELECT Actor.id,Actor.name FROM Actor 
INNER JOIN Movie ON Actor.id = Movie.id;

C)SELECT AVG(Rating.rate), Movie.id, Movie.name FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id GROUP BY(Movie.id) ;
```



### Exercício 5-a-b-c) 

```

```

