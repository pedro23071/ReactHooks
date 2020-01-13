import React, { Fragment, useState} from 'react';
import {withRouter} from 'react-router-dom';
import {Error} from "./Error";
import axios from 'axios';
import Swal from 'sweetalert2';

function AgregarProducto ({history, recharge}){
    const [nombre, guardarNombre ] = useState('');
    const [precio, guardarPrecio ] = useState('');
    const [categoria, guardarCategoria ] = useState('');
    const [error, guardarError ] = useState(false);

    const leerValorRadio = (e) => {
        guardarCategoria(e.target.value);
    }

    const agregarProducto = async e => {
        e.preventDefault();

        //validamos el formulario
        if (nombre === '' || precio === '' || categoria === ''){
            guardarError(true);
            return;
        }

        guardarError(false);

        //crear nuevo producto
        try {
            const resultado =  await axios.post('http://localhost:4000/restaurant', {
                "precio": precio,
                "nombre": nombre,
                "categoria": categoria
            });
            if (resultado.status === 201){
                Swal.fire(
                    'Hecho',
                    'Producto agregado correctamente!',
                    'success'
                )
            }
            //redirigir al usuario a productos
            recharge(true);
            history.push('/');

        }catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor intente de nuevo!',
            })
        }

    }

    return(
        <Fragment>
            <div className="col-md-8 mx-auto ">
                <h1 className="text-center">Agregar Nuevo Producto</h1>

                { (error) ? <Error mesage={'Todos los campos son requeridos'}/> : null }

                <form
                    onSubmit={agregarProducto}
                    className="mt-5"
                >
                    <div className="form-group">
                        <label>Nombre Platillo</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre"
                            placeholder="Nombre Platillo"
                            onChange={(e) => guardarNombre(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Precio Platillo</label>
                        <input
                            type="number"
                            className="form-control"
                            name="precio"
                            placeholder="Precio Platillo"
                            onChange={(e) => guardarPrecio(e.target.value)}
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
                            />
                            <label className="form-check-label">
                                Ensalada
                            </label>
                        </div>
                    </div>

                    <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Producto" />
                </form>
            </div>
        </Fragment>
    )
}

export default withRouter(AgregarProducto);