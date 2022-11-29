Algoritmo "7 Carrinho de Compras"

Var
item1, item2, item3, item4: caracter
preco1, preco2, preco3, preco4, total: real
decida: inteiro


Inicio
item1 <- "Vingadores Vol2"
preco1 <- 54.90

item2 <- "Deadpool"
preco2<- 19.90

item3 <- "Xman"
preco3 <- 25.50

item4 <- "Homem de Ferro"
preco4 <- 78.90


escreval("Carrinho de compras")// produtos adicionados ao carrinho anteriormente
escreval(item1)
escreval(preco1)
escreval("______________")

escreval(item2)
escreval(preco2)
escreval("______________")

escreval(item3)
escreval(preco3)
escreval("______________")

escreval(item4)
escreval(preco4)
escreval("______________")

total <- preco1 + preco2 + preco3 + preco4

escreval("Total de", total)
escreval("________________")

escrevaL("Você é assinante ?")
escrevaL("1- Sim   2-Nao")
leia(decida)
escolha decida

caso 1
  total <- 10.90
  escreval("Valor do total de", total)
caso 2
  escreval("Total de", total)
fimescolha

Fimalgoritmo
