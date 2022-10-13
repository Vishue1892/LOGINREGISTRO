//Declarar varibles de referencia a objetos
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const user = document.getElementById('user');
const pass = document.getElementById('pass');
const formlario = document.getElementById('formRegistro');

formlario.addEventListener('submit', registro);
function registro(e){
    e.preventDefault();
    
    let nombreVal = nombre.value;
    let emailVal = email.value;
    let userVal = user.value;
    let passValue = pass.value;

    if(nombreVal == '' || emailVal == '' || userVal == '' || passValue == ''){
        return;
    }

    console.log('validando datos');

}