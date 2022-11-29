Algoritmo "8 Participação_Seguindo"

Var
   p: caracter
   qual, dig: inteiro

Inicio
   repita
      escreval("Digite 1 para ver quem você segue: ")
      escreval("Digite 2 para parar de seguir: ")
      leia(dig)
      escolha dig
      caso 1
         escreval("Seus seguidores: ")
         escreval

         escreval("Você não possui nenhum seguidor")
         escreval
      caso 2
         escreval("Escolha qual deseja parar de seguir: ")
         escreval
         escreval("Não é possivel parar de seguir, pois você nao possui seguidores")
         escreval


      fimescolha
   ate dig > 2
Fimalgoritmo