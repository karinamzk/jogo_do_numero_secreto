// Exercicios 
let nome 

function saudacao(nome){
    console.log(`Olá, ${nome} mundo!`)
}

saudacao("karina")

function ex(parametro){
    console.log(parametro)
}

function media(numero1, numero2, numero3){
    let media = (numero1 + numero2 + numero3) / 3
    return media
}

ex(media(20, 30, 5))

function retornarMaior(numero1, numero2){
    return Math.max(numero1, numero2)
}

ex(retornarMaior())
