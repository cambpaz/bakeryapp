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
					<button value="submit" type="button" data-dismiss="modal" id="agregarCarrito${comida.id}" class="btn btn-primary btnCarrito">Agregar al carrito</button>
				</div>
			</div>
		</div>
	</div>` 
	padreModalComida.appendChild(divPopUpComida);
}

//////////////////////////////////////////////////////////////////  EVENTOS
// creO un array vacio QUE SERAN LAS BEBIDAS SELECCIONADAS
let carrito = [];
//creo la funcion que luego utilizare en el evento
function seleccionarBebida() {
  //busco el ID del producto
	let bebida = bebidas.find(bebida => bebida.id == this.id);    
	carrito.push(bebida);
}
//creo una variable con el boton para que se acceda al pop up correspondiente
let btnSeleccionarBebida = document.getElementsByClassName("btnSeleccionarBebida");
//recorro los botones para que el click se asocie a la bebida que esta siendo seleccionada
for (const boton of btnSeleccionarBebida) {
	boton.addEventListener("click", seleccionarBebida);
}

function seleccionarComida() {
//busco el ID del producto
	let comida = comidas.find(comida => comida.id == this.id);    
	carrito.push(comida);
}
  //creo una variable con el boton para que se acceda al pop up correspondiente
let btnSeleccionarComida = document.getElementsByClassName("btnSeleccionarComida");
  //recorro los botones para que el click se asocie a la bebida que esta siendo seleccionada
for (const boton of btnSeleccionarComida) {
	boton.addEventListener("click", seleccionarComida);
}

let btnAgregarAlCarrito = document.getElementsByClassName("btnCarrito");
console.log(btnAgregarAlCarrito);
function agregarAlCarrito() {
    let divCarrito = document.getElementById("carrito");
	let contenidoCarrito = document.createElement("p")
	for (const producto of carrito) {
		contenidoCarrito.innerHTML = `${producto.nombre} - $${producto.precio}`
		divCarrito.appendChild(contenidoCarrito)
	}
}

//EVENTO DE AGREGAR AL CARRITO
for (const boton of btnAgregarAlCarrito) {
	boton.addEventListener("click", agregarAlCarrito);
}
console.log(carrito);
