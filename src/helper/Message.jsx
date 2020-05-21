import React, { Component } from 'react';



function Message (props){
  
   console.log('indoosra')
    return (
        
        <div id="msc"  className={"alert  fade show mb-auto "+props.mestype} role="alert">
  <strong>Hey User!</strong> {props.mes}
  <button type="button" className="close"  aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
    
)


}
export default Message