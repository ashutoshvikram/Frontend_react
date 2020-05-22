import React from "react";
import { Col, Row, Parallax,Blockquote } from "react-materialize";
import Navgbar from '../Subcompo/Navgbar'
import Footer from "../Subcompo/Footer";
import { useState } from "react";
import { useEffect } from "react";
import { API } from "../helper/Auth";
function Aboutus() {
  const [values,setValues]=useState({email:'',subject:'',message:'',success:false})
  const {email,subject,message,success}=values


  const handleChange=(event,name)=>{
    setValues({...values,[name]:event.target.value})
     
  }
 const handleSubmit=(event)=>{
   event.preventDefault()
   const data={
     email:email,
     subject:subject,
     message:message
   }
   console.warn(JSON.stringify(data))
   fetch(`${API}contactus`,{
     method:'POST',
     headers:{
      'Content-Type':'application/json'
     },
     body: JSON.stringify(data)

   }).then(res=>res.json())
   .then(res=>{
     setValues({...values,success:true})
   })
 }

  return (
    <div>
      <Navgbar/>
      <Col className="jumbotron" s={12} l={12}>
        <h4>Contact us</h4>
        </Col>
      <Row>
      
      <Parallax
            image={
              <img
                alt=""
                src="https://images.pexels.com/photos/3811593/pexels-photo-3811593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
            }
            options={{
              responsiveThreshold: 0,
            }}
          />
        </Row>
      <Row>
       
        <Col s={12} l={6}>
          <div className="bkground">
<h3 className="bkgroundtxt">Contact Information</h3>
</div>
<h5>We’re here to help and answer any question you might have.<br/> We look forward to hearing from you 🙂
<br/>
<br/>
Email: webmags76@gmail.com
<br/>
<br/>
Phone: +91-9340567455
<br/>
<br/>
Address: Gwalior India</h5>
         
        </Col>
        <Col s={12} l={6}>
        <form onSubmit={event=>handleSubmit(event)}>
          <h3>You can give your feedback here</h3>
            <label className="contactlabel">Email</label>
            <input style={{fontSize:'30px',border:'2px solid black'}} 
             type="text" name="" id="" onChange={event=>handleChange(event,'email')}/>
            <label className="contactlabel">Subject</label>
            <input style={{fontSize:'30px',border:'2px solid black'}}
             type="text"  onChange={event=>handleChange(event,'subject')}/>
            <textarea 
            style={{height:'200px',fontSize:'30px',border:'2px solid black'}}
            onChange={event=>handleChange(event,'message')}
            placeholder="Message" >

             </textarea>
             <button type="submit">Submit</button>
          </form>
         
        </Col>
      </Row>
      <Row>
        <div>
          <Parallax
            image={
              <img
                alt=""
                src="https://images.pexels.com/photos/3585001/pexels-photo-3585001.jpeg"
              />
            }
            options={{
              responsiveThreshold: 0,
            }}
          />
          <div className="section white">
            <div className="row container">
              <Row>
                <Col s={6}>
              <div className="bkground">
              <h2 className="bkgroundtxt">About us</h2>
              </div>
              </Col>
              <Col s={6}>
              <p className="grey-text text-darken-3 lighten-3">
                <h5>At Buy & Sell it we provide a platform to meet the seller and buyer.<br/>
                We try to provide you the best user experience along with all functionalities.
                  </h5><br/>
                
                <h4>“We improvise, experiment and listen to our customers” </h4>
               
              </p>
              </Col>
              </Row>
            </div>
          </div>
          <Parallax
            image={
              <img
                alt=""
                src="http://materializecss.com/images/parallax2.jpg"
              />
            }
            options={{
              responsiveThreshold: 0,
            }}
          />
        </div>
      </Row>
      <Footer/>
    </div>
  );
}

export default Aboutus;
