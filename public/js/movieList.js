console.log('movieList-js success')

const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);

const body = qs('body');
const titulos = qs('.moviesListTitulos');

let respuesta = confirm('Desea cambiar a modo oscuro??')

if(respuesta){
    body.style.backgroundColor = "#7f7f7f"
    body.classList.add('fondoMoviesList')
}

titulos.innerHTML = 'LISTADO DE PELICULAS';
titulos.style.color = 'white';
titulos.style.backgroundColor = 'teal'
titulos.padding = "20px"