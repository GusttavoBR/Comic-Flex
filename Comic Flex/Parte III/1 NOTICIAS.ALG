Algoritmo "1 Noticias"
// LISTAR NOTICIAS
// EDITAR NOTICIAS
// REMOVER NOTICIAS
// EDITAR NOTICIAS
procedimento menu(i: inteiro)
inicio //MODOLARIZAÇÃO
se i = 1 entao
  escreval("1- Listar Noticias: ")
  escreval("2- Gerencias Noticias: ")
  escreval("3- Sair: ")
fimse
se i = 2 entao
  escreval("3- Adicionar uma nova noticia: ")
  escreval("4- Remover Noticia")
  escreval("5- Editar noticia")
  escreval("6- Voltar")
fimse
se i = 3 entao
  escreval("_________________________________________")
  escreval("Bem vindos ao portal de noticias da Unis")
  escreval("_________________________________________")
  escreval
  escreval("O que você deseja fazer? ")
  escreval
  fimse
fimprocedimento
Var
op, i, cont, qtde: inteiro
//n1, n2, n3, n4, n5: caracter
n: vetor [1..5]de caracter
novaN: caracter

Inicio
// LISTAR NOTICIAS
// EDITAR NOTICIAS
// REMOVER NOTICIAS
// EDITAR NOTICIAS

menu(3)
repita
  menu(1)
  escreval
  leia(op)
  escreval
  escolha op
  escreval

caso 1
  se n[1] <> "" entao
  escreval("1 -",n[1])
  fimse

  se n[2] <> "" entao
  escreval("2 -",n[2])
  fimse

  se n[3] <> "" entao
  escreval("3 -",n[3])
  fimse

  se n[4] <> "" entao
  escreval("4 -",n[4])
  fimse

  se n[5] <> "" entao
  escreval("5 -",n[5])
  fimse

caso 2
repita
  menu(2)
  leia(op)
  escolha op

  caso 3
    escreval("Quantas noticias deseja inserir: ")
    leia(qtde)
    para i de 1 ate qtde  faca
      escreva("Digite a sua noticia: ")
      cont <- cont +1
      leia(n[i])
    fimpara
  caso 4
    escreval("Qual Noticia deseja remover? ")
    se n[1] <> "" entao
  escreval("1 -",n[1])
  fimse

  se n[2] <> "" entao
  escreval("2 -",n[2])
  fimse

  se n[3] <> "" entao
  escreval("3 -",n[3])
  fimse

  se n[4] <> "" entao
  escreval("4 -",n[4])
  fimse

  se n[4] <> "" entao
  escreval("5 -",n[5])
  fimse
    leia(i)
    n[i] <- ""

  caso 5
    escreval("Digite qual noticia voce quer editar: ")
    leia(i)
    escreval("Digite a nova noticia: ")
    leia(novaN)
    n[i] <- novaN
  fimescolha
  ate op = 6
fimescolha
ate op = 3
Fimalgoritmo