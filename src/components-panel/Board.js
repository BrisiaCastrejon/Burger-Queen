import React, {Component} from "react";
import './Board.css';
class Note extends Component {
  constructor(props){
    super(props);
    this.noteContent = props.noteContent;
    this.noteId = props.noteId;
  }
  handleRemove (id) {
    const response = window.confirm('Se eliminará la nota');
    if (response) {
      this.props.removeNote(id);
    }
    return;
  }
  render(){
    return(
    <div className='Board'>
    <span onClick={()=> this.handleRemove(this.noteId)}>X</span>
      <p>{this.noteContent}</p>
    </div>
   )
  }  
}
export default Note;



/*import React, { Component } from 'react';
// estilos
import './Board.css'

class Board extends Component {
render(){  
  return(
    <div className="container caja-board">
      <div className="row caja-row-board ">
        <div className="col ">
          <p>
            Datos del cliente 
          </p>
          <p>
            Nombre: Brisia
          </p>
          <p>
            Mesa: 12
          </p>
          <div>
            <p>Producto/s </p>
            <p>
              Café americano ..... 5
            </p>
            <p>
              Sandwich de jamón y queso ........10
            </p>
            <p>Total ..... 15</p>
          </div>
          <button className="btn btn-lg enviar">Enviar a Cocina</button>
        </div>
      </div>
    </div>
  )
}
}
export default Board;
*/