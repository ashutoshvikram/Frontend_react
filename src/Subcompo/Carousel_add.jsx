import React, { Component } from 'react';
import {Carousel} from 'react-responsive-carousel'

import '../index.css'
import Carouselimg from '../helper/Carouselimg';
 function Carousel_add(props)
{
  console.log(props.proimages[0])
    return (
     
      <Carousel autoPlay  showThumbs={true} className="newheight"> 
        {props.proimages.map(img=>{
return (
<div className="carheight">
<img alt="" src={img} />
<p className="legend">Legend 1</p>
</div>);
        }
        )
        }
        
        </Carousel>
    );
}

export default Carousel_add;