//CONSTRUCTOR OBJETOS
//molde bebidas
function Bebida(boton, id, nombre, precio, calorias, cantidad) {
this.tipo = "Bebida";
this.boton = boton; // agrego esta propiedad para asignarle un ID diferente al boton de agregar al carrito (ya que el id lo usa el boton de seleccionar)
this.id = parseInt(id);
this.modalId = "modal" + this.id;
this.nombre = nombre;
this.precio = parseFloat(precio);
this.calorias = calorias;
this.cantidad = cantidad;
this.cantCalorias = function () {alert("Esta bebida tiene un total de " + this.calorias + " calorías.")}

}

//creo los objetos mediante un array de objetos vacio
const bebidas = [];
bebidas.push(new Bebida(30, 1, "Cafe Espreso", 100, 10, 0));
bebidas.push(new Bebida(31, 2, "Capuchino", 110, 10, 0));
bebidas.push(new Bebida(32, 3, "Jugo de naranja", 70, 10, 0));
bebidas.push(new Bebida(33, 4, "Te", 70, 10, 0));
bebidas.push(new Bebida(34, 5, "Cafe Cortado", 110, 10, 0));
bebidas.push(new Bebida(35, 6, "Chocolatada", 90, 10, 0));
bebidas.push(new Bebida(36, 7, "Submarino", 100, 10, 0));
bebidas.push(new Bebida(37, 8, "Limonada", 80, 10, 0));

//molde comidas
function Comida(boton, id, nombre, precio, calorias) {
this.tipo = "Comida";
this.boton = boton; 
this.id = parseInt(id);
this.modalId = "modal" + this.id;
this.nombre = nombre;
this.precio = parseFloat(precio);
this.calorias = calorias;
this.cantidad = 0;
this.cantCalorias = function () {alert("Esta comida tiene un total de " + this.calorias + " calorías.")}
}
//creo las comidas
const comidas = [];
comidas.push(new Comida(50, 100, "Medialunas", 120, 280));
comidas.push(new Comida(51, 101, "Brownie", 140, 250))
comidas.push(new Comida(52, 102, "Tostado", 150, 300));
comidas.push(new Comida(53, 103,"Lemonie", 130, 240));
comidas.push(new Comida(54, 104, "Medialunas con jamón y queso", 120, 400));
comidas.push(new Comida(55, 105, "Tostadas francesas", 120, 400));
comidas.push(new Comida(56, 106, "Chocotorta", 120, 400));
comidas.push(new Comida(57, 107, "Lemon Pie", 120, 400));


//utilizo un bucle for of para crear las card en el document HTML
for (const bebida of bebidas) {
	$('#container-bebidas').append(`<div data-aos="flip-left" class="card card-paso1">
	<img src="assets/img/${bebida.id}.jpg" class="card-img-top" alt="...">
	<div class="card-body">
		<h5 class="card-title">${bebida.nombre}</h5>
		<p class="precioBebida">$${bebida.precio}</p>
		<button type="button" id="${bebida.id}" class="btn estilo-boton btnSeleccionarBebida" data-toggle="modal" data-target="#${bebida.modalId}">SELECCIONAR</button> <br>
	</div>
	</div>`)
}

//CREO LOS MODAL UNO POR UNO
for (const bebida of bebidas) {
	$('#container-modal').append(`<div class="modal fade" id="${bebida.modalId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content modal-lg">
					<div style="background-image: linear-gradient(rgba(241, 234, 224, 0.614),rgba(241, 234, 224, 0.614)), url(../assets/img/${bebida.id}.jpg);" class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">${bebida.nombre}</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<!-- <p>Elija la cantidad de unidades que quiere ordenar</p> -->
						<!-- <form action="" class="cantidad-form"> 
							<span class="badge">${bebida.cantidad}</span>
							<a id="${bebida.id}" class="btn btn-info btn-add">+</a>
							<a id="${bebida.id}" class="btn btn-danger btn-delete">x</a>
							</p>
						</form>-->
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
						<button value="submit" type="button" data-dismiss="modal" data-id="${bebida.boton}" class="btn btn-primary btnCarritoBebida">Agregar al carrito</button>
					</div>
				</div>
			</div>
	</div>` )
}


