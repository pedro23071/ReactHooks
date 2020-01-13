import React from 'react';
import ProductList from './ProductList';

function Productos ({productos}) {
    return(
        <div className="container my-5">
            <table className="table">
                <thead className="bg-info text-uppercase text-white">
                    <tr>
                        <th scope="col">nombre</th>
                        <th scope="col">precio</th>
                        <th scope="col">categoria</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                {productos.map((producto) => (
                    <ProductList
                        key={producto.id}
                        producto={producto}
                    />
                ))}
            </table>
        </div>
    )
}

export default Productos;