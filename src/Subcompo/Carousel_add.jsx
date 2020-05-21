import React, { Component } from 'react';
import {Carousel} from 'react-responsive-carousel'

import '../index.css'
import Carouselimg from '../helper/Carouselimg';
 function Carousel_add(props)
{
  console.log(props.proimages[0])
    return (
     
      <Carousel autoPlay  showThumbs={true} className="newheight"> 
        
        <div className="carheight">
        <img alt="" src={"http://localhost:8000"+props.proimages.Product_images0} />
        <p className="legend">Legend 1</p>
      </div>
      <div className="carheight">
        <img alt="" src={"http://localhost:8000"+props.proimages.Product_images1} />
        <p className="legend">Legend 1</p>
      </div>

      <div className="carheight">
        <img alt="" src={"http://localhost:8000"+props.proimages.Product_images2} />
        <p className="legend">Legend 1</p>
      </div>
      <div className="carheight">
        <img alt="" src={"http://localhost:8000"+props.proimages.Product_images3} />
        <p className="legend">Legend 1</p>
      </div>
      <div className="carheight">
        <img alt="" src={"http://localhost:8000"+props.proimages.Product_images4} />
        <p className="legend">Legend 1</p>
      </div>
      <div className="carheight">
        <img alt="" src={"http://localhost:8000"+props.proimages.Product_images5} />
        <p className="legend">Legend 1</p>
      </div>
      <div className="carheight">
        <img alt="" src={"http://localhost:8000"+props.proimages.Product_images6} />
        <p className="legend">Legend 1</p>
      </div>
      <div className="carheight">
        <img alt="" src={"http://localhost:8000"+props.proimages.Product_images7} />
        <p className="legend">Legend 1</p>
      </div>
      <div className="carheight">
        <img alt="" src="/rooms.jpg"/>
        <p className="legend">Legend 1</p>
      </div>



         {/* {props.proimages.map(proimages=>{
           return(<div>
              <div className="carheight">
           <img alt=""  src={"http://localhost:8000"+proimages.Product_images0}/>
         
            </div>
            <div className="carheight">
           <img alt="" src={"http://localhost:8000"+proimages.Product_images1}/>
          
            </div>
            <div className="carheight">
           <img alt="" src={"http://localhost:8000"+proimages.Product_images2}/>
           </div>
            <div className="carheight">
           <img alt="" src={"http://localhost:8000"+proimages.Product_images3}/>
           
            </div>
            <div className="carheight">
           <img alt="" src={"http://localhost:8000"+proimages.Product_images4}/>
           
            </div>
            <div className="carheight">
           <img alt="" src={"http://localhost:8000"+proimages.Product_images5}/>
          
            </div>
            <div className="carheight">
           <img alt="" src={"http://localhost:8000"+proimages.Product_images6}/>
           
            </div>
            <div className="carheight">
           <img alt="" src={"http://localhost:8000"+proimages.Product_images7}/>
           
            </div>




           </div>);
         })
        }
            */}
            
        
       </Carousel>
        );
}

      /* <div className="carheight">
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg"/>
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
        <p className="legend">Legend 6</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
        <p className="legend">Legend 7</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
        <p className="legend">Legend 8</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
        <p className="legend">Legend 9</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" />
        <p className="legend">Legend 10</p>
      </div>
       */
   


export default Carousel_add;