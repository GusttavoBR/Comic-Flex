```js
Algoritmo "Fale Conosco"
// Disciplina   : [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 

Var
email, senha, assunto, msg: caracter
decida : inteiro

Inicio
escrevaL("VOCE DEVE ESTAR LOGADO PARA NOS ENVIAR UM EMAIL")
escrevaL("Digite seu Email: ")
leia(email)

escrevaL("Digite sua senha: ")
leia(senha)

escrevaL("Você esta logado.")

escrevaL("Assunto: ")
leia(assunto)

escrevaL("Mensagem: ")
leia(msg)

escrevaL("Confirmar o envio da Mensagem : ")
escrevaL(msg)
escrevaL("1- Sim ou 2-Não")
escrevaL(" ")
leia(decida)
escolha (decida)
caso 1
    escrevaL("Mensagem Enviada com Sucesso !")
caso 2
    escrevaL("Mensagem Apagada !")
fimescolha

Fimalgoritmo
```
