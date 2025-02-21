// 3. Diseñar un programa que me solicite por teclado n cantidad de números, al finalizar
// la carga de los números el programa debe enviar los números a una función
// expresada como único parámetro rest donde serán ordenados de mayor a menor
// para luego mostrarlos en una tabla por consola.

import { GuardarNum, ordenarArreglo } from "../modulos/evalucion_1.js";

let n = parseInt(prompt("Ingresa la cantidad de números que deseas registrar: "));
ordenarArreglo(GuardarNum(n));

