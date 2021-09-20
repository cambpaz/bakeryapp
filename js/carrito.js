//////////////////////////////////////////////////////////////////  EVENTOS
// creo un array vacio QUE SERAN LAS BEBIDAS SELECCIONADAS
let carrito = [];

class LocalStorage {
	//creo un metodo estatico poder llamarlo sin tener que instanciar un objeto
	static guardarBebida(bebida) {
		localStorage.setItem("Bebidas", JSON.stringify(bebida));
	}
	static guardarComida(comida) {
		localStorage.setItem("Comidas", JSON.stringify(comida))
	}
	//creo el metodo que me traera la bebida del local storage al carrito segun el boton que estoy apretando
	static getBebida(id) {
		let bebidas = JSON.parse(localStorage.getItem("Bebidas"));
		return bebidas.find(bebida => bebida.boton == id);
	}
	static getComida(id) {
		let comidas = JSON.parse(localStorage.getItem("Comidas"));
		return comidas.find(comida => comida.boton == id);
	}
	static guardarCarrito(carrito) {
		localStorage.setItem("Carrito", JSON.stringify(carrito))
	}
	static recuperarCarrito() {
		if ("Carrito" in localStorage) {
			const carritoGuardado = JSON.parse(localStorage.getItem("Carrito"));
			for (const producto of carritoGuardado) {
				if (producto.tipo == "Bebida") {
					carrito.push(new Bebida(producto.boton, producto.id, producto.nombre, producto.precio, producto.calorias, producto.cantidad));
				} else if (producto.tipo == "Comida") {
					carrito.push(new Comida(producto.boton, producto.id, producto.nombre, producto.precio, producto.calorias, producto.cantidad));
				} else {
					carrito = [];
				}
			}
		}
		return carrito;
	}

}

//SELECCION DEL HTML PARA TRABAJAR CON EL DOM

let contenidoCarrito = document.querySelector(".cart-content");
let carritoOverlay = document.querySelector(".cart-overlay");
let carritoDOM = document.querySelector(".cart");

function comprarBebida(e) {
	e.preventDefault();
	let id = e.target.id;
	//agarro el producto desde el local storage
	let itemCarro = {
		...LocalStorage.getBebida(id)
	};
	let productoEntro = false;
	if (cantidadAgregadaBebida >= 1) {
		//AGREGO UN BUCLE QUE ME RECORRA EL CARRITO PARA SABER QUE PRODUCTOS TENGO
		for (item of carrito) {
			//si el producto esta en el carrito, entra en el "if" y le agrega uno mas a la cantidad
			if (itemCarro.id == item.id) {
				productoEntro = true;
				item.cantidad += cantidadAgregadaBebida;
				$(".mensaje-agregado").fadeIn(1000).delay(1000).fadeOut(2000)
				$(".display-carritoVacio").hide()
			}
		}
		//si el carrito no esta en el carrito, lo agrega
		if (productoEntro == false) {
			carrito = [...carrito, itemCarro];
			itemCarro.cantidad += cantidadAgregadaBebida;
			$(".mensaje-agregado").fadeIn(1000).delay(1000).fadeOut(2000)
			$(".display-carritoVacio").hide()
		}
		mostrarItemsCarrito();
		//lo guardo en el local storage
		LocalStorage.guardarCarrito(carrito);
		//utilizo una funcion para que me actulice el numero de items en el carrito y me muestre el precio total
		valoresDelCarrito(carrito);
		//mostrar los items en el carrito
		$(".cantidadDOMBebida").text(0)
		$(".cantidadDOMComida").text(0)

		cantidadAgregadaBebida = 0;
		cantidadAgregadaComida = 0;
	}
}

//FUNCION PARA AGREGAR MAS DE UNO DESDE EL MODAL
let cantidadAgregadaComida = 0;

function agregarUnoComida() {
	cantidadAgregadaComida += 1;
	$(".cantidadDOMComida").text(cantidadAgregadaComida);
}

function eliminarUnoComida() {
	if (cantidadAgregadaComida > 0) {
		--cantidadAgregadaComida
		$(".cantidadDOMComida").text(cantidadAgregadaComida);
	} else {
		$(".cantidadDOMComida").text(0);
	}
}

let cantidadAgregadaBebida = 0;

function agregarUnoBebida() {
	cantidadAgregadaBebida += 1;
	$(".cantidadDOMBebida").text(cantidadAgregadaBebida);
}

function eliminarUnoBebida() {
	if (cantidadAgregadaBebida > 0) {
		--cantidadAgregadaBebida
	$(".cantidadDOMBebida").text(cantidadAgregadaBebida);
	} else {
		$(".cantidadDOMBebida").text(0);
	}
}
function display(carrito){
if (carrito.length === 0) {
		$(".contenedor-total-carrito").hide();
		$(".clear-cart").hide()
		console.log("entro al if del display");
	}
	else if (carrito.length !== 0) {
		$(".display-carritoVacio").hide();
		$(".clear-cart").show()
		console.log("entro al else");
	}
}

