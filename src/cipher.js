
const cipher = {
  encode: (string, offset) => {
    var respuesta = '';
    let asciiP = 0;
    let formula = 0;
    string.split('').forEach((ele) => {
      ele.toUpperCase();
      asciiP = ele.charCodeAt(0);
      if (asciiP >= 65 && asciiP <= 90) {
        formula = (asciiP - 65 + parseInt(offset)) % 26 + 65;
      } else if (asciiP === 32) {
        formula = (asciiP - 65) + 65;
      } else if (asciiP > 90) {
        formula = formula - 26;
      }
      // minusculas
      if (asciiP >= 97 && asciiP <= 122) {
        formula = (asciiP - 97 + parseInt(offset)) % 26 + 97;
      } else if (asciiP === 32) {
        formula = (asciiP - 97) + 97;
      } else if (asciiP > 122) {
        formula = formula - 26;
      }
      respuesta += String.fromCharCode(formula);
    });
    return respuesta;
  },

  decode: (string, offset) => {
    let respuestaD = '';
    let asciiPD = 0;
    let formulaD = 0;
    string.split('').forEach((ele) => {
      asciiPD = ele.charCodeAt(0);
      if (asciiPD >= 65 && asciiPD <= 90) {
        formulaD = ((asciiPD - 65) - (parseInt(offset) % 26)) + 65;
        if (formulaD < 65) {
          formulaD = formulaD + 26;
        } else if (asciiPD === 32) {
          formulaD = (asciiPD - 65) + 65;
        }
      } else {
        // minusculas
        if (asciiPD >= 97 && asciiPD <= 122) {
          formulaD = ((asciiPD - 97) - (parseInt(offset) % 26)) + 97;
        }
        if (formulaD < 97 && formulaD > 90) {
          formulaD = formulaD + 26;
        } else if (asciiPD === 32) {
          formulaD = (asciiPD - 97) + 97;
        }
      }
      respuestaD += String.fromCharCode(formulaD);
    });
    return respuestaD;
  },
};
export default cipher;
