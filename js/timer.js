const horasInput = document.querySelector('#input-horas');
const minutosInput = document.querySelector('#input-minutos');
const segundosInput = document.querySelector('#input-segundos');
const horas = document.querySelector('#hora');
const minutos = document.querySelector('#minuto');
const segundos = document.querySelector('#segundo');
const iniciarTimer = document.querySelector('#iniciar');
const pausarTimer = document.querySelector('#pausar');
const pararTimer = document.querySelector('#parar');

let intervalo;
let h, m, s;

function atualizarTimer() {
    horas.textContent = String(h).padStart(2, '0');
    minutos.textContent = String(m).padStart(2, '0');
    segundos.textContent = String(s).padStart(2, '0');
}

function timer() {
    if(s > 0) {
        s--;
    } else if(m > 0) {
        m--;
        s = 59;
    } else if(h > 0) {
        h--;
        m = 59;
        s = 59;
    } else {
        alert('Timer finalizado');
        clearInterval(intervalo);
        iniciarTimer.disabled = false;
        pausarTimer.disabled = true;
        pararTimer.disabled = true;
    }
    atualizarTimer();
}

iniciarTimer.addEventListener('click', ()=> {
    h = parseInt(horasInput.value) || 0;
    m = parseInt(minutosInput.value) || 0;
    s = parseInt(segundosInput.value) || 0;

    horasInput.value = '';
    minutosInput.value = '';
    segundosInput.value = '';

    if(h > 99 || m > 59 || s > 59) {
        alert('Por favor, preencha os campos corretamente');
        return;
    }

    if(h === 0 && m === 0 && s === 0) {
        alert('Por favor, preencha os campos corretamente');
        return;
    }

    atualizarTimer()
    intervalo = setInterval(timer, 1000);
    iniciarTimer.disabled = true;
    pausarTimer.disabled = false;
    pararTimer.disabled = false;
});

pausarTimer.addEventListener('click', ()=> {
    clearInterval(intervalo);
    iniciarTimer.disabled = false;
    pausarTimer.disabled = true;
});

pararTimer.addEventListener('click', ()=> {
    clearInterval(intervalo);
    h = 0;
    m = 0;
    s = 0;
    atualizarTimer();
    iniciarTimer.disabled = false;
    pausarTimer.disabled = true;
    pararTimer.disabled = true;
});