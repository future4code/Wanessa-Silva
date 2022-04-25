## Exercício 1

a) Chave estrangeira ou foreign key, é o campo que estabelece o relacionamento entre duas tabelas, ou seja, uma coluna corresponde à mesma coluna que de outra tabela.

b)
```
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);
```

c) A query não adiciona a linha.

d) ` ALTER TABLE Movie DROP COLUMN rating; `

## Exercício 2

a) Trata-se de uma tabela que tem um id de filme e um id de um ator.

b) ```

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"003"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"004"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"005"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"006"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"007"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"008"
);
```

c) O id não foi encontrado, por isso não é possível adicionar.

d) A relação ainda existe, por isso não dá para apagar o ator.


## Exercício 3

b)
```
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```