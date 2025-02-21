// 5. Diseñar un módulo llamado calculadora, en este módulo debe exportar una clase
// con los siguientes métodos:
// a. Suma
// b. Resta
// c. Multiplicación
// d. División


// Al momento de realizar cada operación el sistema debe validar que no se presenten
// errores, si al momento de su ejecución se presenta algún error, el sistema debe
// enviar un mensaje personalizado indicando el tipo de error para que el usuario lo
// solucione y continue realizando los cálculos básicos de las matemáticas.

class calculadora {
    constructor(a,b){
        let a=a;
        letb=b;
    }
    suma(){
        if (typeof(a)!== "number"){
            throw new Error(" los dos deben ser numeros");
            
        }else{
            return a+b;

        }
    }
}