import React, {Component} from 'react';
import './BoardContent.css';

class NoteForm extends Component{
  constructor(){
    super();
    this.addNote = this.addNote.bind(this)
  }
  addNote () {
    this.props.addNote(this.textInput.value);
    this.textInput.value ='';
    this.textInput.focus();
    
  }
  render (){
    return(
      <div className="BoardContent">
        <input 
        ref={input => {this.textInput = input;}}
        placeholder="Escribe el menu"
        type="text"/>
        <button onClick={this.addNote}>
          Agrega a la cuenta
        </button>
      </div>
    )
  }
}
export default NoteForm;