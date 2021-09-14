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
    this.cantCalorias = function () {
        alert("Esta bebida tiene un total de " + this.calorias + " calorías.")
    }
}

//creo los objetos mediante un array de objetos vacio


//molde comidas
function Comida(boton, id, nombre, precio, calorias, cantidad) {
    this.tipo = "Comida";
    this.boton = boton;
    this.id = parseInt(id);
    this.modalId = "modal" + this.id;
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.calorias = calorias;
    this.cantidad = cantidad;
    this.cantCalorias = function () {
        alert("Esta comida tiene un total de " + this.calorias + " calorías.")
    }
}
