"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.superUser = exports.typeCita = exports.currenDirection = void 0;
var PuntosCardinales;
(function (PuntosCardinales) {
    PuntosCardinales["Norte"] = "Norte";
    PuntosCardinales["Este"] = "Este";
    PuntosCardinales["Sur"] = "Sur";
    PuntosCardinales["Oeste"] = "Oeste";
})(PuntosCardinales || (PuntosCardinales = {}));
;
const currenDirection = PuntosCardinales.Este;
exports.currenDirection = currenDirection;
;
const typeCita = {
    fechaHora: new Date(),
    lugar: "Colombia",
    titulo: "Comer",
};
exports.typeCita = typeCita;
const superUser = {
    fechaHora: new Date(),
    lugar: "Colombia",
    titulo: "Comer",
    nombre: "Jairo",
    password: "123456",
    rol: "Admint"
};
exports.superUser = superUser;
