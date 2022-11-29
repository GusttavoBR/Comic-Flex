Algoritmo "9 Controle de Vendas"

Var
preco, valor, lucro, nvalor: real
qtd: inteiro


Inicio
escreval("Homen de Ferro")
escreval("Valor 25,90")
preco <- 25.90
escreval ("Digite a Quantidade de Quadrinhos do homen de ferro vendidas em Janeiro de 2020")
leia (qtd)
valor <- qtd * preco
lucro <- (valor*40) / 100
nvalor <- valor - lucro
escreval("Em Janeiro de 2021 venderam", qtd, " unidades do quadrinho homem de ferro com o valor bruto de",valor, " reais ")
escreval("com um lucro de", nvalor, " reais")

Fimalgoritmo
