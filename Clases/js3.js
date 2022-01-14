/* Escribir un programa que almacene la cadena ¡Hola Mundo! en una variable y luego muestre por pantalla el contenido de la variable.
let saludo= "Hola Mundo";
document.write(saludo); */ 


/* Escribir un programa que pregunte el nombre del usuario en la consola y después de que el usuario lo introduzca muestre por pantalla la cadena ¡Hola <nombre>!, donde <nombre> es el nombre que el usuario haya introducido.
let nombre= prompt("Cual es tu nombre?");
document.write("Hola "+ nombre); */


/* Escribir un programa que muestre por pantalla el resultado de la siguiente operación aritmética 
let resultado= ((3 + 2)/(2*5))**2;
console.log(resultado); */


/* Escribir un programa que pregunte al usuario por el número de horas trabajadas y el coste por hora. Después debe mostrar por pantalla la paga que le corresponde.
let horas= prompt("Cuantas horas trabajas?");
let valor= prompt("Cuanto cuesta la hora trabajada?");
let dia= horas*valor;
console.log(dia); */


/* Escribir un programa que pida al usuario su peso (en kg) y estatura (en metros), calcule el índice de masa corporal y lo almacene en una variable, y muestre por pantalla la frase Tu índice de masa corporal es <imc> donde <imc> es el índice de masa corporal calculado redondeado con dos decimales.
let peso= prompt("Cual es tu peso (Kg)?");
let estatura= prompt("Cual es tu estatura (m)?");
let imc= ((peso/(estatura**2)));
document.write("Tu IMC es "+ imc); */


/* Una juguetería tiene mucho éxito en dos de sus productos: payasos y muñecas. Suele hacer venta por correo y la empresa de logística les cobra por peso de cada paquete así que deben calcular el peso de los payasos y muñecas que saldrán en cada paquete a demanda. Cada payaso pesa 112 g y cada muñeca 75 g. Escribir un programa que lea el número de payasos y muñecas vendidos en el último pedido y calcule el peso total del paquete que será enviado.
const payaso= 112;
const muñeca= 75;
let cantidadPayaso= prompt("Cuantos payasos se van a enviar?");
let cantidadMuñeca= prompt("Cuantas muñecas se van a enviar?");
let pesoEnvio= (payaso*cantidadPayaso) + (muñeca*cantidadMuñeca);
document.write("El peso total del paquete es "+ pesoEnvio); */


/* Imagina que acabas de abrir una nueva cuenta de ahorros que te ofrece el 4% de interés al año. Estos ahorros debido a intereses, que no se cobran hasta finales de año, se te añaden al balance final de tu cuenta de ahorros. Escribir un programa que comience leyendo la cantidad de dinero depositada en la cuenta de ahorros, introducida por el usuario. Después el programa debe calcular y mostrar por pantalla la cantidad de ahorros tras el primer, segundo y tercer años. Redondear cada cantidad a dos decimales.
let valorInicial= parseFloat(prompt("Con cuanto dinero vas a inciar tu ahorro?"));
let interes= valorInicial*0.04;
let interesAño= valorInicial+interes;
console.log("Tu valor ahorrado al año seria "+interesAño);

let valorInicial2 = interesAño;
let interes2= valorInicial2*0.04;
let interesAño2= valorInicial2+interes2;
console.log("Tu valor ahorrado al segundo año seria "+interesAño2);

let valorInicial3= interesAño2;
let interes3= valorInicial3*0.04;
let interesAño3= valorInicial3+interes3;
console.log("Tu valor ahorrado al tercer año seria "+interesAño3); */