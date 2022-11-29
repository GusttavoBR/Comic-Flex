Algoritmo "7 e-Kindle"

Var
decida: inteiro
idioma, sair: caracter


Inicio
// Após configurado sua conta
repita
escreval("Olá usuario diga o que deseja fazer ou escolha alguma opção")
escreval("1 - Ler alguma HQ")
escreval("2 - Comprar algumas HQ")
escreval("3 - Curisosidades sobre as HQS")
escreval("4 - Mudar o Idioma")
leia(decida)
escolha decida
caso 1
  escreval("Selecione uma das suas HQS")// fala as hqs que você tem
  escreval("Lista das HQS...")
  escreval("Lista das HQS...")
  escreval("Lista das HQS...")
  escreval("Lista das HQS...")
  escreval("Lista das HQS...")
caso 2
  escreval("Diga o nome da HQ que deseja comprar")// com o cartão ja cadastrado no site
caso 3
  escreval("Seleciona uma HQ para que possam ser dita as curiosidades, quem escreveu, quem ilustrou...")
caso 4
  escreval("Diga o idioma selecionado")
  leia(idioma)
  escreval("O idioma foi mudado para o ", idioma, " obrigado")
fimescolha
escreva("Deseja escolher outra opção ? [S/N]")
leia(sair)
ate sair = "s"
escreva("Volte Sempre !!!")
Fimalgoritmo
