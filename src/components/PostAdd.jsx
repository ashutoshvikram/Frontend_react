import React, { Component,useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import {Col,Row} from 'react-materialize'
import Navgbar from '../Subcompo/Navgbar';
import Footer from '../Subcompo/Footer'
import AddForm from './AddForm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight
 
} from "@fortawesome/free-solid-svg-icons";
import Addcategory from '../Subcompo/Addcategory';
function PostAdd(){

    return ( <div>
        
        <Navgbar/>
        <Row>
       <Addcategory/>
        <Col l={9} s={8}>
    <h4 style={{marginLeft:'20px'}}>Please Select the category of Add</h4>
            </Col>
        </Row>
        <Row>
            
        <Footer/>
        
        </Row>
        </div>);
}
export default PostAdd;