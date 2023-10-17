//DOM
const hora = document.querySelector("#hora")
const minuto = document.querySelector("#minuto")
const segundo = document.querySelector("#segundo")
const dia = document.querySelector("#dia")
const mes = document.querySelector("#mes")
const ano = document.querySelector("#ano")
const diaDaSemana = document.querySelector("#diaSemana")
const periodo = document.querySelector("#periodo")
const icone = document.querySelector("#icone")
const fundo = document.body

let data = new Date()
let diasDasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"]
let d = data.getDate()
let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
let a = data.getFullYear()

if(d < 10){
    d = '0' + d
}

diaDaSemana.textContent = diasDasSemana[data.getDay()]
dia.textContent = d
mes.textContent = meses[data.getMonth()]
ano.textContent = a

//Evento
setInterval(relogio, 1000)

//Função
function relogio () {
    let horario = new Date()
    let hr = horario.getHours()
    let min = horario.getMinutes()
    let seg = horario.getSeconds()

    if(hr >= 5 && hr < 12) {
        periodo.textContent = "Bom dia!"
        icone.src = "images/sun.png"
        fundo.classList.add("fundo-dia")
    } else if(hr >= 12 && hr < 18) {
        periodo.textContent = "Boa tarde!"
        icone.src = "images/sun.png"
        fundo.classList.add("fundo-tarde")
    } else {
        periodo.textContent = "Boa noite!"
        icone.src = "images/moon.png"
        fundo.classList.add("fundo-noite")
    }

    if(hr < 10) {
        hr = '0' + hr
    }

    if(min < 10) {
        min = '0' + min
    }

    if(seg < 10) {
        seg = '0' + seg
    }
    
    hora.textContent = hr
    minuto.textContent = min
    segundo.textContent = seg
}





