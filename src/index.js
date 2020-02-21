import cipher from './cipher.js';
// DOM
const encriptar = document.getElementById('encriptar');
encriptar.addEventListener('click', (mensaje, number) => {
  mensaje = document.getElementById('mensaje').value;
  number = document.getElementById('number').value;

  //  let msg = (function(str, num)
  document.getElementById('msg').innerHTML = cipher.encode(mensaje, number);
});


const desencriptar = document.getElementById('desencriptar');
desencriptar.addEventListener('click', (msg, num) =>{
  msg = document.getElementById('mensaje').value;
  num = document.getElementById('number').value;
  document.getElementById('msg').innerHTML = cipher.decode(msg, num);
});

const limpiar = document.getElementById('limpiar');
limpiar.addEventListener('click', () => {
  event.preventDefault();
  location.reload();
});
