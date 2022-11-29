Algoritmo "6 Assinatura"

Var
nome, ass1: caracter
ass, canc: inteiro

Inicio
escreva("Nome do assinante: ")
leia(nome)

escreval(nome, " Plus")

escreval("Escolha sua assinatura")
escreval("1- Mensal 10,90")
escreval("2- Anual 95,40")
leia(ass)
escolha ass
caso 1
  ass1 <- "Mensal"
caso 2
  ass1 <- "Anual"
fimescolha

escrevaL("Planto atual ", ass1)

escreval("Data da reovação **/**/****")
escreval("........................")

escreval("Deseja cancelar sua assinatura? ")

escreval("1- Sim")
escreval("2- Não")
leia(canc)
escolha canc

caso 1
  escreva("Cancelado com Sucesso")
caso 2
  escreva("Assinatura em vigor")
fimescolha


Fimalgoritmo