Algoritmo "3 Pedidos"

Var
data, enviado, link: caracter
total, nPedido: real

Inicio
// Importar foto do banco de dados do quadrinho

link <- "www.comicflex.com.br/link=1/guerracivil/sdsfdfsfsd=true"

// Funções externas que pegam no bd as informações referentes
// ao seu pedido

data <- "17 de Julho de 2022"
enviado <- "Gustavo Vieira"
total <- 55,90
nPedido <- 1
escrevaL(link)
escrevaL("Pedido realizado em ", data)
escrevaL("Total ", total)
escrevaL("Enviado Para ", enviado)
escrevaL("Pedido Número ", nPedido)

Fimalgoritmo