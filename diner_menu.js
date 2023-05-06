// Build out a Diner Menu using JavaScript

//Tener el Menú Principal y un Menú de Acompañamiento 

const mainMenu = [
    {plato:'Ternera', precio: 30.90},
    {plato:'Salmón', precio: 25.80},
    {plato:'Pollo', precio: 15.30},
    {plato:'Hamburguesa', precio: 15.30}    
]

const sidesMenu = [
    {plato: 'Croquetas', precio : 10.34},
    {plato: 'Patatas', precio: 8.35},
    {plato: 'Ensalada', precio: 12.80},
    {plato: 'Espárragos', precio: 17.80}    
]


// mostrarles todo el menú (imprimir)

console.log('----RESTAURANTE BOTTEGA----');

console.log('----PRIMEROS PLATOS----');
mainMenu.forEach((element, orden) => {
    
    console.log(`${orden+1}- ${element.plato} - ${element.precio}€`);
});

console.log('----EXTRAS----');
sidesMenu.forEach((element, orden) => {
    console.log(`${orden+1}-${element.plato} - ${element.precio}€`);
});


//comentario aleatorio extraído de lista de comentarios
function generarComentario() {
    const comentarios = [
      "¡Muy buena elección!",
      "Es una de nuestras especialidades",
      "Es una elección muy popular",
      "Yo personalmente siempre lo recomiendo ",
    ];
    return comentarios[Math.round(Math.random() * comentarios.length)];
  }

  
//Un usuario elige un plato principal
const platoUno = prompt("Escriba el número del plato PRINCIPAL que desea (del 1 al 4):");

const platoUnoIndex = (parseInt(platoUno))-1;

const platoUnoElegido = mainMenu[platoUnoIndex].plato;
const platoUnoPrecio = mainMenu[platoUnoIndex].precio;

  
//"Camarera" hace un comentario basado en su selección
console.log(`Usted ha seleccionado: ${platoUnoElegido}.`);
console.log(generarComentario());

  
//Decir el precio del plato principal
console.log(`El precio del plato ${platoUnoElegido} es: ${platoUnoPrecio}€`);

//El usuario elige 2 opciones de acompañamiento 
const platoExtras = prompt("Escriba los números de sus dos opciones EXTRAS (del 1 al 4), los números deben ir separados por comas:");

const extraUno = (parseInt(platoExtras[0]))-1;
const extraDos = (parseInt(platoExtras[2]))-1;

const extraUnoElegido = sidesMenu[extraUno].plato;
const extraUnoPrecio = sidesMenu[extraUno].precio;
const extraDosElegido = sidesMenu[extraDos].plato;
const extraDosPrecio = sidesMenu[extraDos].precio;


//"Camarera" hace un comentario basado en su selección
console.log(`Usted ha seleccionado los EXTRAS: ${extraUnoElegido} y ${extraDosElegido}`);
console.log(generarComentario());

 
//Decir el precio de los 2 acompañamientos
console.log(`Como EXTRA 1 usted ha elegido ${extraUnoElegido} y su precio es ${extraUnoPrecio}€\n
Como EXTRA 2 usted ha elegido ${extraDosElegido} y su precio es ${extraDosPrecio}€`);

//Sumar y decir el precio total de la comanda
const precioTotal = platoUnoPrecio + extraUnoPrecio + extraDosPrecio;

console.log(`Su pedido completo consta de: ${platoUnoElegido}, acompañado de ${extraUnoElegido} y ${extraDosElegido}.\n
El precio total de su pedido es ${precioTotal}€`);
