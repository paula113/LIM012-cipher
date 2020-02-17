import cipher from './cipher.js';
//DOM

encriptar.addEventListener("click", function E(mensaje, number){
  mensaje = document.getElementById('mensaje').value;
  number = document.getElementById('number').value;
  let msg = (function(str, num) {
    let result = "";
    str = mensaje.toUpperCase();
    num = number;
    for (var i = 0; i < str.length; i++) {
      let asciiP = str[i].charCodeAt();
        let alphaTotal = asciiP - 65 + num;
        let r = alphaTotal % 26;
        result += String.fromCharCode( r + 65);
    }

  return result;

})();

  document.getElementById("msg").innerHTML = msg;
 });

desencriptar.addEventListener("click", function D(m, n){
  m = document.getElementById('mensaje').value;
  n = document.getElementById('number').value;
  let msgD =  (function(msg, numD) {
    msg = m;
    numD = n;
    let solved = '';
    for (var i = 0; i < m.length; i++) {
     let reverse = msg[i].charCodeAt();
    }
    return solved;

})();

   document.getElementById("msg").innerHTML = msgD;
  });

limpiar.addEventListener('click', (event) =>{
  event.preventDefault();
  location.reload();

});
