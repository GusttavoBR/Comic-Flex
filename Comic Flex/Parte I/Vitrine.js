Algoritmo "08 Vitrine"

Var

marvel,dc: caracter
decida, catMarvel, qCat, sn: inteiro

Inicio
marvel <- "Marvel"
dc <- "DC"
escrevaL("*************************************************")
escrevaL("Olá Usuario, escolha quais revistar você quer ver")
escrevaL("*************************************************")
escrevaL("1- Marvel   2-DC")
leia(decida)

escolha(decida)
caso 1
  escrevaL("Qual categoria")
  escrevaL("______________")
  escrevaL("1- Universo Marvel")
  escrevaL("2- X-Men")
  escrevaL("3- Outros Personagens")
    leia(qCat)
    
    escolha(qcat)
    caso 1
      escrevaL("Coleção Grandes Heróis Marvel (Panini)")
      escrevaL("R&159,92")
      escrevaL("Deseja Adicionar ao Carrinho ?")
      escrevaL("1- Sim   2- Não")
      leia(sn)
      escolha(sn)
      caso 1
        escreva("Adicionado com Sucesso !!!")
      caso 2
        escreva("Cancelado")
      fimescolha
    caso 2
      escrevaL("A Saga Dos X-Men Vol. 1")
      escrevaL("R&29,52")
      escrevaL("Deseja Adicionar ao Carrinho ?")
      escrevaL("1- Sim   2- Não")
      leia(sn)
      escolha(sn)
      caso 1
        escreva("Adicionado com Sucesso !!!")
      caso 2
        escreva("Cancelado")
      fimescolha
    caso 3
      escrevaL("A Aniquilação Final")
      escrevaL("R&43,93")
      escrevaL("Deseja Adicionar ao Carrinho ?")
      escrevaL("1- Sim   2- Não")
      leia(sn)
      escolha(sn)
      caso 1
        escreva("Adicionado com Sucesso !!!")
      caso 2
        escreva("Cancelado")
      fimescolha
   fimescolha
caso 2
  escrevaL("Qual categoria")
  escrevaL("______________")
  escrevaL("1- Batman")
  escrevaL("2- Superman")
  escrevaL("3- Flash")
    leia(qCat)

    escolha(qcat)
    caso 1
      escrevaL("Batman - Vigilantes de Gotham # 25")
      escrevaL("R&7,50")
      escrevaL("Deseja Adicionar ao Carrinho ?")
      escrevaL("1- Sim   2- Não")
      leia(sn)
      escolha(sn)
      caso 1
        escreva("Adicionado com Sucesso !!!")
      caso 2
        escreva("Cancelado")
      fimescolha
    caso 2
      escrevaL("Casamento do Superhomen")
      escrevaL("R&22,00")
      escrevaL("Deseja Adicionar ao Carrinho ?")
      escrevaL("1- Sim   2- Não")
      leia(sn)
      escolha(sn)
      caso 1
        escreva("Adicionado com Sucesso !!!")
      caso 2
        escreva("Cancelado")
      fimescolha
    caso 3
      escrevaL("Batman - Vigilantes de Gotham # 25")
      escrevaL("R&25,00")
      escrevaL("Deseja Adicionar ao Carrinho ?")
      escrevaL("1- Sim   2- Não")
      leia(sn)
      escolha(sn)
      caso 1
        escreva("Adicionado com Sucesso !!!")
      caso 2
        escreva("Cancelado")
      fimescolha
    fimescolha
fimescolha
fimescolha

  


Fimalgoritmo
