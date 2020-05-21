import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contactus extends Component {
    state = {  }
    render() { 
        return (<div><h1>Contact us</h1>
        <h1>Ashutosh Vikram Singh</h1>
        <h1><Link to="/">Home</Link></h1>
        <h1>Ashutosh Vikram Singh</h1></div>  );
    }
}
 
export default Contactus;