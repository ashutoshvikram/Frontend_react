import React, { Component,useState,useEffect } from 'react';
import '../index.css'
import {Col,Row} from 'react-materialize'
import Navgbar from '../Subcompo/Navgbar';
import {Link} from 'react-router-dom'
import Addcategory from '../Subcompo/Addcategory'
import AddForm from './AddForm';
import Footer from '../Subcompo/Footer'
function PostAdd1(props){

    return ( <div>
        
        <Navgbar/>
        <Row>
            <div className="catte">
        <Addcategory/>
        </div>
      
        <Col l={8} >
       <AddForm cat={props.match.params.category}/>
            </Col>
        </Row>
        <Footer/>
        </div>);
}
export default PostAdd1;