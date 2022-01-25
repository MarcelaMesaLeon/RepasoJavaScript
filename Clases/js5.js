/*
let lampara= {
    "encendida":false
};
console.log(lampara);
console.log("encendida:" + lampara.encendida);

if(lampara.encendida === true){
    console.log("Lampara encendida");
}else{
    let respuesta = prompt("Quieres encender la lampara? (si/no)");
    if(respuesta==="si"){
        lampara.encendida =true;
    }

}
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
console.log(lampara);
console.log("encendida:" + lampara.encendida);
*/

let paciente= {
    "nombre":"Samuel",
    "edad":9,
    "diagnostico":"PC",
    "sesionesMes":8,
    "sesionesALaFecha":"5"
};
console.log(paciente);

if(paciente.sesionesALaFecha==5){
    console.log("Siiiiiiiiiiiiii");
}
paciente.sesionesALaFecha=4;
if(paciente.sesionesALaFecha>10){
    console.log("Mayor a 10");
}

let paciente2= {
    "nombre":"Chucha",
    "edad":7,
    "diagnostico":"SindromeDeDown",
    "sesionesMes":12,
    "sesionesALaFecha":3
}

//console.log(paciente2.nombre + " tiene mas sesiones que "+paciente.nombre)

if(paciente2.sesionesALaFecha > paciente.sesionesALaFecha){
    console.log(paciente2.nombre+" tiene mas sesiones que "+paciente.nombre);
} else if(paciente.sesionesALaFecha > paciente2.sesionesALaFecha){
    console.log(paciente.nombre+" tiene mas sesiones que "+paciente2.nombre);
} else {
    console.log(paciente.nombre+" tiene las mismas sesiones que "+paciente2.nombre);
}

const pacientes = [paciente2, paciente];










