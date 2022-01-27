/*let edadUsuario= prompt("Cual es tu edad?");
if(edadUsuario > 18){
    document.write("Eres mayor de edad")
};*/

/*let contrasena= "contrasena";
let respuestausuario= prompt("Cual es tu contrasena?");
if(respuestausuario===contrasena){
    document.write("Tu contrasena coincide")
} else {
    document.write("Tu contrasena no coincide")
};*/

/*const numerosUsuario1= prompt("Escribe un numero");
const numerosUsuario2= prompt("Ahora otro");
let resultado= (numerosUsuario1/numerosUsuario2);
document.write("El resultado es " + resultado);
if(numerosUsuario2==0){
    alert("Error Ups!")
};*/

/*let numeroUsuario= prompt("Escribe un numero");
if(numeroUsuario%2==0){
    document.write("El numero que escribiste es par")
} else {
    document.write("El numero que escribiste es impar")
};*/

/*let edadUsuario= prompt("cual es tu edad?");
let ingresosusuario= prompt("Cuales son tus ingresos mensuales?");
if(edadUsuario >= 18, ingresosusuario >= 1000000){
    alert("Usted puede tributar")
};*/


/*
let nombreAlumno= prompt("Cual es tu nombre?");
let primeraLetra= nombreAlumno.charAt(0);
let sexo= prompt("Si tu sexo es Masculino coloca M y si es femenino F");
if(sexo===F, primeraLetra < m){
    alert("Te corresponde el grupo A")
} else if (sexo===M, primeraLetra > n){
    alert("Te corresponde el grupo A")
} else if(sexo===F, primeraLetra > m){
    alert("Te corresponde el grupo B")
} else if(sexo===M, primeraLetra < n){
    alert("Te corresponde el grupo B")
};
*/

let response ="ok";
let nombreAlumno;
let primeraLetra;
let sexo;
while (response === "ok"){
    nombreAlumno= prompt("Cual es tu nombre?");
    primeraLetra= nombreAlumno.charAt(0);
    sexo= prompt("Si tu sexo es Masculino coloca M y si es femenino F");
    if(sexo==="F"){
        if(primeraLetra < "m"){
            alert("Perteneces al grupo A");
        } else { 
            alert("Perteneces al grupo B");
        }
    }
    
    if(sexo==="M"){
        if(primeraLetra > "n"){
            alert("Perteneces al grupo A");
        } else { 
            alert("Perteneces al grupo B");
        }
    }
    response= prompt("Repetir");
}


/*
let response ="ok";
while (response === "ok"){
    //TODO
     response= prompt("Repetir");
}
*/

