import React from 'react';
function MenuBreakfast (props) {
  return(
    <div>
    <div onClick={props.handleCount}>{props.name}</div>
    </div>
  )
}
export default MenuBreakfast;