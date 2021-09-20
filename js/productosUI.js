//utilizo un bucle for of para crear las card en el document HTML
function bebidasUI(bebidas) {
    for (bebida of bebidas) {
        $('#container-bebidas').append(`<div data-aos="flip-left" class="card card-paso1">
		<img src="assets/img/${bebida.id}.jpg" class="card-img-top" alt="...">
		<div class="card-body">
		<h5 class="card-title">${bebida.nombre}</h5>
		<p class="precioBebida">$${bebida.precio}</p>
		<button type="button" id="${bebida.id}" class="btn estilo-boton btnSeleccionarBebida" data-toggle="modal" data-target="#${bebida.modalId}">SELECCIONAR</button> <br>
		</div>
		</div>`)
    }
}

//CREO LOS MODAL UNO POR UNO
function modalBebidaUI(bebidas) {
    for (const bebida of bebidas) {
        $('#container-modal').append(`<div class="modal fade" id="${bebida.modalId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content modal-lg">
						<div style="background-image: linear-gradient(rgba(241, 234, 224, 0.614),rgba(241, 234, 224, 0.614)), url(assets/img/${bebida.id}.jpg);" class="modal-header">
							<div style="display:flex; justify-content: center; align-items: center;">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<h5 class="modal-title" id="exampleModalLabel">${bebida.nombre}</h5>
						</div>
						<div class="modal-body">
							<p>Elija la cantidad de unidades que quiere ordenar</p>
							<form action="" class="cantidad-form">
								<a id="${bebida.id}" class="btn boton-cantidad-estilo btn-delete">-</a>
								<span class="badge cantidadDOMBebida">${bebida.cantidad}</span>
								<a id="${bebida.id}" class="btn boton-cantidad-estilo btn-add">+</a>
							</form>
						</div>
						<div class="modal-footer">
							<button type="button" class="boton-cerrar-modal" data-dismiss="modal">CERRAR</button>
							<button value="submit" type="button" data-dismiss="modal" id="${bebida.boton}" class="btnCarritoBebida">Agregar al carrito</button>
						</div>
					</div>
				</div>
		</div>`)
    }
	$('.btnCarritoBebida').on("click", comprarBebida);
	$(".btn-add").click(agregarUnoBebida);
	$(".btn-delete").click(eliminarUnoBebida);
}
////////////////////////////////////////////////////////////////////////// COMIDAS
function comidasUI (comidas) {
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
}

function modalComidasUI (comidas){
	for (const comida of comidas) {
		$('#container-modal-comidas').append(`<div class="modal fade" id="${comida.modalId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content modal-lg">
					<div style="background-image: linear-gradient(rgba(241, 234, 224, 0.614),rgba(241, 234, 224, 0.614)), url(assets/img/${comida.id}.jpg);" class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">${comida.nombre}</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
					<p>Elija la cantidad de unidades que quiere ordenar</p>
					<form action="" class="cantidad-form">
						<a id="${comida.id}" class="btn boton-cantidad-estilo btn-delete">-</a>
						<span class="badge cantidadDOMComida">${comida.cantidad}</span>
						<a id="${comida.id}" class="btn boton-cantidad-estilo btn-add">+</a>
					</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="boton-cerrar-modal" data-dismiss="modal">CERRAR</button>
						<button value="submit" type="button" data-dismiss="modal" id="${comida.boton}" class="btnCarritoComida">Agregar al carrito</button>
					</div>
				</div>
			</div>
		</div>`)
	}
	$('.btnCarritoComida').on("click", comprarComida);
	$(".btn-add").click(agregarUnoComida);
	$(".btn-delete").click(eliminarUnoComida);
}