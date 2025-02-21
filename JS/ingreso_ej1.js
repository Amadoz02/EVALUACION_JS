
import { tarjetas } from "../modulos/evalucion_1.js";//importamos la funcion tarjetas dede la ruta
let tipo = parseInt(prompt("eligue el tipo de tarjeta que manejas \n1) AMERICAN EXPRESS \n2) DINERS CLUB\n3) DISCOVER\n4) MASTERCARD\n5) VISA")); //pedimos el tipo de tarjeta a validar
console.log(typeof (tipo));//imprimo en consola el tipo de dato para la seguridad


if (typeof (tipo) == "number" && tipo>=1 && tipo<=5) {// si el tipo de dato es numero y va de 1 a 5 entonces
  let numero = BigInt(prompt("ingresa el numero de tu tarjeta: "))//pedimos el numero de tarjeta
  tarjetas(tipo, numero);//llamamos la funcion y le asignamos los argumentos
} else {
  alert("ingrese un tipo de tarjeta valida");//si el if retorna false muestra la alerta
}
