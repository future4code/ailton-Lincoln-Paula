CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "02", 
  "Glória Pires",
  120000,
  "1963-08-23", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "João Miguel",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Felix",
  9999999,
  "1992-03-26", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Luana Piovani",
  888888,
  "1985-11-25", 
  "female"
);

SELECT * from Actor WHERE gender = "female";
SELECT salary from Actor WHERE name = "Tony Ramos";
SELECT * from Actor WHERE gender = "invalid";
SELECT id,name,salary from Actor WHERE salary <= 500000;

SELECT * from Actor;
SELECT id, name from Actor WHERE id = "002";

SELECT * FROM Actor

WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 3500000;

SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%");

SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;


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

SELECT id,name,avaliation FROM Movie
WHERE id = "001";

SELECT * FROM Movie
WHERE name = "Kung Fu Panda";

SELECT id,name,sinopse FROM Movie
WHERE avaliation >= 7;

SELECT * FROM Movie
WHERE (name LIKE "%vida%");

SELECT * FROM Movie
WHERE (name LIKE "K%");

SELECT * FROM Movie
WHERE lanc_date < "2022-08-22";

SELECT * FROM Movie
WHERE lanc_date < "2022-08-22" AND (name LIKE "%Dois%" OR sinopse LIKE "%doce%") AND avaliation > 7;