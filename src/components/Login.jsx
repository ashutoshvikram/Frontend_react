import React, { Component, Fragment } from 'react';
import  '../index.css'
import Navgbar from '../Subcompo/Navgbar';
import Recaptcha from "react-recaptcha";
import {Link,Redirect,withRouter,BrowserRouter as Router} from 'react-router-dom';
import Auth  from '../helper/Auth';
import Message from '../helper/Message'
import {API} from '../helper/Auth'
class Login extends Component {
    constructor(props) {
        console.log('in login');
        super(props);
        this.state = {
            email: "",
            password:"",
            success:false,
            isloading:false,
            error:false,
            token:'',
           captcha:false,
          }
          this.messages = this.messages.bind(this);
          this.verifyCallback = this.verifyCallback.bind(this);
    }
    
    handleChange(event,name){
        
        this.setState({
            [name]: event.target.value
        })
    }
    verifyCallback(response){
        if (response){
            
            this.setState({
                captcha:true
            })
        }
    }
    handleSubmit=event=>{
        event.preventDefault();
        



        const data={'email':this.state.email,'password':this.state.password,}
        console.log(data);
        fetch(`${API}login`,{
            method: 'POST',
            body: JSON.stringify(data),
           
            headers:{
                'Content-Type':'application/json',
            }
        })
        
        .then(res=>res.json())
        .then(res=>{
            this.setState({token:res.token,success:true,isloading:true})
            console.warn(res.user.name)
            localStorage.setItem("name",res.user.name)
            localStorage.setItem("token",res.token)
        
        }).catch(err=>console.log(err))
       
        
              
    }
    messages(){
        console.warn('in messages')
        return (
          <  Fragment>
            <Navgbar Group=""/>
           
           <div className="btn btn-primary">ashutosh</div>
           <Message mestype="alert-danger" mes="You have entered incorrect Email or Passsword"/>
           </Fragment>)
           
    }
    
    render() { 
        console.log(Auth())
       
         if (this.state.success===true && this.state.captcha===true)
        {
           return (<Redirect to="/"/>);
            
        }
       

                return (
                <div>
            <Navgbar Group="" />
            {this.state.error===true?<Message mestype="alert-danger" mes="You have entered incorrect Email or Passsword"/>:null}
        <div className="mainlog">
        <div className="innerlog">
            <h2 className="loghead">Log in</h2>
            <form onSubmit={event=>this.handleSubmit(event)}   className="textbox">
                <input type="text" required className="usertext"name="name" placeholder="Enter email" onChange={(event)=>this.handleChange(event,"email")}/>
                <input type="password"  required className="usertext" name="password" placeholder="Enter password" onChange={(event)=>this.handleChange(event,"password")}/>
                <Recaptcha
    sitekey="6LdPPeUUAAAAABBcLc0s0AA01hbhcMEQggfqc8T_"
    render="explicit"
    verifyCallback={this.verifyCallback}
    // onloadCallback={thiscallback}
  />,
               
                <br/>
                <button type="submit" className="logbutton">LOGIN</button>
            </form>
            <p className="signline">Don't have an account <Link to="/signup" className="cardlink"> Signup</Link></p>
        </div>
        </div>
     
        </div>
           );
    }
}
 
export default withRouter(Login);