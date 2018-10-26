import React from 'react';
function MenuDinner (props) {
  return(
    <div>
    <div onClick={props.handleCount}><p></p>{props.name}</div>
    </div>
  )
}
export default MenuDinner;