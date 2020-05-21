import React, { Component, Fragment } from "react";
import "../index.css";
import Navgbar from "../Subcompo/Navgbar";
import { Link, Redirect, withRouter,BrowserRouter as Router } from "react-router-dom";
import { Row, Col, Container } from "react-materialize";
import Message from "../helper/Message";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      location: "",
      mobno: "",
      email: "",
      password: "",
      success: "",
      error: false
    };
  }

  handleChange(event, name) {
    this.setState({
      [name]: event.target.value
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      location: this.state.location,
      mobno: this.state.mobno
    };
    console.log(data);
    fetch("https://buysellit.herokuapp.com/api/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/plain, */*"
      }
    })
      .then(res => res.json())

      .then(res => {
        if (res.success === true) {
          this.setState({ success: true });
        } else {
          this.setState({ error: true });
        }
      });
  };

  render() {
    if (this.state.success === true) {
      return <Redirect to="/login" />;
    }
    else if(localStorage.getItem('name')){
      return <Redirect to="/"/>
    }
    return (
      <div>
        <Navgbar Group="" />
        {this.state.error === true ? (
          <Message
            mestype="alert-danger"
            mes="You have already registered Please Login"
          />
        ) : null}

        <div className="mainlog mainsign">
          <div className="innersign">
            <h2 className="loghead">Sign up</h2>
            <form
              onSubmit={event => this.handleSubmit(event)}
              className="textboxsign"
            >
              <label>First name</label>
              <input
                type="text"
                className="usertext"
                required
                placeholder="Enter First name"
                onChange={event => this.handleChange(event, "firstname")}
              />
              <label>Last name</label>
              <input
                type="text"
                className="usertext"
                placeholder="Enter Last name"
                onChange={event => this.handleChange(event, "lastname")}
              />

              <label>Email</label>
              <input
                type="text"
                className="usertext"
                required
                placeholder="Enter email"
                onChange={event => this.handleChange(event, "email")}
              />

              <label>Password</label>
              <input
                type="password"
                className="usertext"
                required
                name="password"
                placeholder="Enter password"
                onChange={event => this.handleChange(event, "password")}
              />

              <label>Location</label>
              <input
                type="text"
                className="usertext"
                placeholder="Enter your city"
                onChange={event => this.handleChange(event, "location")}
              />

              <label>Mobile no.</label>
              <input
                type="text"
                className="usertext"
                required
                placeholder="Enter Mobile no."
                onChange={event => this.handleChange(event, "mobno")}
              />

              <button type="submit" className="subbutton">
                SUBMIT
              </button>
              <p className="signline">
                Already have an account <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
