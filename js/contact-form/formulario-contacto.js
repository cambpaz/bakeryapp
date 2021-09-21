$("#contactForm").on("submit", function (e) {
	//SELECCIONO EL HTML PARA LUEGO ACTIVAR EL MODAL DE CONFIRMACION
	e.preventDefault();
	var $submit = $('.submitting'),
		waitText = 'Submitting...';
	valuesFormulario = $(this).serializeArray();

	const URLPOST = 'https://jsonplaceholder.typicode.com/posts';

	$.post(URLPOST, valuesFormulario, function (respuesta, estado) {

		if (estado == "success") {
			//PARA ACTIVAR EL MODAL DE CONFIRMACION
			$submit.css('display', 'block').text(waitText);
			setTimeout(function () {
				$('#form-message-success').fadeIn();
			}, 1400);
			setTimeout(function () {
				$('#form-message-success').fadeOut();
			}, 8000);
			setTimeout(function () {
				$submit.css('display', 'none').text(waitText);
			}, 1400);
			setTimeout(function () {
				$('#contactForm').each(function () {
					this.reset();
				});
			}, 1400);
		}
	})
	document.getElementById("contactForm").reset();
}); 