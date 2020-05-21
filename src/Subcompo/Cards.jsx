import React, { useState } from 'react';
import Reactdom from 'react-dom';

 import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt,faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import { Row, Card, Col, CardTitle, Icon } from "react-materialize";
import { API } from '../helper/Auth';

function Cards(props) {

  const [deleted,setDeleted]=useState({success:false})
  const newtitle=props.title.split(" ")
  const newdate=props.date_post.slice("T")
  var ad=new Date(newdate)
  ad=ad.toDateString()
  ad=ad.slice(3)
  const deleteAdd=()=>{
    const token=localStorage.getItem('token')
    fetch(`${API}deleteadd/${props.id}`,{
     
      method:'DELETE',
      headers:{
        Authorization:"Bearer "+token
      }
    }).then(res=>res.json()).then(res=>{
        alert('deleted')
        setDeleted({...deleted,success:true})
    }).catch(err=>console.error(err))
  }
  return (
    <Col m={4} s={6} l={3}>
      <Card
        className="card small border rowcard"
        closeIcon={<Icon>close</Icon>}
        header={
          <CardTitle
            image={props.image}
            reveal
            waves="light"
          />
        }
        reveal={
          <p>
           {props.description}
          </p>
        }
        revealIcon={<Icon>:</Icon>}
        title={<Link className="cardlink" to={"/add/"+newtitle[0]+"/"+props.id}>{props.price}
        
        </Link>}
      >
        <p>
        <Link  className="cardlink" to={"/add/"+newtitle[0]+"/"+props.id}>{props.title}</Link>
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{props.delete==='true'?
      <FontAwesomeIcon className="delicon" icon={faTrashAlt} size="lg" onClick={deleteAdd()}/>:null}
    
           </p>
        
        <Row>
          <Col s={6}>
        <h6><FontAwesomeIcon icon={faMapMarkerAlt} size="sm"/>{props.location} </h6>
        </Col>
        <Col s={6}>
         <h6>{ad}</h6>
        </Col>
        </Row>
      </Card>
    </Col>
  );
 }

export default Cards;