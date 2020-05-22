import React, { Component, useState, useEffect } from "react";
import Carousel_add from "../Subcompo/Carousel_add";
import Auth from "../helper/Auth";
import { API } from "../helper/Auth";
import { Redirect, Link } from "react-router-dom";
import Footer from "../Subcompo/Footer";
import { Row, Col, Button, Toast } from "react-materialize";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareAlt,
  faMapMarkerAlt,
  faHeart,
  faPhoneAlt,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";

import Navgbar from "../Subcompo/Navgbar";

const Adddetails = (props) => {
  const token = localStorage.getItem("token");

  const [values, setValues] = useState({
    id: "",
    proname: "",
    desc: "",
    success: false,
    isfavourite: false,
    img: [],
    price: "",
    sellername: "",
    postedon: "",
    location: "",
    memberdt: "",
    profileimg: "",
  });
  const {
    id,
    proname,
    isfavourite,
    desc,
    success,
    img,
    price,
    sellername,
    postedon,
    location,
    memberdt,
    profileimg,
  } = values;
  async function apifetch() {
    const response = await fetch(`${API}add/${props.match.params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const res = await response.json();
    console.log(res);
    const newdate = res.item.date.slice("T");
    var ad = new Date(newdate);
    ad = ad.toDateString();
    ad = ad.slice(3);
    setValues({
      ...values,
      id: res.item._id,
      proname: res.item.name,
      success: true,
      desc: res.item.description,
      location: res.item.location,
      postedon: ad,
      //memberdt: res.seller.registered_on,
      img: res.item.imagesUrl,
      sellername: res.sellerdetails.name + " " + res.sellerdetails.lastname,
      profileimg: res.sellerdetails.profilepic,
      price: res.item.price,
    });
  }
  const checkFav = () => {
    fetch(`${API}isfavourite/${props.match.params.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setValues({ ...values, isfavourite: res.favourite });
      });
  };
  useEffect(() => {
    apifetch();
    checkFav();
  }, []);

  const contactseller = (event) => {
    fetch(`${API}contactseller/${props.match.params.id}`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }).then(res=>res.json()).then(res=>{
      console.log(res)
    });
  };

  const locate = location;
  console.log(locate);
  const urls = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCfF-k0ecpBaGMWRzb43xcKRYENxX9IkxY&q=${locate}`;

  if (Auth() !== true) {
    return <Redirect to="/" />;
  }
  const setFavourite = (check) => {
    if (check === true) {
      fetch(`${API}favourite/${props.match.params.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => res.json)
        .then((res) => {
          setValues({ ...values, isfavourite: true });
        })
        .catch((err) => console.log(err));
    } else {
      fetch(`${API}delfavourite/${props.match.params.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => res.json)
        .then((res) => {
          setValues({ ...values, isfavourite: false });
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <Navgbar />
      <Row>
        <Col s={12} l={8}>
          <Carousel_add proimages={img} />
        </Col>
        <Col s={12} l={4} className="details">
          <p className="price">
            &#8377;{price}/-&ensp;&ensp;
            {isfavourite === false ? (
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: "black" }}
                onClick={(event) => setFavourite(true)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: "red" }}
                onClick={(event) => setFavourite(false)}
              />
            )}
            <a
              style={{ color: "black" }}
              href={
                "https://www.facebook.com/sharer/sharer.php?u=" +
                "https://buysellit.netlify.app"
              }
            >
              <FontAwesomeIcon icon={faShareAlt} className="logofb" />
            </a>{" "}
          </p>
          <p className="addtitle">{proname}</p>
          <Row className="addloc">
            <Col s={6} className="addlocin">
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                {location}
              </p>
            </Col>
            <Col s={6}>
              <p className="addlocin">{postedon}</p>
            </Col>
          </Row>
        </Col>
        <Col s={12} l={4} className="details">
          <img className="profilepic" src={profileimg} alt="seller" srcset="" />
          <p className="namedetail">{sellername}</p>

          <Row className="addloc">
            <Col s={6} className="addlocin"></Col>
            <Toast
              className="toaster"
              options={{
                html: "Email sent to seller.Seller will contact you soon...",
              }}
            >
              <a
                style={{ fontSize: "20px" }}
                onClick={(event) => contactseller(event)}
              >
                CONTACT SELLER &ensp;&ensp;
                <FontAwesomeIcon icon={faPhoneAlt} />
              </a>
            </Toast>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col s={12} l={8} className="descrip">
          <h4>DESCRIPTION</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. oribus
            harum cumque animi provident nam inventore eveniet ni si saepe quas,
            a odio eos atque repudiandae. Illo veniam, al ias laboriosam quidem,
            sint labore, officiis dolores rem duc imus blanditiis sed quos
            dolorem dolor delectus quia voluptatum dolorum nobis. Eligendi
            quidem aperiam veniam maiores at velit aspernatur nesciu nt quaerat!
            Consectetur quae illum non laborum dolor explicabo nam nostrum magni
            beatae, atque et culpa tempora omnis eaque iusto repudiandae illo
            enim dolores? Aperiam ullam iusto cumque, atque dolor blanditiis quo
            in temporibus.
          </p>
        </Col>

        <Col s={12} l={4} className="mapdiv">
          <h4>POSTED IN</h4>
          <iframe
            width="430"
            height="500"
            frameborder="0"
            src={urls}
            allowfullscreen
          ></iframe>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};
export default Adddetails;
