


//EJERCICIO 1
const tarjetas= (tipo, numero) =>{//funcion expresada para saber el tipo de darjeta que recibe 2 parametros
    const american_express = /^3[4-7][0-9]{13}$/; //exprecion regular que nos dice: empieza por 34,35,36,37 y teiene 25 numeros
    const diners = /^30[0-5][0-9]{11}$ || ^3[6-8][0-9]{12}$/;//empieza por 300-3005 y tiene 14 numeros o empieza por 36-38 y tiene en total 14 numeros
    const discover = /^6011[0-9]{12}$/;//inicia con 6011 y tiene en total 16 numeros
    const mastercard = /^5[1-5][0-9]{14}$/;//empieza por 51-55 y tiene en total 16 numeros
    const visa= /^4[0-9]{15}$/;//empieza por 4 y tiene 15 numeros en total
    switch (tipo) {//sentencia de control con la llave asignada tipo
      case 1://en caso de que tipo sea igual a 1:
        if (american_express.test(numero)) {//testeamos que numero tenga las caracteristicas que contiene la exprecion regular american_express
          alert("tu tarjeta american express se valido exitosamente");//si se valida como correcto este devuelve true y por ellos se salta la alerta que nos dice validado exitosamente 
        } else {//7si la validacion retorna false imprimimos que nio es valida 
          alert("tarjeta no es valida");
        }
        break;//se encarga de romper la cadena ya que ha cumplido con su funcion

//---------------- se repiten las sentencias testeando las direntes tarjetas-----------------------------


      case 2:
        if (diners.test(numero)) {//testeamos
        alert("tu tarjeta Diners se valido exitosamente");
        } else {
          alert("tarjeta no es valida");
        }
      case 3:
        if (discover.test(numero)) {//testeamos
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
      default://por defecto se tiene un opcion la cual se ejecuta en caso de que ningun caso se cumpla
        alert("error de autenticacion en el tipo tarjeta");//ventana que alerta error en el tipo de tarjeta
        break;//rompe el cliclo y se termina el codig
  
    }
}

//  EJERCICIO2
const numeros = (n) => {//funcion expresada llamada numeros que recibe un parametro n 
  let primos = 0, pares = 0, suma = 0, ppri, ppar, cpares = 0, cprimos = 0, csuma = 0, sumaprimos = 0, sumapares = 0;//declaro e inicializo las variables a usarcomo contadores, sumas, etc.

  let num = [];//declaro el array num
  for (let i = 0; i < n; i++) {//ciclo que nos va a ayudar a recorrer el arreglo e ir insertando la cantidad de numeros que se requieren
      num[i] = parseInt(prompt("ingresa un numero: "));//pedimos y guardamos el numero ingresado
  }
  let v = true;//ayuda para controlar el bucle while y terminarlo cuando se requiera
  while (v) {

      let opcion = prompt("-------INGRESA LA OPCION QUE DESEAS REALIZAR---------\n a. Sumar los números\n" +
          "b. Contar los números primos \n" +
          "c. Contar los números pares \n" +
          "d. Calcular el promedio de los números primos\n" +
          "e. Calcular el promedio de números pares   \n" +
          "-- cualquier letra difrente para salir");// menu que nos pide una opcion con los numeros que ya se ingresaron

      switch (opcion) {//estructura de control para manejar la opciones

          case "a"://si el usuario ingresa " a " se ejecutara: 
              if (csuma == 0) {//si contador de suma es cero 
                  for (let i = 0; i < num.length; i++) {//un por recorre el arreglo y va sumando sus datos en una variable suma
                      suma += num[i];//suma se incrementa de acuerdo al contenido de la pocicion del array num
                  }
                  alert("La suma de los números es: " + suma);// despues de haber rrecorrido el array muestra la suma
              } else {//si el contador no era cero quiere decir que ya el usuario habia pedido la suma por lo tanto ya estaba la respuesta y solo la imprimimos
                  alert("Ya los sumaste y su resultado es: " + suma);
              }
              csuma += 1;//con este contador manejamos las veces que el usuario nos pida el resultado de la suma para no repetir el proceso ya que el resultado queda guardado
              break;//terminamos el proceso

          case "b":
              if (cprimos == 0) {
                  for (let i = 0; i < num.length; i++) {
                      let esPrimo = true;//definimos variable q nos dira si era primo el numero
                      if (num[i] <= 1) esPrimo = false;//si el numero es menor o igual a 1, no es primo inmediatamente
                      for (let j = 2; j <= Math.sqrt(num[i]); j++) {//repetir la divicion de los numeros, se inicia en 2 ya que 1 no vale, 
                      // y vamos hasta la raiz del numero para ahorrar memoria, luego la multiplicamos por 2.
                          if (num[i] % j === 0) {
                              esPrimo = false;
                              break;
                          }
                      }
                      if (esPrimo) {//si el for devolvio verdador, se suma un primo
                          sumaprimos += num[i];//sumamos los primos por si luego nos piden el promedio
                          primos++;
                      }//caso contrario se termina
                  }
                  alert("Los números primos contados son: " + primos);
              } else {
                  alert("Ya contaste los números primos: " + primos);//si ya los habia contado antes
              }
              cprimos += 1;//con este contador manejamos las veces que el usuario nos pida el resultado de primos para no repetir el proceso ya que el resultado queda guardado
              break;

          case "c":
              if (cpares == 0) {
                  for (let i = 0; i < num.length; i++) {//recorre el arreglo
                      if (num[i] % 2 === 0) {// si el reciduo de dividir el numero de la pocicion i es 0 entonces es par
                          pares++;
                          sumapares += num[i];//sumamos los pares por si luego nos piden el promedio
                      }
                  }
                  alert("Los números pares contados son: " + pares);
              } else {
                  alert("Ya contaste los números pares: " + pares);
              }
              cpares += 1;
              break;

          case "d":
              if (cprimos > 0) {//si ya habias pedido entes la cantidad de primos ya esta su suma por lo tanto solo es dividirlos en su cantidad
                  ppri = sumaprimos / primos;
                  alert("El promedio de los números primos es: " + ppri);
              } else {
                  alert("Aún no has contado los números primos.");
              }
              break;

          case "e":
              if (cpares > 0) {
                  ppar = sumapares / pares;
                  alert("El promedio de los números pares es: " + ppar);
              } else {
                  alert("Aún no has contado los números pares.");
              }
              break;

          default:
              alert("FELIZ DIA USUARIO");
              v = false;//para que el while no se repite
              break;//termina el switch

      }
  }
}

// EJERCICIO 3

const GuardarNum=(n)=>{
  let num = [];//declaro el array num
  for (let i = 0; i < n; i++) {//ciclo que nos va a ayudar a recorrer el arreglo e ir insertando la cantidad de numeros que se requieren

      num[i] = parseInt(prompt("ingresa un numero: "));//pedimos y guardamos el numero ingresado
  }
  return num; //retornamos el arreglo de numeros para ser uado en el js principal o donde lo importemos
}

//const ordenarArreglo= (...numeros)=>{ se puede utilizar un parametro .rest pero en este caso no se ve necesario
//ya que con la funcion anterior convertimos los numeros en arreglo, por ente nos ahorramos los multiples promps y variables para guardar y enviar aun rest, 
//ademas no podemos enviar un arreglo a un rest ya qe genera una matriz, la cual dificulta
const ordenarArreglo= (numeros)=>{//funcion que nos recibe un parametro en nuesro caso sera un array 
  
  for (let i = 0; i < numeros.length; i++) {//ciclio que nos ayudara a recorrer cada numero 
    for (let j = i + 1; j < numeros.length; j++) {//nus ayuda a comparar cada numero con todos sus demas compañeros. un todos con todos
      if (numeros[i] > numeros[j]) {//si el numero del indice i es mayor que su siguente numero osea indice j=i+1 entonces:
        let temporal = numeros[i];//creamos variable temporalque almacena al numero mayor
        numeros[i] = numeros[j];//asignamos a su siguente indice el numero mayor y cambiamos de puestos
        numeros[j] = temporal;//cambiamos el orden gracias a la variable temporal que mantiene un dato copiado mientras reescribimos suu poscicion 
        //y hacemos lo mismo con el que esta por fuera.
      }
    }
  }
  // for (let i=0; i<numeros.length; i++){
  //   console.log("~~~~~~~"+ numeros[i] +"~~~~~~~~")
  // }
  console.table(numeros); // gracias a la instruccion se encuantra esta manera de imprimir datos el cual en una tabla imprime el arrglo, sus datos con sus respectivos indices.
}



//EXPORTADOS
export {tarjetas, numeros, GuardarNum, ordenarArreglo};//exportamos funciones

