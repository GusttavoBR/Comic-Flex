Algoritmo "10 Configurações"
Var
   op, tamanho: inteiro
   fonte: caracter
Inicio
   repita
      escrevaL("Digite um 1 para TEMAS")
      escreval
      escrevaL("Digite um 2 para FONTE")
      escreval
      escrevaL("Digite um 3 para OCULTAR NAVEGAÇÃO À ESQUERDA")
      escreval
      escrevaL("Digite um 4 para ATIVAR NOTIFICAÇÕES DESKTOP")
      escreval
      escrevaL("Digite um 5 para ACESSIBILIDADE")
      escreval
      leia(op)
      escolha op
      caso 1
         escreval("1 - Claro")
         escreval("2 - Escuro")
         escreval("3 - Sistema")
         leia(op)
         escolha op
         caso 1
            escreva("Tema Claro definido")
         caso 2
            escreva("Tema Escuro definido")
         caso 3
            escreva("Tema do Sistema definido")//Pega a config do sistema
         fimescolha
      caso 2
         escreva("Escolha sua fonte: ")
         leia(fonte)
         escreva("Escolha o tamanho: ")
         leia(tamanho)
         escreval
         escreval("Fonte: ", fonte)
         escreval("Tamanho: ", tamanho)
      caso 3
         escrevaL("Ocultar navegação à esquerda ATIVADO")
      caso 4
         escreval(" Notificações de Desktop ATIVADO")
      caso 5
         escreva("Acessibilidade ATIVADO")
      fimescolha
   ate op = 6
Fimalgoritmo