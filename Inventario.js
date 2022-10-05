class Inventario {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    eliminarProducto(codigo) {
        let producto = this.buscarProducto(codigo);
        if (producto) {
            this.eliminar(codigo);
            alert('Producto eliminado');
        } else {
            alert('Producto no encontrado');
        }

    }

    buscarProducto(codigo) {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].codigo === codigo) {
                return this.productos[i];
            }
        }
    }

    eliminar(codigo) {
        for (let i = 0; i < this.productos.length; i++) {
            if (codigo === this.productos[i].codigo) {
                for (let j = i; j < this.productos.length - 1; j++) {
                    this.productos[j] = this.productos[j + 1];
                }

                this.productos.pop();
            }

        }
    }

    listarProductos() {
        let lista = '';
        for (let i = 0; i < this.productos.length; i++) {
            lista += ProductRow(this.productos[i])
        }

        return lista;
    }

    listarInverso() {
        let listaInv = '';

        for (let i = this.productos.length - 1; i >= 0; i--) {
            listaInv += ProductRow(this.productos[i]); 
        }

        return listaInv;
    }
}