## Exercício aprofundamento sql

### Exercício 1

a) Irá deletar a coluna salário.

b) Irá renomear a coluna gender para sex, com no máximo 6 caracteres.

c) Irá alterar a quantidade de caracteres permitidos na coluna gender para 225 caracteres.

d)

` ALTER TABLE Actor CHANGE gender gender VARCHAR(100); `



### Exercício 2

a) 
```
UPDATE Actor
SET name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";
```

b)
```
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
```

c)
```
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";
```

### Exercício 3

a)
` DELETE FROM Actor WHERE name = "Fernanda Montenegro";`


b)
```
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000
```

### Exercício 4

a)
` SELECT MAX(salary) FROM Actor `

b)
` SELECT MIN(salary) FROM Actor WHERE gender = "female" `

c)
` SELECT COUNT(*) FROM Actor WHERE gender = "female" `

d)
` SELECT SUM(salary) FROM Actor `

### Exercício 5

a) Irá retornar a quantidade de atores de acordo com o gênero.

b)
```
SELECT id, name FROM Actor
ORDER BY name DESC;
```

c)
```
SELECT * FROM Actor
ORDER BY salary;
```

d)
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

e)
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```