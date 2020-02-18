
const cipher = {
  encode: (string, offset) => {
    //mensaje recibido
    let respuesta = '';
    let asciiP = 0;
    let formula = 0;
    string.toUpperCase().split('').forEach((ele) => {
      asciiP = ele.charCodeAt(0);
      formula = (asciiP - 65 + parseInt(offset)) % 26 + 65;
      respuesta += String.fromCharCode(formula);
    });
    return respuesta;
  },

  decode: (string, offset) => {
    let respuestaD = '';
    let asciiPD = 0;
    let formulaD = 0;
    let spacioD= " ";
    string.toUpperCase().split('').forEach((ele) => {
      asciiPD = ele.charCodeAt(0);
      formulaD = (asciiPD - 65 + parseInt(offset)) % 26 + 65;
      respuestaD += String.fromCharCode(formulaD);
    });
    return respuestaD;
  },
};

export default cipher;
