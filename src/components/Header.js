import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
import logo from "../images/logo.jpeg";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { SetMeal } from "@mui/icons-material";

function Header() {
  const [details, setEmail] = useState();
  const sendMail = async () => {
    alert("An email would be sent to you shortly");
    const request = await axios.get("/sendMail");
    // const randomNumber =
    if (request.data) {
      console.log(request.data);
      setEmail(request.data);
      console.log(details);
      const index = await axios.post("/sendMail", details);
      if (index.data) alert("Thanks for using our service");
    }
  };

  return (
    <div
      className='header'
      style={{
        backgroundColor: "whitesmoke",
        alignItems: "center",
        paddingBottom: "20px",
      }}
    >
      <Link to='/'>
        <img
          src={logo}
          alt='logo'
          className='headerLogo'
          style={{
            width: "60px",
            height: "50px",
            //   backgroundColor: "whitesmoke",
            //   paddingRight: "1000px",
            marginTop: "10px",
            justifyContent: "space-around",
          }}
        />
      </Link>
      <h3 style={{ marginTop: "10px" }}>Motivation</h3>
      <div
        onClick={() => {
          sendMail();
        }}
      >
        <SaveAltIcon className='svg_icon' />
      </div>
    </div>
  );
}

export default Header;
