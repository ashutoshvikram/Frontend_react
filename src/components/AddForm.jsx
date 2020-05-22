import React, { Component, useState, useEffect } from "react";
import Navgbar from "../Subcompo/Navgbar";
import "../index.css";
import Footer from "../Subcompo/Footer";
import { Row, Col } from "react-materialize";
import { API } from "../helper/Auth";

export default function AddForm(props) {
  var urls=[];
  const [values, setValues] = useState({
    success: false,
    name: "",
    price: "",
    description: "",
    location: "",
    images: [],
    category: "",
  });
  const {
    name,
    price,
    description,
    location,
    category,
    images
  } = values;

const token =localStorage.getItem('token')


  const handleImage = (event, name) => {
    const imags = event.target.files;

    const uploadImage = (image) => {
     
      var form = new FormData();
      form.append("upload_preset", "buysell");
      form.append("cloud_name", "avikram");
      form.append("file", image);
      const url = "https://api.cloudinary.com/v1_1/avikram/image/upload";
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.send(form);
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
        
          var response = JSON.parse(xhr.responseText);
          var url = response.secure_url; 
          setValues({...values,images:images.push(url)})
         
        }
      };
    };
    for (var i = 0; i < imags.length; i++) {
      uploadImage(imags[i]);
    }
    
  };

  const handleChange = (event, name) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = {
      name: name,
      price: price,
      location: location,
      category: props.cat,
      description: description,
      imagesUrl:images,
    };
    fetch(`${API}createnew`, {
      method: "POST",
      headers:{
        Authorization:"Bearer "+token,
        'Content-Type':'application/json'
      },
      body: JSON.stringify(values)
    })
      .then((res) => res.json())
      .then((res) => {
        setValues({...values,success:true})
        alert("Your add posted")
      }).catch(err=>console.error(err))

  };

  return (
    <div>
      <div>
        <h3>POST YOUR ADD</h3>
        <h5>Category:{props.cat}</h5>
        <Col l={12} s={8} className="formcol">
          <form action="" onSubmit={(event) => handleSubmit(event)}>
            <h5>Product name</h5>
            <input
              type="text"
              onChange={(event) => handleChange(event, "name")}
            />
            <h5>Price</h5>
            <input
              type="text"
              onChange={(event) => handleChange(event, "price")}
            />

            <h5>Description</h5>
            <input
              className="innerformtext"
              type="text"
              onChange={(event) => handleChange(event, "description")}
            />

            <h5>Location</h5>
            <input
              className="innerformtext"
              type="text"
              onChange={(event) => handleChange(event, "location")}
            />

            <h5>Images</h5>
            {/* {values.names.map((items) => {
              return (
                <div>
                  <h6 style={{ fontSize: "10px" }}>{items}</h6>
                </div>
              );
            })} */}
            <Row>
              <Col l={3} s={6}>
                <label className="fileupload">
                  +
                  <input
                    type="file"
                    name="p_img"
                    multiple
                    id="inputform5"
                    onChange={(event) => handleImage(event, "p_img")}
                  />
                </label>
              </Col>

            
            </Row>

            <button type="submit" className="postaddbutton">
              POST ADD
            </button>
          </form>
        </Col>
      </div>
    </div>
  );
}
