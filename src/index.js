import cipher from './cipher.js';
//DOM

encriptar.addEventListener("click", function E(mensaje, number){
  mensaje = document.getElementById('mensaje').value;
  number = document.getElementById('number').value;
  let msg = (function(str, num) {
  str = mensaje.toUpperCase();
  num = number % 26;
  let retro = 26 - num;
  let result;
  for (var i = 0; i < str.length; i++) {
  let asciiP = str[i].charCodeAt();
  if (asciiP >= 65 && asciiP <= 90){
      result += String.fromCharCode(asciiP + num);
    }else if (asciiP >= 78) {
      result += String.fromCharCode(asciiP - retro);
    }
  }



    return result;

})();

  document.getElementById("msg").innerHTML = msg;
 });

desencriptar.addEventListener("click", function D(){
  m = document.getElementById('mensaje').value;
  n = document.getElementById('number').value;
  let msgD =  (function(m, n) {
  let result = 'Hello';


    return result;

})();

   document.getElementById("msg").innerHTML = msgD;
  });

limpiar.addEventListener('click', (event) =>{
  event.preventDefault();
  location.reload();

});
