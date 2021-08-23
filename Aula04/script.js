nomeCompleto = "Carlos Thomaz da Rosa Silva"
apelido = "Carlitos"
idade = 33
dataNascimento = "02/02/1988"
localNascimento = "Porto Alegre"
altura = 1.90
trabalhando = false

apresentacao = "Meu nome é " + nomeCompleto + " (sou conhecido[a] como " + apelido + ") e tenho " + idade + " anos. Nasci no dia " + dataNascimento + ", na cidade de " + localNascimento + ". Tenho " + altura + "m de altura e atualmente estou " + (trabalhando ? "empregado" : "desempregado") + "."

console.log(apresentacao)