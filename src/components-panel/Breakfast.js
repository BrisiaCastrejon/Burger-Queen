import React, { Component } from 'react';
// componente
import MenuBreakfast from './MenuBreakfast';
//estilos
import './Breakfast.css'

class Breakfast extends Component {
  constructor() {
    super();
    this.state={
      button:"Desayuno",
      lunch:[
         { 
          id:0,
          item:"Café americano",
          precio:5
        },
        { 
          id:2,
          item:"Café con leche", 
          precio:7
        },
        { 
          id:3,
          item:"Sandwich de jamón y queso", 
          precio:10
        },
        { 
          id:4,
          item:"Jugo natural", 
          precio:7
        }
      ]
    }
  }
render(){  
  return(
    <div>
      {
        this.state.lunch.map((i)=>{
          return <div><MenuBreakfast key={i.id} name={i.item} /><button className="btn btn-lg precio">${i.precio}</button></div>
        })
      }
    </div>
  )
}
}
export default Breakfast;

/*
return <Menu key={item.id} Titulo={item.Titulo} handleIteration={() => this.handleIteration(item.id)}/>
*/