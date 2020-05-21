import React, { Component } from "react";

import { Slider, Slide, Caption, image, placement } from "react-materialize";

class Sliders extends Component {
  render() {
    var a=window.screen.height/1.5;
    console.warn(a)
    return (
      <Slider
    fullscreen={false}        
        options={{
          duration: 500,
          height:a,
          indicators: true,
          interval: 3000
        }}
      >
        <Slide
          image={
            <img
              alt="first image"
              src="living1.jpg"
            />
          }
        >
          <Caption placement="center">
            <h3>Just sell it..</h3>
            <h5 className="light grey-text text-lighten-3">
              in many categories..
            </h5>
          </Caption>
        </Slide>
        <Slide
          image={
            <img
              alt=""
              src="rooms.jpg"
            />
          }
        >
          <Caption placement="left">
            <h3>You can also deal in household products.</h3>
            <h5 className="light grey-text text-lighten-3">
            
            </h5>
          </Caption>
        </Slide>
        <Slide
          image={
            <img
              alt=""
              src="fordcar.jpg"
            />
          }
        >
          <Caption placement="right">
            
            <h3 className="light grey-text text-lighten-3">
              You can also deal in automobiles
            </h3>
          </Caption>
        </Slide>
        <Slide
          image={
            <img
              alt=""
              src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg"
            />
          }
        >
          <Caption placement="center">
            <h3>also in Electronics..</h3>
           
          </Caption>
        </Slide>
      </Slider>
    );
  }
}
export default Sliders;
