const fundo = document.body;

let data = new Date();
let hora = data.getHours()

if(hora >= 5 && hora < 12) {
    fundo.setAttribute('data-cor-fundo', 'dia')
} else if(hora >= 12 && hora < 18) {
    fundo.setAttribute('data-cor-fundo', 'tarde')
} else {
    fundo.setAttribute('data-cor-fundo', 'noite')
}
