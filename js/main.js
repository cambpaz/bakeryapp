// CUANDO SE CARGUE EL DOCUMENTO
$(document).ready(
	//CARGAR DATOS DE MANERA LOCAL
	$.get("data/productos.json", function (productos, estado) {
		var bebidas = []
		var comidas = []
		if (estado == "success") {
			for (producto of productos) {
				if (producto.tipo == "Bebida") {
					bebidas.push(new Bebida(producto.boton, producto.id, producto.nombre, producto.precio, producto.calorias, producto.cantidad))
				}
				if (producto.tipo == "Comida") {
					comidas.push(new Comida(producto.boton, producto.id, producto.nombre, producto.precio, producto.calorias, producto.cantidad))
				}
			}
		}
		bebidasUI(bebidas),
			modalBebidaUI(bebidas)
		comidasUI(comidas),
			modalComidasUI(comidas),
			carrito = LocalStorage.recuperarCarrito(),
			valoresDelCarrito(carrito),
			carrito.forEach(producto => mostrarItemsCarrito(producto)),
			LocalStorage.guardarBebida(bebidas),
			LocalStorage.guardarComida(comidas)
	}),
)
