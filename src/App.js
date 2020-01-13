import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import axios from "axios";

import {Navbar} from "./Components/Navbar";
import Productos from "./Components/Productros/Productos";
import EditarProducto from "./Components/Productros/EditarProducto";
import AgregarProducto from "./Components/Productros/AgregarProducto"
import Producto from "./Components/Productros/Producto";

function App(){
      //declaramos el state
      const [productosconsulta, setProductos] = useState([]);
      const [recharge, saveRecharge ] = useState(true);

      useEffect(() => {
          if (recharge){
              const consultarApi = async () => {
                  //consultar la api de json server
                  const resultado = await axios.get('http://localhost:4000/restaurant');

                  //console.log(resultado.data);
                  setProductos(resultado.data);
              }
              consultarApi();

              //cambiamos a false el recharge
              saveRecharge(false);
          }
      }, [recharge])
      return (
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path={'/'} render={ () => (
                <Productos
                   productos={productosconsulta}
                />
            )}
          />
          <Route exact path={'/nuevo-producto'} render={() => (
              <AgregarProducto
                recharge={saveRecharge}
              />

              )}/>
          <Route exact path={'/producto/:id'} component={Producto}/>
          <Route exact path={'/producto/editar/:id'} render={ props => {
              //sacamos el id del producto mediante las props
              const idProducto = parseInt(props.match.params.id);
              return(
                <EditarProducto idProduct={idProducto}/>
              )}
          }/>
        </Switch>
      </Router>
    );
}

export default App;
