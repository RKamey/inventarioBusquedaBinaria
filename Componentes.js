const ProductRow = (product) => {
    return `<tr>
        <td>${product.getCodigo()}</td>
        <td>${product.getNombre()}</td>
        <td>${product.getCantidad()}</td>
        <td>${product.getPrecio()}</td>
    </tr>`
  }
  
  const createTable = () => {
    return `
        <h2>Productos</h2>
        <table class="table">
            <thead class="table-dark">
            <tr>
                <th scope="col">Codigo</th>
                <th scope="col">Nombre</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
            </tr>
            </thead>
            <tbody id="tabla-productos">
            </tbody>
        </table>
    `
  }
  