////////////////////////////////////////////////////////////////////////// COMIDAS

for (const comida of comidas) {
	$('#container-comidas').append(`<div data-aos="flip-left" class="card card-paso1">
	<img src="assets/img/${comida.id}.jpg" class="card-img-top" alt="...">
	<div class="card-body">
		<h5 class="card-title">${comida.nombre}</h5>
		<p class="precioBebida">$${comida.precio}</p>
		<button type="button" id="${comida.id}" class="btn estilo-boton btnSeleccionarComida" data-toggle="modal" data-target="#${comida.modalId}">SELECCIONAR</button> <br>
	</div>
	</div>`);
}


for (const comida of comidas) {
	$('#container-modal-comidas').append(`<div class="modal fade" id="${comida.modalId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
						<!-- <p>Elija la cantidad de unidades que quiere ordenar</p> -->
						<!-- <input type="number" class="btnCantidad" id="cantidad${comida.id}"> -->
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
					<button value="submit" type="button" data-dismiss="modal" data-id="${comida.boton}" class="btn btn-primary btnCarritoComida">Agregar al carrito</button>
				</div>
			</div>
		</div>
	</div>`)
}

//////////////////////////////////////////////////////////////////  EVENTOS
// creo un array vacio QUE SERAN LAS BEBIDAS SELECCIONADAS
let carrito = [];

class LocalStorage {
	//creo un metodo estatico poder llamarlo sin tener que instanciar un objeto
	static guardarBebida (bebida) {
		localStorage.setItem("Bebidas", JSON.stringify(bebida));
	}
	static guardarComida (comida) {
		localStorage.setItem("Comidas", JSON.stringify(comida))
	}
	//creo el metodo que me traera la bebida del local storage al carrito segun el boton que estoy apretando
	static getBebida (id) {
		let bebidas = JSON.parse(localStorage.getItem("Bebidas"));
		return bebidas.find (bebida => bebida.boton == id);
	}
	static getComida (id) {
		let comidas = JSON.parse(localStorage.getItem("Comidas"));
		return comidas.find (comida => comida.boton == id);
	}
	static guardarCarrito(carrito) {
		localStorage.setItem("Carrito", JSON.stringify(carrito))
	}
	static recuperarCarrito() {
		if("Carrito" in localStorage) {
			const carritoGuardado = JSON.parse(localStorage.getItem("Carrito"));
			for(const producto of carritoGuardado) {
				if (producto.tipo == "Bebida") {
					carrito.push(new Bebida(producto.boton, producto.id, producto.nombre, producto.precio, producto.calorias, producto.cantidad));
				} else if (producto.tipo == "Comida") {
					carrito.push(new Comida(producto.boton, producto.id, producto.nombre, producto.precio, producto.calorias, producto.cantidad));
				} else {carrito = []; }
			}
		} 
		return carrito;
	}
	
}

LocalStorage.guardarBebida(bebidas);
LocalStorage.guardarComida(comidas);

//SELECCION DEL HTML PARA TRABAJAR CON EL DOM

let contenidoCarrito = document.querySelector(".cart-content");
let carritoOverlay = document.querySelector(".cart-overlay"); 
let carritoDOM = document.querySelector(".cart");
let btnAgregarBebidaAlCarrito = [...document.querySelectorAll(".btnCarritoBebida")];
let btnAgregarComidaAlCarrito = [...document.querySelectorAll(".btnCarritoComida")];
let btnEliminarProducto = [...document.getElementsByClassName(".remove-items")];
console.log(btnEliminarProducto);

