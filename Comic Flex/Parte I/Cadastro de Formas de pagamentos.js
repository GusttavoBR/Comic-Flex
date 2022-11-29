
Algoritmo "3 cadastro de formas de pagamento"
Var
mValidade, aValidade, nCartao, codS, cpfTitular: inteiro
nomeCartao,  dNascimento: caracter
Inicio
      escreva("Digite o número do cartão: ")
      leia(nCartao)

	   escreva("Digite o nome do cartão conforme escrito nele: ")
	   leia(nomeCartao)

      escreva("Digite o mes de validade do cartão: ")
      leia(mValidade)
      se (mValidade >= 13) entao
         escrevaL("Mês Invalido")
      senao
      
      escreva("Digite o ano de validade do cartão no padrão de 4 dígitos: ")
      leia(aValidade)
      se (aValidade <  2022 ) entao
      escrevaL("Ano Invalido")
      senao

      escreva("Digite o Código de segurança do cartão: ")
      leia(codS)
      
      escreva("Digite sua data de Nascimento: ")
      leia(dNascimento)
      
      escreva("Digite o CPF do titular do cartão: ")
      leia(cpfTitular)

         escrevaL("______________________________________________________")
         escrevaL("Cadastro de forma de pagamento finalizado com sucesso ")
         escrevaL("______________________________________________________")
         escrevaL("Numero do Cartão: ", nCartao)
         escrevaL("Nome no Cartão: ", nomeCartao)
         escrevaL("Mês de Validade do Cartão: ", mValidade)
         escrevaL("Ano de Validade do Cartão: ", aValidade)
         escrevaL("Código de Segurança do Cartão: ", codS)
         escrevaL("Data de Nascimento do Títular: ", dNascimento)
         escrevaL("CPF do Títular: ", cpfTitular)
      fimse
           fimse
	}
Fimalgoritmo

