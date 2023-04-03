
import './App.css';
import logoApp from './imagenes/Logo_PASXCODE.png';
import Boton from './componentes/Boton'
import BotonBorrar from './componentes/BotonBorrar';
import Pantalla from './componentes/Pantalla';
import { useState, useEffect } from 'react';
import { evaluate, string } from 'mathjs';

function App() {

  const [input,setInput] = useState('');

  const agregarInput = valor => {
    setInput(input+valor);
  };


  useEffect(() => {
    window.addEventListener("keydown", manejarKeyDown);
    return () => window.removeEventListener("keydown", manejarKeyDown);
  }, []);

  const manejarKeyDown = e => {
        /*
         codigo de la tecla pulsada:
            Enter = 13
            Esc = 27
            '0' = 48 ... '9' = 57
            '+' =
            '-' =
            '/' =
            '*' = 
        */
    if ((e.keyCode>47)&&(e.keyCode<58)) {
      const tecla = string(e.keyCode-48);
      console.log('ha pulsado la tecla '+tecla);
      setInput(input+tecla);
      console.log('el valor de variable "input" es'+input);
    } else {
      console.log("otra cosa");
    }
  }

  const calcularResultado = () => {
    if(input){
      try{
       setInput(evaluate(input));
      } catch (error){
        alert('Introduccion no válida.');
        setInput('');
      }
    }else{
      alert('Ingrese valores correctos...');
      setInput('');
    }  
  }

  return (
    <div className="App" onKeyDown={manejarKeyDown}>
      <div className='logo-contenedor'>
        <img
          src={logoApp}
          className='logo'
          alt='Logo de aplicación'/>
      </div>

      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
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
