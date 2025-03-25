enum PuntosCardinales {
    Norte= "Norte",
    Este= "Este",
    Sur="Sur", 
    Oeste = "Oeste"
};


const currenDirection = PuntosCardinales.Este;

interface citaCalendario {
    fechaHora: Date; 
    titulo: string; 
    lugar: string;
};

interface citaCalendario2 extends citaCalendario {
    nombre: string,
    password: string,
    rol: string
}


const typeCita: citaCalendario = {
    fechaHora: new Date(),
    lugar: "Colombia", 
    titulo: "Comer",
}

const superUser : citaCalendario2 ={
    fechaHora: new Date(),
    lugar: "Colombia", 
    titulo: "Comer",
    nombre:"Jairo",
    password: "123456",
    rol: "Admint"
}


export {
    currenDirection, 
    typeCita, 
    superUser
}
