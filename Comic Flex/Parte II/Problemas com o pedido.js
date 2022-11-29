Algoritmo "4 Problema com o pedido"

Var
pedido, prob, esc, dev: inteiro
resolvido: caracter


Inicio
repita
escreval("Qual produto você teve o problema: ")// buscar na base todos os meus pedidos
escreval("1 - Quadrinho Guerra Civil Vol.2")
escreval("2 - X-men Deadpool")


leia(pedido)
escolha pedido

caso 1
   escreval("Quadrinho Guerra Civil Vol.2")
   escreval("Selecione uma das opções: ")
   escreval("1 - Pacote não chegou")
   escreval("2 - Item danificado")
   escreval("3 - Diferente do que eu pedi")
   escreval("4 - Outro problema")
   leia(prob)

   escolha prob
   caso 1
     escreval("Pacote não chegou")
     escreval ("Você não esta qualificado para solicitar um reembolso")
     escreval ("Entre em contato com o vendedor")
     escreval ("1- Sim    2-não")
     leia(esc)
     escolha esc
     caso 1
       escreval("Garantia Solicitada co sucesso")
     caso 2
       escreval("Cancelado com sucesso")
     fimescolha
  caso 2
      escreval("Item danificado")
      escreval("Solicitar devolução ? ")
      escreval("1-Sim     2-Não")
      leia(dev)
      escolha dev
      caso 1
       escreval("Preencha a ficha de devolução...")
      caso 2
       escreval("Cancelado com sucesso")
      fimescolha
  caso 3
    escreval("Diferente do que eu pedi")
    escreval("Solicitar devolução ? ")
    escreval("1-Sim     2-Não")
    leia(dev)
    escolha dev
    caso 1
     escreval("Preencha a ficha de devolução...")
    caso 2
     escreval("Cancelado com sucesso")
    fimescolha
  caso 4
   escreval("Outro problema")
   escreval("Solicitar devolução ? ")
   escreval("1-Sim     2-Não")
   leia(dev)
   escolha dev
   caso 1
     escreval("Preencha a ficha de devolução...")
   caso 2
     escreval("Cancelado com sucesso")
   fimescolha
fimescolha

caso 2
   escreval("X-men Deadpool")
   escreval("Selecione uma das opções: ")
   escreval("1 - Pacote não chegou")
   escreval("2 - Item danificado")
   escreval("3 - Diferente do que eu pedi")
   escreval("4 - Outro problema")
   leia(prob)
   escolha prob
   caso 1
     escreval("Pacote não chegou")
     escreval ("Você não esta qualificado para solicitar um reembolso")
     escreval ("Entre em contato com o vendedor")
     escreval ("1- Sim    2-não")
     leia(esc)
     escolha esc
     caso 1
       escreval("Garantia Solicitada co sucesso")
     caso 2
       escreval("Cancelado com sucesso")
     fimescolha
  caso 2
      escreval("Item danificado")
      escreval("Solicitar devolução ? ")
      escreval("1-Sim     2-Não")
      leia(dev)
      escolha dev
      caso 1
       escreval("Preencha a ficha de devolução...")
      caso 2
       escreval("Cancelado com sucesso")
      fimescolha
  caso 3
    escreval("Diferente do que eu pedi")
    escreval("Solicitar devolução ? ")
    escreval("1-Sim     2-Não")
    leia(dev)
    escolha dev
    caso 1
     escreval("Preencha a ficha de devolução...")
    caso 2
     escreva("Cancelado com sucesso")
    fimescolha
  caso 4
   escreval("Outro problema")
   escreval("Solicitar devolução ? ")
   escreval("1-Sim     2-Não")
   leia(dev)
   escolha dev
   caso 1
     escreval("Preencha a ficha de devolução...")
   caso 2
     escreval("Cancelado com sucesso")
   fimescolha





fimescolha

fimescolha

escreval("Seu problema foi resolvido? [S/N]")
leia(resolvido)
ate resolvido = "s"

fimalgoritmo
