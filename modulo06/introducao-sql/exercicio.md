## Introdução SQL

### Exercício 1

a) 
**VARCHAR(n)**
    - Usado para strings, e (n) é a quantidade máxima de caracteres que ela receberá.

**DATE**
    - Usado para representar uma data.

**CREATE TABLE**
    - Usado para criar uma tabela.

**PRIMARY KEY**
    - Usado para representar uma cheve primária.

b)
**SHOW DATABASES**
    - Trouxe a informação do nome do meu banco de dados.

**SHOW TABLES**
    - Trouxe a informação do nome da minha tabela.

c)
    **DESCRIBE Actor**
        - Trouxe todas as informações da tabela, os componentes e os comandos.

### Exercício 2

a)

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);  
```


b)
 O erro emitido foi: 
   Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
   (Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY')
Isso occore pois não é permitido que uma chave primária tenha o id repetido.

c)
 O erro emitido foi:
   Error Code: 1136. Column count doesn't match value count at row 1
   (Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1)
Isso ocorre porque foi adicionado itens na batela que não estavam descritos nos valores.
O correto seria:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d)
 O erro emitido foi:
   Error Code: 1364. Field 'name' doesn't have a default value
   (Código de erro: 1364. O campo 'nome' não tem um valor padrão)
Isso ocorre pois não tem nenhum valor atribuido ao nome.
O correto seria:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```

e)
 Foi adicionada sem nenhum erro.

### Exercício 3

a)
    `SELECT * from Actor WHERE gender = "female"`

b)
    `SELECT salary from Actor WHERE name = "Tony Ramos`

c)
    `SELECT from Actor WHERE gender = "invalid"`
Foi um resultado em branco, pois não havia nenhum ator com gênero inválido.

d)
    `SELECT id, name, salary from Actor WHERE salary < 500000`

e)
O erro emitido foi:
   Error Code: 1054. Unknown column 'nome' in 'field list'
   (Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos')
Isso ocorre pois a escrita do nome está errada, deveria ser name.
O correto seria:
    `SELECT id, name from Actor WHERE id = "002"`

### Exercício 4

a)
A query citada tem a finalidade de pesquisar todos os atores e atrizes que começam que A ou J, e que tem o salário maior do que R$300.000.

b)
```
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
```

c)
```
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
```

d)
```
SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
```

### Exercício 5

a)
```
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
```
Essa query tem por objetivo criar uma tabela de filmes, onde as informções são: id como uma chave primária, título que não pode ser nulo e não pode ter outro igual repetido, sinópse que não pode ser nula, a data de lançamento que não pode ser nula, e a avaliação que também não pode ser nula.

b)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
    "2006-01-06",
    7
);
```

c)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
    "2012-12-27",
    10
);
```

d)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
```

e)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Lisbela e o Prisioneiro",
    "Uma sonhadora jovem apaixonada por cinema se apaixona por um malandro conquistador.",
    "2003-08-22",
    9
);
```

### Exercício 6

a)
`SELECT id, title, rating FROM Movie WHERE id = "003"`

b)
`SELECT * FROM Movie WHERE title = "Lisbela e o Prisioneiro";`

c)
`SELECT id, title, synopsis FROM Movie WHERE rating > 7;`

### Exercício 7

a)
```
SELECT * FROM Movie
WHERE title LIKE "%vida%";
```

b)
```
SELECT * FROM Movie
WHERE title LIKE "%Flor%" OR
      synopsis LIKE "%Flor%";
```

c)
```
SELECT * FROM MOVIE
WHERE release_date < "2020-05-04";
```

d)
```
SELECT * FROM MOVIE
WHERE release_date < "2020-05-04" AND 
      (title LIKE "%Flor%" OR
      synopsis LIKE "%Flor%") AND rating > 7;
```
