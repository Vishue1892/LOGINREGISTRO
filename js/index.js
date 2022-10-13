//Declarar varibles para vincular los objetos del formlario

const usuario = document.getElementById('user');
const password = document.getElementById('pass');
const formulario = document.getElementById('formLogin');

//generando eventos
formulario.addEventListener('submit', login);

//funciones a ejecutar
function login(e){
    e.preventDefault();

    let usuarioVal = usuario.value;
    let passwordVal = password.value;

    if(usuarioVal == '' || passwordVal == ''){
       creaMensaje('Verifica tus campos', 'danger');
        return;
    }
    if(localStorage.getItem('usuario')){
        let objeto = JSON.parse(localStorage.getItem('usuario'));

        if(usuarioVal == objeto.user && passwordVal == objeto.pass){
          creaMensaje('Login correcto', 'success');
        }else{
            creaMensaje('Usuario Incorrecto', 'danger');
        } 
    } else{
            creaMensaje('No hay usuarios registrados', 'danger');
        }
    }