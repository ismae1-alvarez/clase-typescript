interface citaCalendario  {
    fechaHora: Date; 
    titulo: string; 
    lugar: string;
};


const cita1: citaCalendario = {
    fechaHora: new Date(),
    titulo: "Mexico",
    lugar: "Monterrey"
};


export {
    cita1
}