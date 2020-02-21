
const cipher = {
  encode: (string, offset) => {
    // mensaje recibido
    var respuesta = '';
    let asciiP = 0;
    let formula = 0;
    string.split('').forEach((ele) => {
      ele.toUpperCase();
      asciiP = ele.charCodeAt(0);
      formula = (asciiP - 65 + parseInt(offset)) % 26 + 65;
      formula > 90 ? formula = formula - 26 : formula;
      respuesta += String.fromCharCode(formula);
    });
    return respuesta;
  },

  decode: (string, offset) => {
    let respuestaD = '';
    let asciiPD = 0;
    let formulaD = 0;
    string.split('').forEach((ele) => {
      ele.toUpperCase();
      asciiPD = ele.charCodeAt(0);
      formulaD = ((asciiPD - 65) - (parseInt(offset) % 26)) + 65;
      formulaD < 65 ? formulaD = formulaD + 26 : formulaD;
      respuestaD += String.fromCharCode(formulaD);
    });
    return respuestaD;
  },
};

export default cipher;
