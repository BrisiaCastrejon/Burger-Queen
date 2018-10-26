import React, { Component } from 'react';
// componente
import MenuDinner from './MenuDinner';

class Dinner extends Component {constructor() {
  super();
  this.state={
    button:"Comida",
    lunch:[
      {
        id:1,
        item:"Hamburguesa de res sencilla", 
        precio:10
      },
      {
        id:2,
        item:"Hamburguesa de res doble",
        precio:15 
      },
      { 
        id:3,
        item:"Hamburguesa de pollo sencilla",
        precio:10
      },
      {
        id:4,
        item:"Hamburguesa de pollo doble", 
        precio:15 
      },
      { 
        id:5,
        item:"Hamburguesa de vegetariana sencilla", 
        precio:10 
      },
      {
        id:6,
        item:"Hamburguesa de vegetariana doble", 
        precio:15 
      },{ 
        id:1, 
        item:"Agua de 500ml", 
        precio:5
      },
      { 
        id:2, 
        item:"Agua de 750ml", 
        precio:8
      },
      { 
        id:3, 
        item:"Refresco de 500ml", 
        precio:7
      },
      { 
        id:4, 
        item:"Refresco de 750ml", 
        precio:10
      },
      { 
        id:5,
        item:"Jugo natural sencillo", 
        precio:10 
      },
      { 
        id:6,
        item:"Jugo doble", 
        precio:15 
      },
      {
        id:1,
        item:"Papas fritas", 
        precio:5
      },
      {
        id:2,
        item:"Aros de cebolla", 
        precio:5
      },
      {
        id:1,
        item:"máshuevo", 
        precio:1
      },
      { id:2,
        item:"más queso", 
        precio:1
      }
    ]
  }
}
render(){  
return(
  <div>
    
    {
      this.state.lunch.map((i)=>{
        return <div><MenuDinner key={i.id} name={i.item} /><button className="btn btn-lg precio">${i.precio}</button></div>
      })
    }
  </div>
)
}
}
export default Dinner;