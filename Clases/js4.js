
let lampara= {
    "encendida":true
};
console.log(lampara);
console.log(lampara.encendida);

let encendida2= true;
console.log("encendida2 "+ encendida2);

encendida2= false;
console.log("encendida2 "+ encendida2);

encendida2= 15;
console.log("encendida2 "+ encendida2);

lampara={
    "encendida":false
};
console.log(lampara);
console.log(lampara.encendida);

lampara.encendida= true;
console.log("encendida:" + lampara.encendida);