Algoritmo "1 Detalhes do quadrinho"
// API que puxa do banco de dados os detalhes do
// quadrinho selecionado

Var
nome,colecao, data: caracter
pag, vol, decida: inteiro


Inicio
// recebe os dados que ja foram cadastrado no bd atraves de
// uma chamativa de função
nome <- "Guerra Civil"
colecao <- "Essenciais"
pag <- 128
vol <- 2
data <- "20/02/1998"

escrevaL("_____________________________")
escrevaL("Os Detalhes do Quadrinho são:")
escrevaL("_____________________________")
escrevaL("Nome: ", nome)
escrevaL("Coleção: ", colecao)
escrevaL("Páginas: ", pag)
escrevaL("Volume: ", vol)
escrevaL("Data de Lançamento: ", data)

EscrevaL("Deseja Adicionar ao Carrinho: ")
leia(decida)

se decida = 1 entao
  escrevaL("Adicionado com Sucesso")
  escrevaL()
  escrevaL("")
  escrevaL("_______________________")
  escrevaL("Voltando para a Vitrine")
  escrevaL("_______________________")
  senao
  escrevaL("Voltando para a Vitrine")
fimse




Fimalgoritmo
