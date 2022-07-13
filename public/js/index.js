console.log('index-js success')

const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
let main = qs('.container');
let subtitulo = qs('h2.subtitulo');
let parrafos = qsa('p')
const link = qs('a');
let nombre = prompt('Decime tu nombre')
if(nombre){
    subtitulo.innerText += nombre
}else{
    subtitulo.innerText += 'Invitado'
}
subtitulo.style.textTransform = 'uppercase';
link.style.color = '#E51B3E'; 

let respuesta = confirm('Desea agregar fondo de pantalla?')

if(respuesta){
    qs('body').classList.add('fondo')
}

for (let i = 0; i < parrafos.length; i++) {
    
    if(i%2===0){
        parrafos[i].classList.add('destacadoPar')
    }else{
        {
            parrafos[i].classList.add('destacadoImpar')
        }
    }
    
}

console.log(respuesta);

/* while(nombre ===""){
    let nombre = prompt('Decime tu nombre')//permite dejar un mensaje emergente
} */
main.style.display = 'block'
