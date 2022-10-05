class Producto {
    constructor(codigo, nombre, cantidad, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    getCodigo() {
        return this.codigo;
    }

    getNombre() {
        return this.nombre;
    }

    getCantidad() {
        return this.cantidad;
    }

    getPrecio() {
        return this.precio;
    }

    getInfo() {
        return `Codigo: ${this.codigo}, Nombre: ${this.nombre}, Cantidad: ${this.cantidad}, Precio: $${this.precio}`;
    }
}