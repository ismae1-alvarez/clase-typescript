
const funcion1 = () =>{
    return 32 + 21
};

const funcion2= ():number =>{
    return 32 + 21
};

const funcion3 = (): string =>{
    return `Hola`
};


const funcion4 = (a:number, b: number):number =>{
    return a * b
}

const funcion5 =  (edad: number, nombre: string ) :string => {
    return `nombre: ${nombre} edad: ${edad}`;
}

const funcion6 = (edad?: number, nombre?:string) :string =>{
    return `${nombre ? nombre : "Juan"} tiene ${ edad }`;
}




interface cita {
    nombre: string;
    comida: string;
    ciudad: string;
}

const funcion7 = (data:cita[]):string[] =>{
    return data.map((d) => d.nombre)   
}


export {
    funcion1, 
    funcion2, 
    funcion3, 
    funcion4, 
    funcion5, 
    funcion6,
    funcion7
}