$(".mensaje-agregado").hide()
function comprarComida(e) {
	e.preventDefault();
	let id = e.target.id;
	//agarro el producto desde el local storage
	let itemCarro = {
		...LocalStorage.getComida(id)
	};
	let productoEntro = false;
	if (cantidadAgregadaComida >= 1) {
		//AGREGO UN BUCLE QUE ME RECORRA EL CARRITO PARA SABER QUE PRODUCTOS TENGO
		for (item of carrito) {
			//si el producto esta en el carrito, entra en el "if" y le agrega uno mas a la cantidad
			if (itemCarro.id == item.id) {
				productoEntro = true;
				item.cantidad += cantidadAgregadaComida;
				$(".mensaje-agregado").fadeIn(1000).delay(1000).fadeOut(2000)
				$(".contenedor-total-carrito").show()
				$(".display-carritoVacio").hide()
				$(".clear-cart").show()
			}
		}
		//si el carrito no esta en el carrito, lo agrega
		if (productoEntro == false) {
			carrito = [...carrito, itemCarro];
			itemCarro.cantidad += cantidadAgregadaComida;
			$(".mensaje-agregado").fadeIn(1000).delay(1000).fadeOut(2000)
			$(".contenedor-total-carrito").show()
			$(".display-carritoVacio").hide()
			$(".clear-cart").show()
		}
		mostrarItemsCarrito();
		//lo guardo en el local storage
		LocalStorage.guardarCarrito(carrito);
		//utilizo una funcion para que me actulice el numero de items en el carrito y me muestre el precio total
		valoresDelCarrito(carrito);
		//mostrar los items en el carrito
		$(".cantidadDOMComida").text(0)
		cantidadAgregadaComida = 0;
		console.log(carrito.length);
	}
}

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
	return totalCompra
}

//FUNCION QUE ME CREARA LOS ITEMS EN EL CARRITO (DOM)
function mostrarItemsCarrito() {
	$(".cart-content").empty()
	for (let itemCarro of carrito) {
		const DIV = document.createElement('div');
		$(DIV).addClass("cart-item");
		DIV.innerHTML = `<img src="assets/img/${itemCarro.id}.jpg" alt="product">
			<div>
				<h4 class="nombre-producto">${itemCarro.nombre}</h4>
				<h5 class="precio-producto">$${itemCarro.precio}</h5>
				<span class="remove-items" id="${itemCarro.id}">ELIMINAR</span>
			</div>
			<div>
				<i class="fas fa-chevron-up agregarUno" id="${itemCarro.id}"></i>
				<p class="item-amount">${itemCarro.cantidad}</p>
				<i class="fas fa-chevron-down eliminarUno" id="${itemCarro.id}"></i>
			</div>`
		$(".cart-content").append(DIV);
	}
	$(".remove-items").click(eliminarUnidad);
	$(".agregarUno").click(agregarUnidadDesdeCarrito);
	$(".eliminarUno").click(eliminarUnidadDesdeCarrito);
}

// FUNCION CLEAR CART
function vaciarCarrito() {
	$(".cart-content").empty();
	$(".cart-total").text(0);
	$(".numeroDeItems").text(0);
	carrito = [];
	$(".contenedor-total-carrito").hide()
	$(".display-carritoVacio").show();
	$(".clear-cart").hide()
	localStorage.setItem("Carrito", JSON.stringify(carrito))
}
$(".clear-cart").click(vaciarCarrito);

//FUNCION PARA ELIMINAR UN SOLO PRODUCTO

function eliminarUnidad(e) {
	let posicion = carrito.findIndex(producto => producto.id == e.target.id);
	//Utilizo el splice para que me elimine el producto del carrito (metodo splice, busco la posicion con el findIndex y elimino uno para adelante desde ahi)
	carrito.splice(posicion, 1);
	$(".numeroDeItems").text(0);
	valoresDelCarrito(carrito)
	mostrarItemsCarrito()
	localStorage.setItem("Carrito", JSON.stringify(carrito));
	$(".contenedor-total-carrito").hide()
	$(".display-carritoVacio").show();
}

//BOTONES PARA ABRIR Y CERRAR EL CARRITO
$(".close-cart").click(() => {
	carritoOverlay.classList.remove("transparentBcg");
	carritoDOM.classList.remove("showCart");
})
$(".btnAbrirCarrito").click(() => {
	carritoOverlay.classList.add("transparentBcg");
	carritoDOM.classList.add("showCart");
})
window.onclick = (e) => {
    if (e.target == carritoOverlay) {
		carritoOverlay.classList.remove("transparentBcg");
		carritoDOM.classList.remove("showCart");
    }
}
//FUNCION PARA AGREGAR CANTIDAD DESDE EL CARRITO

function agregarUnidadDesdeCarrito(e) {
	e.preventDefault();
	let productoSeleccionado = carrito.filter(prod => prod.id == e.target.id);
	for (producto of productoSeleccionado) {
		producto.cantidad += 1;
		console.log(producto.cantidad);
		console.log(producto);
	}
	mostrarItemsCarrito(carrito);
	valoresDelCarrito(carrito);
	localStorage.setItem("Carrito", JSON.stringify(carrito))
}


//FUNCION PARA ELIMINAR DESDE EL CARRITO

function eliminarUnidadDesdeCarrito(e) {
	e.preventDefault();
	let productoCarrito = carrito.filter(prod => prod.id == e.target.id);
	console.log(productoCarrito);
	for (producto of productoCarrito) {
		if (producto.cantidad > 1) {
			producto.cantidad--
		console.log(producto.cantidad);
		console.log(producto);
		}
	}
	mostrarItemsCarrito(carrito);
	valoresDelCarrito(carrito);
}



