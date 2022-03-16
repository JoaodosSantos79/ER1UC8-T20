let pesoPeca = 200
let numeroPecas = 10
let listaPecas = ["Disco de freio","Motor","Pastilha de freio","Pneu","Volante"]
let nomePeca = "Disco de freio"

 //Verificação peso da peça
if (pesoPeca > 100) {
    // Podemos cadastrar
  console.log ("Peso adequado, podemos cadastrar")

} else {
    // Não podemos cadastrar
  console.log ("Peso menor que 100g, não podemos cadastrar")  
}
 //Verificação tammanho da lista de peças
if (numeroPecas >= 10) {
    //Capacidade máxima atingida
    console.log ("Capacidade máxima atingida")
} else {
    //  Ainda há espaço para cadastro
  console.log ("Ainda há espaço para cadastro")
}
 //Verificação da lista de peças
if (listaPecas.length >= 10) {
    //Capacidade máxima atingida
  console.log ("Capacidade máxima atingida")    
} else {
    // Ainda há espaço para cadastro
  console.log ("Ainda há espaço para cadastro")
}
 //Verificação do nome da peça
if (nomePeca.length < 3) {
    // Nome inválido
   console.log ("Nome inválido, o nome precisa ter 3 caracteres ou mais")   
} else {
    // Nome da peça adequado
    console.log ("Nome adequado")
}
