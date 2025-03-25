import { result, users, usersAge } from "./arrayTuplas";
import { funcion1, funcion2, funcion3, funcion4, funcion5, funcion6, funcion7 } from "./funciones";
import { cita1 } from "./objetoInterface";
import { convertir } from "./sobreCargaFunciones";
import { apellido, falso, nombre, nulls, numero1, numero2, sinValor, verdadero } from "./tiposBasicos";
import { currenDirection, superUser, typeCita } from "./typeEnums";

console.log(nombre, apellido);

console.log(numero1, numero2);

console.log(verdadero, falso);

console.log(sinValor)

console.log(nulls)

console.log( users, usersAge, result)

console.log(cita1)

console.log( currenDirection, typeCita, superUser)

console.log(funcion1(), funcion2(), funcion3(), funcion4(21, 33), funcion5(21, "Jairo"), funcion6(21), funcion6(34, "Jairo"))


console.log(convertir("123"));
console.log(convertir(123));



console.log(funcion7([
    {
    nombre: "Juan",
    comida: "comida",
    ciudad: "CDMX"
},
{
    ciudad: "colombia", 
    comida: "Comida", 
    nombre:"Jairo"
}

]))