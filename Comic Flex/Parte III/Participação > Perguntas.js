Algoritmo "6 Participação_Perguntas"
procedimento perguntas
inicio
   p[1] <- "1 - Batman Morrem em novo jogo da DC"
   p[2] <- "2 - Henry Cavvil retorna como SuperMan"
   p[3] <- "3 - Marvel esta cada vez pior"
   escreval(p[1])
   escreval(p[2])
   escreval(p[3])
   escreval
fimprocedimento
Var
   p: vetor[1..3]de caracter
   qual, dig: inteiro

Inicio
   repita
      escreval("Digite 1 para ver suas perguntas: ")
      escreval("Digite 2 para apagar alguma pergunta: ")
      leia(dig)
      escolha dig
      caso 1
         escreval("Suas Perguntas: ")
         escreval

         perguntas
      caso 2
         escreval("Escolha qual deseja apagar: ")
         perguntas
         leia(qual)
         escolha qual
         caso 1
            p[1] <- " "
            escreval("Pergunta 1 apagada com sucesso")

         caso 2
            p[2] <- " "
            escreval("Pergunta 2 apagada com sucesso")

         caso 3
            p[3] <- " "
            escreval("Pergunta 3 apagada com sucesso")

         fimescolha
      fimescolha
   ate dig > 2
Fimalgoritmo
