Algoritmo "5 cadastro de Fornecedor"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
Var
numero, cep, cnpj, ie, contato, pessoa: inteiro
nf, rs, endereco, bairro, cidade, uf, pessoa1,email, nov: caracter
Inicio
repita
escreva("Nome fantasia: ")
leia(nf)

escreva("Razão social: ")
leia(rs)

escreva("Endereço: ")
leia(endereco)

escreva("Numero ")
leia(numero)

escreva("Bairro ")
leia(bairro)

escreva("Cidade ")
leia(cidade)

escreva("UF ")
leia(uf)

escreva("CEP ")
leia(cep)

escreval("1 - Pessoa Física")
escreval("2 - Pessoa Jurídica")
leia(pessoa)
escolha pessoa
caso 1
  pessoa1 <- "Pessoa Física"
caso 2
  pessoa1 <- "Pessoa Jurídica"
fimescolha

escreva("CNPJ ")
leia(cnpj)

escreva("Inscrição Estadual ")
leia(ie)

escreva("E-mail ")
leia(email)

escreva("Contato ")
leia(contato)
escrevaL("______________________________________________________")
escrevaL("Cadastro de Fornecedor finalizado com sucesso ")
escrevaL("______________________________________________________")
escrevaL("Nome fantasia: ", nf)
escrevaL("Razão social: ", rs)
escrevaL("Endereço: ", endereco)
escrevaL("Numero: ", numero)
escrevaL("Bairro: ", bairro)
escrevaL("Cidade: ", cidade)
escrevaL("UF: ", uf)
escrevaL("CEP: ", cep)
escrevaL("Pessoa: ", pessoa1)
escrevaL("CNPJ: ", cnpj)
escrevaL("Inscrição Estadual: ", ie)
escrevaL("E-mail: ", email)
escrevaL("Contato: ", contato)

escreval("Inserir um novo fornecedor ? [S/N]")
leia(nov)
ate nov = "n"
Fimalgoritmo