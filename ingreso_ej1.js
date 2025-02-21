
let tipo = parseInt(prompt("eligue el tipo de tarjeta que manejas \n1) AMERICAN EXPRESS \n2) DINERS CLUB\n3) DISCOVER\n4) MASTERCARD\n5) VISA"));
console.log(typeof (tipo));

import { tarjetas } from "./modulos/evalucion_1";

if (typeof (tipo) == "number" && tipo>1 && tipo<=5) {
  let numero = BigInt(prompt("ingresa el numero de tu tarjeta: "))
  tarjetas(tipo, numero);
} else {
  alert("ingrese un tipo de tarjeta valida");
}
