Algoritmo "Calculo de Frete"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/08/2022
Var
// Seção de Declarações das variáveis 
cep: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
 escreva("Calcular o Frete: ")
 leia(cep)
 se (cep = 37470000) entao
 cep <-  25.50
 senao
      escrevaL("Cep nao identificado")
 fimse
 
 escreva("O valor do frete é de ", cep, " Reais ")

Fimalgoritmo