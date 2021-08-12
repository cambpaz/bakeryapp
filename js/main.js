//CONSTRUCTOR OBJETOS

function Bebida(nombre, precio, cafeina, calorias, cantidad = 0,img) {
this.nombre = nombre;
this.precio = precio;
this.cafeina = cafeina;
this.calorias = calorias;
this.cantidad = cantidad;
this.img = img;
this.cantCalorias = function () {alert("Esta bebida tiene un total de " + this.calorias + " calorías.")}
}

const cafeNegro = new Bebida("Cafe negro", 100, true, 10);
const capuchino = new Bebida("Capuchino", 110, true, 10);
const jugoDeNaranja = new Bebida("Jugo de Naranja", 70, false, 112);
const te = new Bebida("Té", 70, false, 5);
const cafeCortado = new Bebida("Cafe cortado", 100, true, 40);

function Comida(nombre, precio, calorias, cantidad = 0, img) {
this.nombre = nombre;
this.precio = precio;
this.calorias = calorias;
this.cantidad = cantidad;
this.img = img;
this.cantCalorias = function () {alert("Esta comida tiene un total de " + this.calorias + " calorías.")}
}

const medialunas = new Comida("Medialunas", 120, 280);
const brownie = new Comida("Brownie", 140, 250);
const tostado = new Comida("Tostado", 150, 300);
const lemonie = new Comida("Lemonie", 130, 240);
const medialunasJYQ = new Comida("Medialunas con jamón y queso", 120, 400);
let precioTotal = 0;

function elegirBebida (bebida, precio) {
	alert("Elegiste beber " + bebida + ".");
	var cantidad = parseInt((prompt("¿Cuantos" + " " + bebida + " " + "quieres ordenar? (sólo valores númericos)")));
	console.log(typeof(cantidad));
	if (cantidad < 100 && cantidad > 0) {
		precioTotal = cantidad * precio;
		alert("Usted ha ordenado " + cantidad + " " + bebida + ". Su total a abonar es $" + precioTotal  + ".");
	} else { 
		alert("Usted no ha ingresado una cantidad valida.")}
}

function elegirComida (comida, precio) {
	alert("Su eleccion para comer fue " + comida + ".");
	var cantidad = parseInt(prompt("¿Cuantos" + " " + comida + " " + "quieres ordenar? (sólo valores númericos)"))
	if (cantidad < 100 && cantidad > 0) {
		precioTotal = cantidad * precio;
		alert("Usted ha ordenado " + cantidad + " " + comida + ". Su total a abonar es $" + precioTotal  + ".");
	} else { 
		alert("Usted no ha ingresado una cantidad valida.")}
}

function calcularCuotas () {
	let cuotas = parseInt(prompt("En cuantas cuotas desea realizar su compra? Solo valores númericos."))
	if (cuotas < 18 && cuotas > 0) {
	alert("Su monto es de " + cuotas + " cuotas de $" + precioTotal / cuotas + ".");
	} else (alert("Usted no ha ingresado una cantidad valida. Por favor, vuelva a intentarlo."))
}

let recomendaciones = [];
function miArray() {
	do {
	let entrada = prompt("¡Ayudenos a mejorar! ¿Qué productos le gustaría que agregemos a nuestra carta?");
	recomendaciones.push(entrada.toUpperCase());
	var input = prompt("Desea recomendar otro producto? si / no");
	} while (input != "no")
	alert("Gracias por recomendarnos: "+ "\n" + recomendaciones.join("\n") +"\n"+ "Lo tendremos en cuenta!");
	console.log(recomendaciones);
}
function ordernarProductos() {
	let miArrayDeObjetos = [cafeNegro.nombre, cafeCortado.nombre, jugoDeNaranja.nombre, capuchino.nombre, te.nombre, brownie.nombre, medialunasJYQ.nombre, medialunas.nombre, lemonie.nombre, tostado.nombre];
	miArrayDeObjetos.sort((a, b) => a.localeCompare(b));
	console.log(miArrayDeObjetos);
	alert("Los productos ordenados alfabeticamente son: "+"\n"+ miArrayDeObjetos.join("\n"));
}


