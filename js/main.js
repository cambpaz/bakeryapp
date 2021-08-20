//CONSTRUCTOR OBJETOS
//molde bebidas
function Bebida(id, nombre, precio, calorias, img) {
this.id = parseInt(id);
this.modalId = "modal" + this.id;
this.nombre = nombre;
this.precio = parseFloat(precio);
this.calorias = calorias;
this.img = img;
this.cantidad = 0;
this.cantCalorias = function () {alert("Esta bebida tiene un total de " + this.calorias + " calorías.")}
}
//creo los objetos mediante un array de objetos vacio
const bebidas = [];
bebidas.push(new Bebida(1, "Cafe negro", 100, 10));
bebidas.push(new Bebida(2, "Capuchino", 110, 10));
bebidas.push(new Bebida(3, "Jugo de naranja", 70, 10));
bebidas.push(new Bebida(4, "Te", 70, 10));
bebidas.push(new Bebida(5, "Cafe Cortado", 110, 10));

console.log(bebidas);
//molde comidas
function Comida(id, nombre, precio, calorias, img) {
this.id = parseInt(id);
this.nombre = nombre;
this.precio = parseFloat(precio);
this.calorias = calorias;
this.img = img;
this.cantCalorias = function () {alert("Esta comida tiene un total de " + this.calorias + " calorías.")}
}
//creo las comidas
const comidas = [];
comidas.push(new Comida(6, "Medialunas", 120, 280));
comidas.push(new Comida(7, "Brownie", 140, 250))
comidas.push(new Comida(8, "Tostado", 150, 300));
comidas.push(new Comida(9,"Lemonie", 130, 240));
comidas.push(new Comida(10, "Medialunas con jamón y queso", 120, 400));
//accedo al container de las bebidas
let container = document.getElementById("container-bebidas")

//utilizo un bucle for of para crear las card en el document HTML
for (const bebida of bebidas) {
	let div = document.createElement("div");
	div.innerHTML = `<div data-aos="flip-left" class="card card-paso1">
	<img src="assets/img/${bebida.id}.jpg" class="card-img-top" alt="...">
	<div class="card-body">
		<h5 class="card-title">${bebida.nombre}</h5>
		<p class="precioBebida">$${bebida.precio}</p>
		<button type="button" id="${bebida.id}" class="btn estilo-boton btnSeleccionarBebida" data-toggle="modal" data-target="#${bebida.modalId}">SELECCIONAR</button> <br>
	</div>
	</div>`
	container.appendChild(div)
}
//accedo al container de los modal
let containerModal = document.getElementById("container-modal")
//CREO LOS MODAL UNO POR UNO
for (const bebida of bebidas) {
  let divPopUp = document.createElement("div");
  divPopUp.innerHTML = 
  `<div class="modal fade" id="${bebida.modalId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content modal-lg">
        <div style="background-image: linear-gradient(rgba(241, 234, 224, 0.614),rgba(241, 234, 224, 0.614)), url(../assets/img/${bebida.id}.jpg);" class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${bebida.nombre}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
				<form action="">
					<p>Elija la cantidad de unidades que quiere ordenar</p>
			  		<input type="number" class="btnCantidad" id="cantidad${bebida.id}">
				</form>
			</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button value="submit" type="button" data-dismiss="modal" id="agregarCarrito${bebida.id}" class="btn btn-primary btnCarrito">Agregar al carrito</button>
        </div>
      </div>
    </div>
  </div>` 
  containerModal.appendChild(divPopUp);
}
// creO un array vacio QUE SERAN LAS BEBIDAS SELECCIONADAS
let carrito = [];

//creo la funcion que luego utilizare en el evento
function seleccionar() {
  //busco el ID del producto
  let bebida = bebidas.find(bebida => bebida.id == this.id);    
  carrito.push(bebida);
}
//creo una variable con el boton para que se acceda al pop up correspondiente
let btnSeleccionarBebida = document.getElementsByClassName("btnSeleccionarBebida");
//recorro los botones para que el click se asocie a la bebida que esta siendo seleccionada
for (const boton of btnSeleccionarBebida) {
  boton.addEventListener("click", seleccionar);
}
//HASTA ACA TODO BIEN FUNCIONA TODO DIVINO NO TOCAR NADA!!!!


function agregarAlCarrito() {
    let bebidaSeleccionada = bebidas.find(bebida => bebida.id == this.id);
    let cantidad = getElementById
  }

let btnAgregarAlCarrito = document.getElementsByClassName("btnCantidad");