//BOTON DE AGREGAR AL CARRITO CON TODAS SUS FUNCIONES
btnAgregarBebidaAlCarrito.forEach((boton) => {
	let id = boton.dataset.id;
	boton.addEventListener("click", () => {
		//agarro el producto desde el local storage
		let itemCarro = {...LocalStorage.getBebida(id)};
		let productoEntro = false;
		for (item of carrito) {
			if (itemCarro.id == item.id) {
				productoEntro = true;
				item.cantidad += 1;
			} 
		}
		if (productoEntro == false) {
			carrito = [...carrito, itemCarro];
			itemCarro.cantidad += 1;
		}
		mostrarItemsCarrito(itemCarro);
		console.log(carrito);
		//lo guardo en el local storage
		LocalStorage.guardarCarrito(carrito);
		//utilizo una funcion para que me actulice el numero de items en el carrito y me muestre el precio total
		valoresDelCarrito(carrito);
		//mostrar los items en el carrito
		
		// desplegarCarrito()
	})
})
btnAgregarComidaAlCarrito.forEach((boton) => {
	let id = boton.dataset.id;
	boton.addEventListener("click", () => {
		let itemCarro = {...LocalStorage.getComida(id)};
		let productoEntro = false;
		for (item of carrito) {
			if (itemCarro.id == item.id) {
				productoEntro = true;
				itemCarro.cantidad += 1;
			} 
		}
		if (productoEntro == false) {
			carrito = [...carrito, itemCarro];
			itemCarro.cantidad += 1;
		}
		mostrarItemsCarrito();
		console.log(carrito);
		LocalStorage.guardarCarrito(carrito);
		valoresDelCarrito(carrito);
	}
	)



})
//creo una funcion que me calculara el numero de items y el valor total del carrito
function valoresDelCarrito(carrito) {
	let totalCompra = 0;
	let itemsTotal = 0;
	carrito.map(producto => {
		totalCompra += producto.precio * producto.cantidad;
		itemsTotal += producto.cantidad;
	})
	$(".cart-total").text(parseInt(totalCompra));
	$(".numeroDeItems").text(itemsTotal);
}

//FUNCION QUE ME CREARA LOS ITEMS EN EL CARRITO (DOM)
function mostrarItemsCarrito () { 
	$(".cart-content").empty()
	for (let itemCarro of carrito) {
		const DIV = document.createElement('div');
		$(DIV).addClass("cart-item");
		DIV.innerHTML = `<img src="assets/img/${itemCarro.id}.jpg" alt="product">
			<div>
				<h4>${itemCarro.nombre}</h4>
				<h5>$${itemCarro.precio}</h5>
				<span class="remove-items" data-id="${itemCarro.id}">ELIMINAR</span>
			</div>
			<div>
				<i class="fas fa-chevron-up" data-id="${itemCarro.id}"></i>
				<p class="item-amount">${itemCarro.cantidad}</p>
				<i class="fas fa-chevron-down" data-id="${itemCarro.id}></i>
			</div>`
		$(".cart-content").append(DIV);
	}
	}

// //FUNCION PARA AGREGAR MAS DE UNO DESDE EL MODAL
// function addUnoCarrito() {
// 	let producto = carrito.find(producto => producto.id == this.id);
// 	producto.cantidad += 1;
// 	$(this).parent().children()[1].innerHTML = producto.cantidad;
// }


$(".btn-add").click(addUnoCarrito);

//BOTONES PARA ABRIR Y CERRAR EL CARRITO
$(".close-cart").click(() => {
	carritoOverlay.classList.remove("transparentBcg");
	carritoDOM.classList.remove("showCart");
})
$(".btnAbrirCarrito").click(() => {
	carritoOverlay.classList.add("transparentBcg");
	carritoDOM.classList.add("showCart");
})
// // FUNCION CLEAR CART
// function vaciarCarrito () {	
// 	$(".cart-content").empty()
// 	let idProductos = carrito.map(item => item.id);
// 	idProductos.forEach(id => eliminarProducto(id));
// }
// $(".clear-cart").click(vaciarCarrito);


// //FUNCION ELIMINAR PRODUCTO INDIVIDUAL
// function eliminarProducto(id) {
// 	//hago un filter que me devuelva todos los items EXCEPTO el que tiene el ID del que aprete eliminar
// 	carrito = carrito.filter(item => item.id !== id);
// 	console.log(carrito);
// 	valoresDelCarrito(carrito);
// 	LocalStorage.guardarCarrito(carrito);
// }

// btnEliminarProducto.forEach((boton) => { 
// 	let id = boton.dataset.id;
// 	boton.addEventListener("click", () => {
// 			eliminarProducto(id);
// 	})
// })

// CUANDO SE CARGUE EL DOCUMENTO
$( document ).ready(
	carrito = LocalStorage.recuperarCarrito() ,
	valoresDelCarrito(carrito) ,
	carrito.forEach(producto => mostrarItemsCarrito(producto)) 
)

