import React, { Component } from 'react';
// estilos
import './Menu.css'
// componente
import Breakfast from './Breakfast';
import Dinner from './Dinner';

class Menu extends Component {
  constructor(){
    super();
    this.state = {
      mostrarDesa:false

    }
  }
  onClickDesayuno () {
    this.setState(prevState => ( {mostrarDesa:!prevState.mostrarDesa}))
  }
  onClickComida () {
    this.setState(prevState => ( {mostrar:!prevState.mostrar}))
  }
render(){  
  return(
    <div className="container caja-panel">
      <div className="row align-items-center">
      <div className="col-md-4">
        <button onClick={()=> this.onClickDesayuno()}className="btn btn-lg eleccion-botones">Desayuno</button>
        {
          this.state.mostrarDesa 
          ? <Breakfast /> 
          :null 
        }
        
      </div>
      <br/>
      <div className="col-md-4 ">
        <button onClick={()=> this.onClickComida()} className="btn btn-lg eleccion-botones">Comida</button>
        {
          this.state.mostrar 
          ? <Dinner /> 
          :null 
        }        
      </div>
    </div>
    </div>
  )
}
}
export default Menu;