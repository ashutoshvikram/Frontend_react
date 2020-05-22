import React,{Fragment} from "react";
import Navgbar from "../Subcompo/Navgbar";
import { Col, Row } from "react-materialize";
import "../index.css";
import { useState } from "react";
import { useEffect } from "react";
import { API } from "../helper/Auth";

function Myprofile() {
  const [values, setValues] = useState({
    profilepic: "",
    email:'',
    fName: "",
    lName: "",
    mobno: "",
    location: "",
    success: false,
    fsuccess: false,
  });
  const {
    profilepic,
    email,
    fName,
    lName,
    mobno,
    location,
    success,
    fsuccess,
  } = values;
  const handleChange = (event,name) => {
    const img = event.target.files[0];
    console.log(img)
    setValues({...values, profilepic: img });
    console.warn(profilepic)
  };



  async function fetching() {
    const token =localStorage.getItem('token')
    const response = await fetch(`${API}profile`, {
      method:'GET',
      headers:{
        Authorization:"Bearer "+token,
        'Content-Type':'application/json'
      }
    });
    const res = await response.json();
    console.log(res)
    setValues({
      ...values,
      email:res.details.email,
      fName: res.details.name,
      profilepic:res.details.profilepic,
      lName: res.details.lastname,
      location: res.details.location,
      mobno:res.details.mobno,
      fsuccess: true,
    });
  }

  useEffect(() => {
    fetching();
  }, []);

  const handleSubmit = (event) => {
    const token =localStorage.getItem('token')
    event.preventDefault();
    var formvalues = new FormData();
    formvalues.append("profilepix", profilepic);
    console.log(profilepic)
    fetch(`${API}user`, {
      method: "POST",

      body: formvalues,
    })
      .then((res) => res.json())
      .then((res) =>{
        setValues({...values,profilepic:res.userdetails[0].Profile_pic})
      });
  }

  return (
    <Fragment>
      <Navgbar />
     
      <div  className="profilebox">
    
            <div className="profilecard">
           
            <img src="https://cdn.pixabay.com/photo/2016/03/23/04/01/beautiful-1274056__340.jpg"
            className="profilepic2"
            height='150' width='150' alt="asd" srcset=""/>
            <h6>Name: &ensp;&ensp;&ensp;{fName+" "+lName}</h6>
  <h6>Email: &ensp;&ensp;{email}</h6>
  <h6>City:&ensp;&ensp;&ensp; {location}</h6>
  <h6>Mob no:&ensp;&ensp;&ensp; {mobno}</h6>
        <form action="" onSubmit={event => handleSubmit(event)} >
         <h6>Profile</h6>
          <label className="fileupload">
            +
            <input
              type="file"
              name="p_img"
              onChange={(event)=>{ handleChange(event,'profileimg')}}
            />
          </label>
          <button type="submit">Submit the file</button>
        </form>
        </div>
            </div>
      
    </Fragment>
  );
}
export default Myprofile;
