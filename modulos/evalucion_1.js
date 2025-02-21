



const tarjetas= (tipo, numero) =>{
    const american_express = /^3[4-7][0-9]{13}$/;
    const diners = /^30[0-5][0-9]{11}$ || ^3[6-8][0-9]{12}$/;
    const discover = /^6011[0-9]{12}$/;
    const mastercard = /^5[1-5][0-9]{14}$/;
    const visa= /^4[0-9]{15}$/;
    switch (tipo) {
      case 1:
        if (american_express.test(numero)) {
          alert("tu tarjeta american express se valido exitosamente");
        } else {
          alert("tarjeta no es valida");
        }
        break;
      case 2:
        if (diners.test(numero)) {
        alert("tu tarjeta Diners se valido exitosamente");
        } else {
          alert("tarjeta no es valida");
        }
      case 3:
        if (discover.test(numero)) {
          alert("tu tarjeta Discover se valido exitosamente");
        } else {
          alert("tarjeta no es valida");
        }
        break;
      case 4:
        if (mastercard.test(numero)) {
          alert("tu tarjeta Mastercard se valido exitosamente");
        } else {
          alert("tarjeta no es valida");
        }
        break;
      case 5:
        if (visa.test(numero)) {
          alert("tu tarjeta Visa se valido exitosamente");
        } else {
          alert("tarjeta no es valida");
        }
        break;
      default:
        alert("error de autenticacion de tarjeta");
        break;
  
    }
  }


export {tarjetas};

