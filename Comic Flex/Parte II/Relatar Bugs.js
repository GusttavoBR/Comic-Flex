Algoritmo "2 Relatar Bugs"

Var
bug, resumo, passos: caracter
decida: inteiro


Inicio
escreva("Onde você viu o bug: ")
leia(bug)

escreva("Resuma o bug para a gente: ")
leia(resumo)

escrevaL("Liste os passos que ocorreram antes do bug acontecer ")
EscrevaL("1")
EscrevaL("2")
EscrevaL("3")
leia(passos)

escreval("*******************")
escrevaL("Resumo do relatório")
escreval("*******************")
escrevaL("Onde o bug estava: ", bug)
escrevaL("resumo dele: ", resumo)
escrevaL("Passos para ele acontecer: ", passos)

escrevaL()
escrevaL("")
escrevaL("Está de acordo para enviar esse relatório ?")
escrevaL("1- Sim  2-Não")
leia(decida)

escolha decida
caso 1
  escreval("Enviado Com Sucesso")
caso 2
  escrevaL("Formulário Cancelado")
fimescolha


Fimalgoritmo
