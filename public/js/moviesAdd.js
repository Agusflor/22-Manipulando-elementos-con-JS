console.log('moviesAdd-js success')

const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);

let titulo = qs('h1');
let seccion = qs('section');
let articulo = qs('article');

titulo.style.innerText = "AGREGAR PELÍCULAS"
titulo.classList.add('titulo')
articulo.classList.add("fondoTransparente");
seccion.classList.add("fondoCRUD")