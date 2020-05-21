import React from 'react';
import '../index.css'
export default function Carouselimg(props){
    return(
<div className="carheight">
<img alt="" src={props.p_images} />
    <p className="legend">Legend</p>
</div>
    );
}