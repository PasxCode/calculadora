
import './App.css';
import logoApp from './imagenes/Logo_PASXCODE.png';
import Boton from './componentes/Boton'
import BotonBorrar from './componentes/BotonBorrar';
import Pantalla from './componentes/Pantalla';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input,setInput] = useState('');

  const agregarInput = valor => {
    setInput(input+valor);
  };

  const calcularResultado = () => {
    if(input){
      try{
       setInput(evaluate(input));
      } catch (error){
        alert('Introduccion no válida.');
        setInput('')
      }
    }else{
      alert('Ingrese valores correctos...');
    }  
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          src={logoApp}
          className='logo'
          alt='Logo de aplicación'/>
      </div>

      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>          
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
        <BotonBorrar manejarClear={() => setInput('')}>Borrar</BotonBorrar>

        </div>

      </div>

    </div> /*del app*/
  );
}

export default App;
