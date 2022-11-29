Algoritmo "4 Respostas"

procedimento enquetes
inicio
   escreval("1 - Mulher Hulk um fiasco")
   escreval("2 - O que Acharão de Adão negro")
   escreval("3 - Luta pela DC")
   escreval("4 - Marvel a beira da falencia")
fimprocedimento

procedimento hulk
inicio
   escreval("Mulher Hulk um fiasco")
   escreval("Galera assisti a serie e detestei, falem ai o que vocês acharam")
   escreval
fimprocedimento

procedimento adao
inicio
   escreval("O que Acharão de Adão negro")
   escreval("Acabei de sair do cinema e particularmente eu adoreio filme")
   escreval
fimprocedimento

procedimento dc
inicio
   escreval("Luta pela DC")
   escreval("Criei este tópico para você que é fã da DC deixar sua mensagem de apoio")
   escreval
fimprocedimento

procedimento marvelF
inicio
   escreval("Marvel a beira da falencia")
   escreval("Galera só eu acho que a Marvel está a beira da falência ?")
   escreval
fimprocedimento
Var
   esc: inteiro
   resp, nome: caracter


Inicio
repita
   escreva("Digite seu nome: ")
   leia(nome)
   enquetes

   leia(esc)

      se (esc = 1) entao
         hulk
         leia(resp)
         escreval("Digite sua resposta: ")
         limpatela
         hulk
         escreval
         escreval(nome," diz: ",resp)
      senao
         se (esc = 2) entao
            adao
            leia(resp)
            escreval("Digite sua resposta: ")
            limpatela
            adao
            escreval
            escreval(nome," diz: ",resp)
         senao
            se (esc = 3) entao
               dc
               leia(resp)
               escreval("Digite sua resposta: ")
               limpatela
               dc
               escreval
               escreval(nome," diz: ",resp)
            senao
               se (esc = 4) entao
                  marvelF
                  leia(resp)
                  escreval("Digite sua resposta: ")
                  limpatela
                  marvelF
                  escreval
                  escreval(nome," diz: ",resp)
               fimse
            fimse
         fimse
      fimse
      ate (esc > 4)

Fimalgoritmo
