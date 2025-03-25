"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrayTuplas_1 = require("./arrayTuplas");
const funciones_1 = require("./funciones");
const objetoInterface_1 = require("./objetoInterface");
const sobreCargaFunciones_1 = require("./sobreCargaFunciones");
const tiposBasicos_1 = require("./tiposBasicos");
const typeEnums_1 = require("./typeEnums");
console.log(tiposBasicos_1.nombre, tiposBasicos_1.apellido);
console.log(tiposBasicos_1.numero1, tiposBasicos_1.numero2);
console.log(tiposBasicos_1.verdadero, tiposBasicos_1.falso);
console.log(tiposBasicos_1.sinValor);
console.log(tiposBasicos_1.nulls);
console.log(arrayTuplas_1.users, arrayTuplas_1.usersAge, arrayTuplas_1.result);
console.log(objetoInterface_1.cita1);
console.log(typeEnums_1.currenDirection, typeEnums_1.typeCita, typeEnums_1.superUser);
console.log((0, funciones_1.funcion1)(), (0, funciones_1.funcion2)(), (0, funciones_1.funcion3)(), (0, funciones_1.funcion4)(21, 33), (0, funciones_1.funcion5)(21, "Jairo"), (0, funciones_1.funcion6)(21), (0, funciones_1.funcion6)(34, "Jairo"));
console.log((0, sobreCargaFunciones_1.convertir)("123"));
console.log((0, sobreCargaFunciones_1.convertir)(123));
console.log((0, funciones_1.funcion7)([
    {
        nombre: "Juan",
        comida: "comida",
        ciudad: "CDMX"
    },
    {
        ciudad: "colombia",
        comida: "Comida",
        nombre: "Jairo"
    }
]));
