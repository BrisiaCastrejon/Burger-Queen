import React, {Component} from 'react';
import withAuthorization from './withAuthorization';
/*import firebase from 'firebase'
import {config} from './../firebase/key';
import 'firebase/database';*/
// estilos 
import './Home.css';

// componentes
import Board from '../components-panel/Board';
import BoardContent from '../components-panel/BoardContent';
import Menu from './../components-panel/Menu';

class HomePage extends Component{
  /*constructor(){
    super();
    this.state = {
      notes:[]
    };
    this.app= firebase.initializeApp(config);
    this.db=this.app.database().ref().child('notes');
    this.addNote = this.addNote.bind(this);
    this.removeNote=this.removeNote.bind(this);
  }
  componentDidMount(){
    const {notes} = this.state;
    this.db.on('child_added', snap => {
      notes.push({
        noteId:snap.key,
        noteContent:snap.val().noteContent
      })
      this.setState({notes});
    });
    this.db.on('child_removed', snap =>{
      notes.forEach(note =>{
        if (note.noteId = snap.key) {
          notes.splice(note, 1)  
        }
      })
      this.setState({notes});
    })
  }
  removeNote(noteId){
    this.db.child(noteId).remove();
  }
  addNote(note){    
   this.db.push().set({noteContent:note})
  }*/
  render(){
      return(
        <div className="container">
        <div className="row">
          <div className="col-md-6">
          <Menu />
          </div>
          <div className="col-md-3">
          <Board  />
          </div>
          <div className="col-md-3">
          <BoardContent />
          </div>
          </div>
        </div>
  
      )
    }
  }
const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(HomePage);

/*import React from 'react';

import withAuthorization from './withAuthorization';
// estilos 
import './Home.css';

// componentes
import Note from './../components-panel/Note';
import NoteForm from './../components-panel/NoteForm';
import Menu from './../components-panel/Menu';

const HomePage = () =>
  <div className="container">
  <div className="row">
    <div className="col-md-6">
    <Menu />
    </div>
    <div className="col-md-3">
    <NoteForm />
    </div>
    <div className="col-md-3">
    <Note />
    </div>
    </div>
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);*/