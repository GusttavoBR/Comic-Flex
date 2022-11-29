Algoritmo "2 Forum"

Var
disc, cont, i: inteiro
titulo, corpo: inteiro
n: vetor[1..3]de caracter
b: vetor[1..3]de caracter

Inicio
repita
escreval("1 -  Ver Discussões")
escreval("2 -  Criar nova Discussão")
escreval("3 - Encerrar")
leia(disc)
escolha disc
caso 1
  escreval(n[1])
  escreval(b[1])
  escreval
  escreval(n[2])
  escreval(b[2])
  escreval
  escreval("Informação 3...")
  escreval("Informação 4...")
caso 2
  escreval("Iniciando uma nova discussão...")
  para i de 1 ate 2 faca
  escreval("Digite o título: ")
  leia(n[i])
  escreval
  escreval("Escreva o corpo de sua discussão: ")
  leia(b[i])
  cont <- cont + 1
  fimpara
fimescolha
ate disc = 3


Fimalgoritmo