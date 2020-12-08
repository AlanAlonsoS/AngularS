

function saludar( nombre:string ) {
    console.table( 'Hola ' + nombre ); // Hola Logan
}


const wolverine = {
    nombre: 'Logan'
};


saludar( wolverine.nombre );

/////////////////////////////////////////////////////////////

var mensaje = 'hola';  

let mensaje1 = 'hola';

if ( true ) {
    let mensaje1 = 'mundo';
}

const mensaje2 = 'Hola mundo'

console.log(mensaje);

console.log(mensaje1);

console.log(mensaje2);


/////////////////////////////////////////////////////////////

let text: string = 'Hola';
let text2 = 'Hola';
let numero: number  = 123;
let numero2  = 123;
let booleano: boolean = true;
let booleano2 = true;
let hoy = new Date();
let hoy1: Date = new Date();


let cualquiercosa: string | number | Date | boolean;

cualquiercosa = text;
cualquiercosa = numero;
cualquiercosa = booleano;
cualquiercosa = hoy;

let cualquiercosa1;
cualquiercosa1 = text;
cualquiercosa1 = numero;
cualquiercosa1 = booleano;
cualquiercosa1 = hoy;


let spiderman = {
    nombre:'Peter',
    edad:30
}

spiderman = {
    nombre: 'Peter Parker',
    edad: 35
}




