//Declarar varibles para vincular los objetos del formlario

const usuaruio = document.getElementById('user');
const password = document.getElementById('pass');
const formulario = document.getElementById('formlogin');

//generando eventos
formulario.addEventListener('submit', login);

//funciones a ejecutar
function login(e){
    e.preventDefault();

    let usuarioVal = usuario.value;
    let passwordVal = password.value;
console.log('el valor para user es:' + usuarioVal);
console.log('el valor para pass es:' + passwordVal );



}