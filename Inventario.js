class Inventario {
    constructor() {
        this.productos = [];
    }

    ordenarProductos() {
       if (this.productos.length != 0) {
            let aux = 0;
            for (let i = 0; i < this.productos.length - 1; i++) {
                for (let j = 0; j < this.productos.length -i -1; j++) {
                    if (this.productos[j+1].getCodigo() < this.productos[j].getCodigo()) {
                        aux = this.productos[j+1];
                        this.productos[j+1] = this.productos[j];
                        this.productos[j] = aux;
                    }
                }
            }
            
        } else {
            return null;
        }
    }

    devolverLista() {
        return this.productos;
    }

    buscarProducto(codigo) {
        let producto = false;
        let inferior = 0;
        let superior = this.productos.length - 1;
        let centro = Math.floor((inferior + superior) / 2);

        while (inferior <= superior) {
            if (Number(this.productos[centro].codigo) === Number(codigo)) {
                producto = this.productos[centro];
            } else if (Number(this.productos[centro].codigo) < Number(codigo)) {
                inferior = centro + 1;
            } else {
                superior = centro - 1;
            }
            centro = Math.floor((inferior + superior) / 2);
        }
        return producto;
    }


    agregarProducto(producto) {
        //cambiar forma de agregar producto
        // this.productos.push(producto);

        if (this.buscarProducto(producto.getCodigo())) {
            return false;
        } else {
            this.productos.push(producto);

            this.ordenarProductos();
            return true;
        }
        
    }

    eliminar(codigo) {
        if (this.buscarProducto(codigo)) {
            for (let i = 0; i < this.productos.length; i++) {
                if (this.productos[i].getCodigo() == codigo) {
                    for (let j = i; j < this.productos.length - 1; j++) {
                        this.productos[j] = this.productos[j + 1];
                    }

                this.productos.pop();
                }
            }
            return true;
        } else {
            return false;
        }
    }
        // for (let i = 0; i < this.productos.length; i++) {
        //     if (codigo === this.productos[i].codigo) {
        //         for (let j = i; j < this.productos.length - 1; j++) {
        //             this.productos[j] = this.productos[j + 1];
        //         }

        //         this.productos.pop();
        //     }

        // }
    


    listarProductos() {
        let lista = '';
        if (this.productos.length > 0) {
            for (let i = 0; i < this.productos.length; i++) {
                lista += ProductRow(this.productos[i])
            }
        } else {
            return false;
        }
            
        return lista;
    }

    listarInverso() {
        let listaInv = '';

        if (this.productos.length > 0) {
            for (let i = this.productos.length - 1; i >= 0; i--) {
                listaInv += ProductRow(this.productos[i]); 
            }
        } else {
            return false;
        }

        return listaInv;
    }
}


