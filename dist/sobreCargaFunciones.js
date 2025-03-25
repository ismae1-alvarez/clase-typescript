"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertir = convertir;
function convertir(x) {
    if (typeof x === "string") {
        return parseInt(x);
    }
    else if (typeof x === "number") {
        return x.toString();
    }
}
