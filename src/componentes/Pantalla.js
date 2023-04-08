import React from 'react';
import '../hojas-de-estilo/Pantalla.css';

const Pantalla = (props) => (
  <div className='input'
  onClick = { () => props.manejarKeyDown}>
    {props.input}
  </div>
);
export default Pantalla;