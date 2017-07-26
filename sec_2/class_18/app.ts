

interface Xmen {
    nombre:string,
    poder:string
}

//function enviarMission(xmen: any ){
function enviarMission(xmen: Xmen ){
    console.log(`Enviando a: ${xmen.nombre}`);
}

function enviarCuartel(xmen:Xmen ){
    console.log(`Enviando a cuartel: ${xmen.nombre}`);
}

let wolverine :Xmen= {
    nombre:"Wolverine",
    poder:"Regeneration"
}
enviarMission( wolverine );
enviarCuartel(wolverine);
