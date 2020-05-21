import React from "react";
import ReactDom from "react-dom";
import {Link } from 'react-router-dom'
import '../index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPhone,
  faEnvelopeSquare
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faTwitter,
  faInstagramSquare,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";
import { Row, Col } from "react-materialize";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="cusfooter">
        <div className="container ">
          <Row>
            <Col s={12} l={3}>  
              <h5>Buy & Sell it</h5>
              <p>
                At Buy & Sell it we are there to serve you better always. 
              </p>
              <p>
                You can easily post the add and buyer can contact you via email.
                If you are interested you can deal further.
              </p>
            </Col>

            <Col s={12} l={3}>
              <h5 className="font-weight-bold center-align">About</h5>

              <ul className="list-unstyled center-align">
                <li>
                  <p>
                    <a href="#!">PROJECTS</a>
                  </p>
                </li>
                <li>
                  <p>
                    <Link to="/aboutus">ABOUT US</Link>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#!">BLOG</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#!">AWARDS</a>
                  </p>
                </li>
              </ul>
            </Col>

            <Col s={12} l={3}>
              <h5 className="font-weight-bold text-uppercase mb-4">Address</h5>

              <ul className="list-unstyled">
                <li>
                  <p>
                    <FontAwesomeIcon icon={faHome} className="logofb" />
                   ITM GOI, GWALIOR, INDIA
                  </p>
                </li>
                <li>
                  <p>
                    <FontAwesomeIcon
                      icon={faEnvelopeSquare}
                      className="logofb"
                    />{" "}
                    webmags@gmail.com
                  </p>
                </li>
                <li>
                  <p>
                    <FontAwesomeIcon icon={faPhone} className="logofb" /> + 91
                    9340567455
                  </p>
                </li>
              </ul>
            </Col>

            <hr />

            <Col s={12} l={3}>
              <h5 className="font-weight-bold text-uppercase mb-4">
                Follow Us
              </h5>

              <a type="button" className="btn-floating btn-fb ">
                <FontAwesomeIcon icon={faFacebookSquare} className="logofb" />
              </a>
              <br />
              <a type="button" className="btn-floating btn-tw">
                <FontAwesomeIcon icon={faTwitter} className="logofb" />
              </a>
              <br />
              <a type="button" className="btn-floating btn-gplus">
                <FontAwesomeIcon icon={faInstagramSquare} className="logofb" />
              </a>
            </Col>
          </Row>
        </div>

        <div className="center-align footer-copyright text-center py-3">
          ©Buy & Sell it 2020 Copyright:
        </div>
      </div>
    );
  }
}
export default Footer;
