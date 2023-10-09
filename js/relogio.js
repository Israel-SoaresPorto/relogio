//DOM
const hora = document.querySelector("#hora")
const minuto = document.querySelector("#minuto")
const segundo = document.querySelector("#segundo")

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