//EVENTO DE AGREGAR AL CARRITO
for (const boton of btnAgregarAlCarrito) {
  // btnAgregarAlCarrito.addEventListener("click", agregarAlCarrito);
}


let containerComida = document.getElementById("container-comidas")
for (const comida of comidas) {
	let div = document.createElement("div");
	div.innerHTML = `<div data-aos="flip-left" class="card card-paso1">
	<img src="assets/img/${comida.id}.jpg" class="card-img-top" alt="...">
	<div class="card-body">
		<h5 class="card-title">${comida.nombre}</h5>
		<p class="precioBebida">$${comida.precio}</p>
		<button type="button" id="${comida.id}" class="btn estilo-boton btnSeleccionarBebida" data-toggle="modal" data-target="#exampleModal">SELECCIONAR</button> <br>
	</div>
	</div>`
	containerComida.appendChild(div)
}
//CODIGO COMENTADO DEL PRIMER SIMULADOR (YA NO SERA UTILIZADO)


// let precioTotal = 0;
// function elegirBebida (bebida, precio) {
// 	alert("Elegiste beber " + bebida + ".");
// 	var cantidad = parseInt((prompt("¿Cuantos" + " " + bebida + " " + "quieres ordenar? (sólo valores númericos)")));
// 	console.log(typeof(cantidad));
// 	if (cantidad < 100 && cantidad > 0) {
// 		precioTotal = cantidad * precio;
// 		alert("Usted ha ordenado " + cantidad + " " + bebida + ". Su total a abonar es $" + precioTotal  + ".");
// 	} else { 
// 		alert("Usted no ha ingresado una cantidad valida.")}
// 	let padre = document.getElementById("padre");
// 	console.log(padre);
// 	let parrafo = document.createElement("p");
// 	parrafo.innerHTML = "- " + cantidad + " " + bebida + ". TOTAL: $" + precioTotal;
// 	padre.appendChild(parrafo);
// }

// function elegirComida (comida, precio) {
// 	alert("Su eleccion para comer fue " + comida + ".");
// 	var cantidad = parseInt(prompt("¿Cuantos" + " " + comida + " " + "quieres ordenar? (sólo valores númericos)"))
// 	if (cantidad < 100 && cantidad > 0) {
// 		precioTotal = cantidad * precio;
// 		alert("Usted ha ordenado " + cantidad + " " + comida + ". Su total a abonar es $" + precioTotal  + ".");
// 	} else { 
// 		alert("Usted no ha ingresado una cantidad valida.")}
// }

// function calcularCuotas () {
// 	let cuotas = parseInt(prompt("En cuantas cuotas desea realizar su compra? Solo valores númericos."))
// 	if (cuotas < 18 && cuotas > 0) {
// 	alert("Su monto es de " + cuotas + " cuotas de $" + precioTotal / cuotas + ".");
// 	} else (alert("Usted no ha ingresado una cantidad valida. Por favor, vuelva a intentarlo."))
// }

// let recomendaciones = [];
// function miArray() {
// 	do {
// 	let entrada = prompt("¡Ayudenos a mejorar! ¿Qué productos le gustaría que agregemos a nuestra carta?");
// 	recomendaciones.push(entrada.toUpperCase());
// 	var input = prompt("Desea recomendar otro producto? si / no");
// 	} while (input != "no")
// 	alert("Gracias por recomendarnos: "+ "\n" + recomendaciones.join("\n") +"\n"+ "Lo tendremos en cuenta!");
// 	console.log(recomendaciones);
// }
// function ordernarProductos() {
// 	let miArrayDeObjetos = [cafeNegro.nombre, cafeCortado.nombre, jugoDeNaranja.nombre, capuchino.nombre, te.nombre, brownie.nombre, medialunasJYQ.nombre, medialunas.nombre, lemonie.nombre, tostado.nombre];
// 	miArrayDeObjetos.sort((a, b) => a.localeCompare(b));
// 	console.log(miArrayDeObjetos);
// 	alert("Los productos ordenados alfabeticamente son: "+"\n"+ miArrayDeObjetos.join("\n"));
// }
// let miArraydeBebidas = [];
// miArraydeBebidas.push(cafeNegro, capuchino, te, jugoDeNaranja, cafeCortado);

// function manipulandoElDOM () {
// 	for (bebida of miArraydeBebidas) {
// 	let boton = document.getElementById("boton")
// 	let carta = document.createElement("p")
// 	carta.innerHTML = `<h3>Nombre: ${bebida.nombre}</h3>
// 						<p>Precio: ${bebida.precio}</p>
// 						<p>Cant. de calorias: ${bebida.calorias}</p>`
// 	boton.appendChild(carta)
// 	}
// }
