//CONSTRUCTOR OBJETOS
//molde bebidas
function Bebida(boton, id, nombre, precio, calorias, img) {
this.boton = boton; // agrego esta propiedad para asignarle un ID diferente al boton de agregar al carrito (ya que el id lo usa el boton de seleccionar)
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
bebidas.push(new Bebida(30, 1, "Cafe negro", 100, 10));
bebidas.push(new Bebida(31, 2, "Capuchino", 110, 10));
bebidas.push(new Bebida(32, 3, "Jugo de naranja", 70, 10));
bebidas.push(new Bebida(33, 4, "Te", 70, 10));
bebidas.push(new Bebida(34, 5, "Cafe Cortado", 110, 10));

console.log(bebidas);
//molde comidas
function Comida(boton, id, nombre, precio, calorias, img) {
this.boton = boton; 
this.id = parseInt(id);
this.modalId = "modal" + this.id;
this.nombre = nombre;
this.precio = parseFloat(precio);
this.calorias = calorias;
this.img = img;
this.cantidad = 0;
this.cantCalorias = function () {alert("Esta comida tiene un total de " + this.calorias + " calorías.")}
}
//creo las comidas
const comidas = [];
comidas.push(new Comida(35, 6, "Medialunas", 120, 280));
comidas.push(new Comida(36, 7, "Brownie", 140, 250))
comidas.push(new Comida(37, 8, "Tostado", 150, 300));
comidas.push(new Comida(38, 9,"Lemonie", 130, 240));
comidas.push(new Comida(39, 10, "Medialunas con jamón y queso", 120, 400));
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
						<button value="submit" type="button" data-dismiss="modal" id="${bebida.boton}" class="btn btn-primary btnCarritoBebida">Agregar al carrito</button>
					</div>
				</div>
			</div>
	</div>` 
	containerModal.appendChild(divPopUp);
}


////////////////////////////////////////////////////////////////////////// COMIDAS
let containerComida = document.getElementById("container-comidas")
for (const comida of comidas) {
	let div = document.createElement("div");
	div.innerHTML = `<div data-aos="flip-left" class="card card-paso1">
	<img src="assets/img/${comida.id}.jpg" class="card-img-top" alt="...">
	<div class="card-body">
		<h5 class="card-title">${comida.nombre}</h5>
		<p class="precioBebida">$${comida.precio}</p>
		<button type="button" id="${comida.id}" class="btn estilo-boton btnSeleccionarComida" data-toggle="modal" data-target="#${comida.modalId}">SELECCIONAR</button> <br>
	</div>
	</div>`
	containerComida.appendChild(div)
}
let padreModalComida = document.getElementById("container-modal-comidas");
console.log(padreModalComida);
for (const comida of comidas) {
	let divPopUpComida = document.createElement("div");
	divPopUpComida.innerHTML = 
	`<div class="modal fade" id="${comida.modalId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content modal-lg">
				<div style="background-image: linear-gradient(rgba(241, 234, 224, 0.614),rgba(241, 234, 224, 0.614)), url(../assets/img/${comida.id}.jpg);" class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">${comida.nombre}</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<form action="">
						<p>Elija la cantidad de unidades que quiere ordenar</p>
						<input type="number" class="btnCantidad" id="cantidad${comida.id}">
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
					<button value="submit" type="button" data-dismiss="modal" id="${comida.boton}" class="btn btn-primary btnCarritoComida">Agregar al carrito</button>
				</div>
			</div>
		</div>
	</div>` 
	padreModalComida.appendChild(divPopUpComida);
}

//////////////////////////////////////////////////////////////////  EVENTOS
// creO un array vacio QUE SERAN LAS BEBIDAS SELECCIONADAS
let carrito = [];
let btnAgregarBebidaAlCarrito = document.getElementsByClassName("btnCarritoBebida");

function agregarBebidaAlCarrito() {
	let bebidaSeleccionada = bebidas.find(bebida => bebida.boton == this.id);
	console.log(bebidaSeleccionada);
	carrito.push(bebidaSeleccionada);
	console.log(carrito);
	localStorage.setItem("CARRITO", JSON.stringify(carrito));
}
//EVENTO DE AGREGAR LA BEBIDA AL CARRITO
for (const boton of btnAgregarBebidaAlCarrito) {
    boton.addEventListener("click", agregarBebidaAlCarrito);
}
////////////////////////////////////////////////////////////////////////////////////
let btnAgregarComidaAlCarrito = document.getElementsByClassName("btnCarritoComida");
function agregarComidaAlCarrito() {
    let comidaSeleccionada = comidas.find(comida => comida.boton == this.id);
    carrito.push(comidaSeleccionada);
    console.log(carrito);
	localStorage.setItem("CARRITO", JSON.stringify(carrito));
}

for (const boton of btnAgregarComidaAlCarrito) {
    boton.addEventListener("click", agregarComidaAlCarrito);
}

////////////////////////////////////////////////////////////////////////////////////

let btnVerCarrito = document.getElementById('verCarrito');

function verMiCarrito() {
	let carritoGuardado = JSON.parse(localStorage.getItem("CARRITO"));
	let precioAcumulado = [];
	console.log(precioAcumulado);
	for (const producto of carritoGuardado) {
		precioAcumulado.push(producto.precio)
	}
	let reducer = function(acumulador, currentValue) {return acumulador + currentValue};
	let precioTotal = precioAcumulado.reduce(reducer, 0);
	console.log(precioTotal);
	let divCarrito = document.getElementById("carrito");
	let contenidoCarrito = document.createElement("p");
	for (const producto of carritoGuardado) {
	contenidoCarrito.innerHTML += `${producto.nombre} - $${producto.precio} <br>`
	divCarrito.appendChild(contenidoCarrito); 
	}
	let total = document.getElementById("totalCarrito");
	total.innerHTML = `Precio total = $${precioTotal}`;
}

btnVerCarrito.addEventListener("click", verMiCarrito)

