//DOM
const hora = document.querySelector("#hora")
const minuto = document.querySelector("#minuto")
const segundo = document.querySelector("#segundo")
const dia = document.querySelector("#dia")
const mes = document.querySelector("#mes")
const ano = document.querySelector("#ano")
const diaDaSemana = document.querySelector("#diaSemana")

var data = new Date()
let d = data.getDate()
let m = data.getMonth() + 1
let a = data.getFullYear()

var diasDasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"]

if(d < 10){
    d = '0' + d
}

if (m < 10) {
    m = '0' + m
}

diaDaSemana.textContent = diasDasSemana[data.getDay()]
dia.textContent = d
mes.textContent = m
ano.textContent = a

//Evento
setInterval(relogio, 1000)

//Função
function relogio () {
    let horario = new Date()
    let hr = horario.getHours()
    let min = horario.getMinutes()
    let seg = horario.getSeconds()

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

function calendario() {
    let data 
}




