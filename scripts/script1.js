document.getElementById("botonIngreso").addEventListener('click', () => { open("index.html") });

let inicio = document.querySelector('#form');

inicio.addEventListener('submit', function LocalStorage() {

    let contraseña = document.getElementById('password').value;
    localStorage.setItem('password', contraseña);

})

function ObtenerLocalStorage() {
    let passwordGuardado = localStorage.getItem('password');


}