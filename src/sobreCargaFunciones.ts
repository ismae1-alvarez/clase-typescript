function convertir(x: string):number;
function convertir(x:number): string;



function convertir(x: any): any {
    if (typeof x === "string") {
        return parseInt(x)
    } else if(typeof x === "number"){
        return x.toString();
    }
}


export {
    convertir
}