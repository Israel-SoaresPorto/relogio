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
let d = data.getDate() < 10 ? '0' + data.getDate() : data.getDate();
let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
let a = data.getFullYear()

diaDaSemana.textContent = diasDasSemana[data.getDay()]
dia.textContent = d
mes.textContent = meses[data.getMonth()]
ano.textContent = a

//Evento
setInterval(() => {
    let horario = new Date()
    let hr = horario.getHours() < 10 ? '0' + horario.getHours() : horario.getHours();
    let min = horario.getMinutes() < 10 ? '0' + horario.getMinutes() : horario.getMinutes();
    let seg = horario.getSeconds() < 10 ? '0' + horario.getSeconds() : horario.getSeconds();

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
    
    hora.textContent = hr
    minuto.textContent = min
    segundo.textContent = seg
}, 1000);
