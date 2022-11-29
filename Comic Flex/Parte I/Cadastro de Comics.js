Algoritmo "4 Cadastro de Comics"
Var
  nomeQuadrinho, nomeIlustrador, saga: caracter
  codQuadrinho, dataLancamento, estoque: inteiro
Inicio
      escreva("Nome do Quadrinho: ")
      leia(nomeQuadrinho)
      
      escreva("Nome da Saga: ")
      leia(saga)
      
      escreva("Nome do Ilustrador: ")
      leia(nomeIlustrador)
      
      escreva("Codigo do Quadrinho: ")
      leia(codQuadrinho)
      
      escreva("Data de Lançamento: ")
      leia(dataLancamento)
      
      escreva("Estoque: ")
      leia(estoque)
      se (estoque <=0) entao
         escrevaL("Estoque invalido")
         senao
            escrevaL("Cadastro de Quadrinho efetuado com sucesso")
            escrevaL("__________________________________________")
            escrevaL("Confira as informações abaixo:")
            escrevaL("Nome: ", nomeQuadrinho)
            escrevaL("Saga: ", saga)
            escrevaL("Ilustrador: ", nomeIlustrador)
            escrevaL("Data de Lançamento: ", dataLancamento)
            escrevaL("Estoque: ", estoque)
            escrevaL("Cod do Produto: ", codQuadrinho)
         fimse
Fimalgoritmo

