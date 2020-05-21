import React, { Component,useState,useEffect } from 'react';
import '../index.css'
import {Link} from 'react-router-dom'
import {Col,Row} from 'react-materialize'
import Footer from './Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight
 
} from "@fortawesome/free-solid-svg-icons";
export default function Addcategory(){
    return (
      <div className="catte">
      <Col l={3} s={6} className="purple accent-3">
      <h3>CATEGORY</h3>
      <Link to="/post/Property"> <h5  className="categorypost">Property<FontAwesomeIcon icon={faArrowRight} size='xs'/></h5> </Link> <br/>
      
    
      <Link to="/post/Automobiles"><h5  className="categorypost"> Automobile<FontAwesomeIcon icon={faArrowRight} size='xs'/></h5></Link><br/>
   
  
      <Link to="/post/Electronics"><h5  className="categorypost"> Electronics<FontAwesomeIcon icon={faArrowRight} size='xs'/></h5></Link><br/>
      
  
      <Link to="/post/Mobiles"> <h5  className="categorypost"> Mobiles <FontAwesomeIcon icon={faArrowRight} size='xs'/></h5></Link><br/>
  
  
      <Link to="/post/Laptop"> <h5  className="categorypost"> Laptop<FontAwesomeIcon icon={faArrowRight} size='xs'/></h5></Link><br/>
  
  
      <Link to="/post/Furnitures"> <h5  className="categorypost">Furnitures <FontAwesomeIcon icon={faArrowRight} size='xs'/></h5></Link><br/>
      
  
      <Link to="/post/ElectricalAppiances"><h5  className="categorypost">Electrical Appliances <FontAwesomeIcon icon={faArrowRight} size='xs'/></h5></Link><br/>
      
      </Col>
      </div>
        );
}