
import './App.css';
import logoApp from './imagenes/Logo_PASXCODE.png';
import Boton from './componentes/Boton'
import BotonBorrar from './componentes/BotonBorrar';
import Pantalla from './componentes/Pantalla';
import { useState} from 'react';
import { evaluate, string } from 'mathjs';

function App() {

  let [input,setInput] = useState('');

  const agregarInput = valor => {

    if ((valor==='+')||(valor==='-')||(valor==='*')||(valor==='/')){
      for (let i=0;i<input.length;i++){
        if ((input[i]==='+')||(input[i]==='/')||(input[i]==='*')||(input[i]==='-')){
          return;
        }
      }
    } //si introduzco operador y ya existe aborto.
 
    if (valor==='.'){
      let hayOperador=false;
      let primerDecimal = false;
      let segundoDecimal= false;
      for (let i=0;i<input.length;i++){
        if ((input[i]==='+')||(input[i]==='/')||(input[i]==='*')||(input[i]==='-')){
            hayOperador=true;
            primerDecimal=true;
        }            
        if ((input[i]==='.')&&(!primerDecimal)&&(!hayOperador)) {primerDecimal=true;}
        if((input[i]==='.')&&(hayOperador)&&(!segundoDecimal)){segundoDecimal=true;}
      }  
      if((primerDecimal)&&(!hayOperador)){console.log("aborto if priemer deciamal"+primerDecimal+hayOperador);return;}
      if((hayOperador)&&(segundoDecimal)){console.log("aborto if segundo decimal"+hayOperador+segundoDecimal);return;}  
    } //si introduzco punto y no procede aborto...
    
    setInput(input+valor);//Insertamos el muevo valor si procede.
  };


  const manejarKeyDown = e => {
    if ((e.keyCode>47)&&(e.keyCode<58)&&(!e.shiftKey)) { //Comprobamos si es un número.
      const tecla = string(e.keyCode-48);
      setInput(input+tecla);
    } else {
        if ((e.key===".")||(e.key==="+")||(e.key==="*")||(e.key==="-")||(e.key==="/")){
          agregarInput(e.key);
        }
        else if ((e.key==="=")) {
          calcularResultado();
        }
    }
  }

  const calcularResultado = () => {
    if(input){
      try{
          setInput(evaluate(input));
      } catch (error){
          alert('No válido.');
          setInput('');
      }
    }else{
      setInput('');
    }  
  }

  return (
    <div className="App" tabIndex="0" onKeyDown={manejarKeyDown} >
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
