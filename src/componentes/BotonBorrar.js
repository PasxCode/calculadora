import React from "react";
import '../hojas-de-estilo/BotonBorrar.css'
const botonBorrar = (props) => (
  <div className='boton-clear' onClick={props.manejarClear}>
    {props.children}
  </div>
);
export default botonBorrar;