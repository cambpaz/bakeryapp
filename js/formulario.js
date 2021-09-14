$(".mensaje-carritoVacio").hide()
$("#formConfirmar").on("submit", function (e) {
    let btn = document.getElementById("botonConfirmacion");
    const closeBtn = document.querySelector('.modalBtn');
    const overlay = document.querySelector("#overlay");
    e.preventDefault();

    formValues = $(this).serializeArray();
    const info = {
        form: formValues,
        productos: JSON.stringify(carrito),
        total: valoresDelCarrito(carrito)
    }
    const URLPOST = 'https://jsonplaceholder.typicode.com/posts';
    console.log(info.productos.length);
    console.log(info.productos);
    if (info.productos.length !== 2) {
        $.post(URLPOST, info, function (respuesta, estado) {
            if (estado == "success") {
                document.querySelector(btn.dataset.target).classList.add("active");
                overlay.classList.add("active");
                console.log(btn.dataset.target);
                closeBtn.addEventListener("click", () => {
                    document.querySelector(btn.dataset.target).classList.remove("active");
                    overlay.classList.remove('active');
                })
            }
        })
        document.getElementById("formConfirmar").reset();
        $(".cart-content").empty();
        $(".cart-total").text(0);
        $(".numeroDeItems").text(0);
        carrito = [];
        localStorage.setItem("Carrito", JSON.stringify(carrito))
    } else {
        $(".mensaje-carritoVacio").fadeIn(1000).delay(1000).fadeOut(2000)
    }
});