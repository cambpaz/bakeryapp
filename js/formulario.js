$("#formConfirmar").on("submit", function (e) {
    e.preventDefault();

    formValues = $(this).serializeArray();
    const info = {
        formValues,
        productos: JSON.stringify(carrito),
        total: valoresDelCarrito(carrito)
    }
    const URLPOST = 'https://jsonplaceholder.typicode.com/posts';
    console.log(info.productos.length);
    console.log(info.productos);
    if (info.productos.length !== 2) {
        $.post(URLPOST, info, function (respuesta, estado) {
            if (estado == "success") {
                alert("¡Muchas gracias por confiar en nosotros! Su pedido sera enviado a preparacion.")
            }
        })
        document.getElementById("formConfirmar").reset();
        $(".cart-content").empty();
        $(".cart-total").text(0);
        $(".numeroDeItems").text(0);
        carrito = [];
    
        localStorage.setItem("Carrito", JSON.stringify(carrito))
    } else { alert("Su carrito esta vacio!")}
});