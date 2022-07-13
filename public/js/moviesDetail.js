console.log('moviesAdd-js success')

const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);

let titulo = qs('h1');
let article = qs('article');
let parrafos = qsa('p')



titulo.classList.add('titulo')
article.classList.add("fondoCRUD")
article.style.color = 'white'