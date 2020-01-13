import React, { Fragment, useEffect, useState} from 'react';
import axios from "axios";
import {Error} from "./Error";

function EditarProducto ({idProduct}){

    const [producto, guardarProducto] = useState([]);
    const [error, guardarError ] = useState(false);
    const [categoria, guardarCategoria ] = useState('');


    useEffect(() => {
        const consultarApi = async () => {
            //consultar la api de json server
            const resultado = await axios.get(`http://localhost:4000/restaurant/${idProduct}`);

            console.log(resultado.data);
            guardarProducto(resultado.data);
            }
            consultarApi();
        }, []);

    const editarProducto = e => {

    }

    const leerValorRadio = (e) => {
        guardarCategoria(e.target.value);
    }
    return(
        <Fragment>
            <div className="col-md-8 mx-auto ">
                <h1 className="text-center">Editar Producto</h1>

                { (error) ? <Error mesage={'Todos los campos son requeridos'} /> : null }

                <form
                    onSubmit={editarProducto}
                    className="mt-5"
                >
                    <div className="form-group">
                        <label>Nombre Platillo</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre"
                            placeholder="Nombre Platillo"
                            defaultValue={producto.nombre}
                        />
                    </div>

                    <div className="form-group">
                        <label>Precio Platillo</label>
                        <input
                            type="number"
                            className="form-control"
                            name="precio"
                            placeholder="Precio Platillo"
                            defaultValue={producto.precio}
                        />
                    </div>

                    <legend className="text-center">Categoría:</legend>
                    <div className="text-center">
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="categoria"
                                value="postre"
                                onChange={leerValorRadio}
                                checked={producto.categoria === "postre"}
                            />
                            <label className="form-check-label">
                                Postre
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="categoria"
                                value="bebida"
                                onChange={leerValorRadio}
                                checked={producto.categoria === "bebida"}
                            />
                            <label className="form-check-label">
                                Bebida
                            </label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="categoria"
                                value="cortes"
                                onChange={leerValorRadio}
                                checked={producto.categoria === "cortes"}
                            />
                            <label className="form-check-label">
                                Cortes
                            </label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="categoria"
                                value="ensalada"
                                onChange={leerValorRadio}
                                checked={producto.categoria === "ensalada"}
                            />
                            <label className="form-check-label">
                                Ensalada
                            </label>
                        </div>
                    </div>

                    <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Editar Producto" />
                </form>
            </div>
        </Fragment>
    )
}
export default EditarProducto;