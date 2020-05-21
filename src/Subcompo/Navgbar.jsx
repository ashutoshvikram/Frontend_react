import React, { Fragment, useState } from "react";
import Reactdom from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "../App.css";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  Link,
  withRouter,
  BrowserRouter as Router,
  useHistory,
  Redirect
} from "react-router-dom";
import Message from "../helper/Message";
import Auth from "../helper/Auth";
import { logout } from "../helper/Auth";
import {
  Navbar,
  Toast,
  NavItem,
  Icon,
  TextInput,
  Button,
  Dropdown,
  Collapsible,
  CollapsibleItem,
  Col,
  Row
} from "react-materialize";
function Navgbar() {
  const [searchkey,setSearchKey]=useState({name:'',succcess:false})
  const {name,success}=searchkey
  const [open, setOpen] = useState(false);
  const onOpenModal = () => {
    setOpen(true);
  };
  const onCloseModal = () => {
    setOpen(false);
  };
  const [open2, setOpen2] = useState(false);
  const onOpenModal2 = () => {
    setOpen2(true);
  };
  const onCloseModal2 = () => {
    setOpen2(false);
  };
  let history = useHistory();
  const searchchange=(event)=>{
    setSearchKey({name:event.target.value})
  }
  const search = event => {
    event.preventDefault();
    setSearchKey({...searchkey,success:true})
   
  };
  if (success===true){
    return <Redirect to={"/search/"+name}/>
  }
  return (
    <Navbar
      className="navibox"
      alignLinks="right"
      brand={
        <a className=" logolayout" href="#">
          <img
            src="https://images.cooltext.com/5404848.png"
            width="300px"
            height="50px"
            alt="logo"
          />
        </a>
      }
      id="mobile-nav"
      menuIcon={<FontAwesomeIcon icon={faBars} size="lg" />}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
      sidenav={
        <div className="sidenave #e57373 red lighten-2">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Dropdown
              id="Dropdown_5"
              options={{
                alignment: "left",
                autoTrigger: true,
                closeOnClick: true,
                constrainWidth: true,
                container: null,
                coverTrigger: true,
                hover: false,
                inDuration: 150,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 250
              }}
              trigger={<p>Location</p>}
            >
              <Link to="/location/Delhi">Delhi</Link>
              <Link to="/location/Mumbai">Mumbai</Link>
              <Link to="/location/Bangalore">Bangalore</Link>
              <Link to="/location/Hyderabad">Hyderabad</Link>
              <Link to="/location/Gwalior">Gwalior</Link>
            </Dropdown>
          </p>
          <p>
            <Dropdown
              id="Dropdown_6"
              options={{
                alignment: "left",
                autoTrigger: true,
                closeOnClick: true,
                constrainWidth: true,
                container: null,
                coverTrigger: true,
                hover: false,
                inDuration: 150,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 250
              }}
              trigger={<p>Category</p>}
            >
              <Link to="/category/Automobiles">Automobiles</Link>
              <Link to="/category/Mobiles">Mobiles</Link>
              <Link to="/category/Electronics">Electronics</Link>
              <Link to="/category/Furniture">Furniture</Link>
              <Link to="/category/Property">Property</Link>
            </Dropdown>
          </p>
              {Auth()?
            <Dropdown
            id="Dropdown_4"
            options={{
              alignment: "left",
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              container: null,
              coverTrigger: true,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250
            }}
            trigger={
              <NavItem>
                <Link to="add/car">Hi,{localStorage.getItem("name")}</Link>
              </NavItem>
            }
          >
            <Link to="/favourites" className="cardlink">
              Favourites
            </Link>
            <Link to="/myadds" className="cardlink">
              My adds
            </Link>
            <Link to="/profile" className="cardlink">
              Profile
            </Link>
          </Dropdown> 
            : <p>
            <Link to="/login">Login</Link>
          </p>
            
            }
         {Auth()?
           <Toast
           className="toaster"
           options={{
             html: "You have logged out successfully....."
           }}
         >
           <a
             onClick={() => {
               logout();
               history.push("/");
             }}
           >
             Logout
           </a>
         </Toast> 
         :null
         }
      {Auth()?
     <p>
     <Link to="/post">SELL</Link>
   </p>  :null
    }
          <p>
            <Link to="/aboutus">About us</Link>
          </p>
        </div>
      }
    >
      <NavItem>
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem onClick={onOpenModal2}>Location</NavItem>
      <Modal open={open2} blockScroll={false} onClose={onCloseModal2}>
        <Row>
          <Col l={4}>
            <ul className="modalsize">
              <li>
                <Link to="/location/Delhi" className="cardlink" onClick={onCloseModal2}>
                  Delhi
                </Link>
              </li>
              <li>
                <Link to="/location/Mumbai" className="cardlink" onClick={onCloseModal2} >
                  Mumbai
                </Link>
              </li>
              <li>
                <Link to="/location/Bangalore" className="cardlink" onClick={onCloseModal2}>
                  Bangalore
                </Link>
              </li>
              <li>
                <Link to="/location/Kolkata" className="cardlink" onClick={onCloseModal2}>
                  Kolkata
                </Link>
              </li>
            </ul>
          </Col>
          <Col l={4}>
            <ul className="modalsize">
              <li>
                <Link to="/location/Hyderabad" className="cardlink" onClick={onCloseModal2}>
                  Hyderabad
                </Link>
              </li>
              <li>
                <Link to="/location/Ahemdabad" className="cardlink" onClick={onCloseModal2}>
                  Ahemdabad
                </Link>
              </li>
              <li>
                <Link to="/location/Bhopal" className="cardlink" onClick={onCloseModal2}>
                  Bhopal
                </Link>
              </li>
              <li>
                <Link to="/location/Lucknow" className="cardlink" onClick={onCloseModal2}>
                  Lucknow
                </Link>
              </li>
            </ul>
          </Col>
          <Col l={4}>
            <ul className="modalsize">
              <li>
                {" "}
                <Link to="/location/Chandigarh" className="cardlink" onClick={onCloseModal2}>
                  Chandigarh
                </Link>
              </li>
              <li>
                <Link to="/location/Gwalior" className="cardlink" onClick={onCloseModal2} >
                  Gwalior
                </Link>
              </li>
              <li>
                <Link to="/location/Indore" className="cardlink" onClick={onCloseModal2}>
                  Indore
                </Link>
              </li>
              <li>
                <Link to="/location/Pune" className="cardlink" onClick={onCloseModal2}>
                  Pune
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Modal>

      <NavItem>
        <NavItem onClick={onOpenModal}>Categories</NavItem>
        <Modal open={open} onClose={onCloseModal} blockScroll={false} >
          <Row>
            <Col l={4}>
              <ul className="modalsize">
                <li>
                  {" "}
                  <Link to="/category/Automobiles" className="cardlink" onClick={onCloseModal} >
                    Automobiles
                  </Link>
                </li>
                <li>
                  <Link to="/category/Electronics" className="cardlink"  onClick={onCloseModal}>
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link to="/category/Appliances" className="cardlink" onClick={onCloseModal}>
                    Appliances
                  </Link>
                </li>
                <li>
                  <Link to="/category/Fashion&Beauty" className="cardlink" onClick={onCloseModal}>
                    Fashion
                  </Link>
                </li>
              </ul>
            </Col>
            <Col l={4}>
              <ul className="modalsize">
                <li>
                  <Link to="/category/Furnitures" className="cardlink" onClick={onCloseModal}>
                    Furnitures
                  </Link>
                </li>
                <li>
                  <Link to="/category/Property" className="cardlink" onClick={onCloseModal}>
                    Property
                  </Link>
                </li>
                <li>
                  <Link to="/category/Books" className="cardlink" onClick={onCloseModal}>
                    Books
                  </Link>
                </li>
                <li>
                  <Link to="/category/Mobiles" className="cardlink" onClick={onCloseModal}>
                    Mobiles
                  </Link>
                </li>
              </ul>
            </Col>
            <Col l={4}>and many more...</Col>
          </Row>
        </Modal>
      </NavItem>
     
       <NavItem>
         <Link to="/aboutus">About us</Link>
       </NavItem>
      {Auth() !== true ? (
        <Fragment>
        <NavItem>
          <Link to="/login">Login</Link>
        </NavItem>
         
       </Fragment>
      ) : (
        <Fragment>
          <Dropdown
            id="Dropdown_8"
            options={{
              alignment: "left",
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              container: null,
              coverTrigger: true,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250
            }}
            trigger={
              <NavItem>
                <Link to="add/car">Hi,{localStorage.getItem("name")}</Link>
              </NavItem>
            }
          >
            <Link to="/favourites" className="cardlink">
              Favourites
            </Link>
            <Link to="/myadds" className="cardlink">
              My adds
            </Link>
            <Link to="/profile" className="cardlink">
              Profile
            </Link>
          </Dropdown>
        </Fragment>
      )}
      {Auth() ? (
        <NavItem>
          <Toast
            className="toaster"
            options={{
              html: "You have logged out successfully....."
            }}
          >
            <a
              onClick={() => {
                logout();
                history.push("/");
              }}
            >
              Logout
            </a>
          </Toast>
        </NavItem>
      ) : null}

      {Auth() ? (
        <NavItem>
          <Link to="/post">SELL</Link>
        </NavItem>
      ) : null}
      <NavItem>
        <form  onSubmit={event=>search(event)}>
          <input type="text" onChange={event=>searchchange(event)} placeholder="Search" />
        </form>
      </NavItem>
    </Navbar>
  );
}

export default withRouter(Navgbar);
