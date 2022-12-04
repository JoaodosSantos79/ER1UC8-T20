
let pesoPeca = 200

if (pesoPeca > 100) {
    console.log("Peso adequado, podemos cadastrar")
} else {
  console.log("Cadastro não permitido, peso fora da especificação")  
}

let numeroPecas = 10

if (numeroPecas >= 10) {
    console.log("Capacidade máxima atingida")
} else {
  console.log("Ainda há espaço para cadastro")
}

let listaPecas = ["Disco de freio","Motor","Pastilha de freio","Pneu","Volante"]

if (listaPecas.length >= 10) {
  console.log("Capacidade máxima atingida")    
} else {
  console.log("Ainda há espaço para cadastro")
}

let nomePeca = "Disco de freio"

if (nomePeca.length < 3) {
   console.log("Nome inválido, o nome precisa ter 3 caracteres ou mais")   
} else {
    console.log("Nome adequado")
}
