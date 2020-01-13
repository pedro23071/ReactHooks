import React from 'react';
import {Link} from "react-router-dom";

function ProductList({producto}) {

    const eliminarProducto = (id) => {
       //eliminar Producto
        console.log('eliminando ' + id)
    }

    return(
        <tbody>
            <tr>
                <th>{producto.nombre}</th>
                <td>${producto.precio}</td>
                <td>{producto.categoria}</td>
                <td>
                    <Link  to={`/producto/editar/${producto.id}`} className="btn btn-success">Editar</Link>
                    <button
                        type="button"
                        className="btn btn-danger mx-2"
                        onClick={() => eliminarProducto(producto.id)}
                        >Eliminar</button>
                </td>
            </tr>
        </tbody>
    )
}

export default ProductList