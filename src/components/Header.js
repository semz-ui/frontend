import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
import logo from "../images/logo.jpeg";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

function Header() {
  const [details, setDetails] = useState([]);
  const sendMail = async () => {
    alert("An email would be sent to you shortly");
    const request = await axios.get("/sendMail");
    // const randomNumber =
    if (request.data.length) {
      console.log(request.data);
      setDetails(request.data);
      if (details) {
        console.log(details);

        const index = await axios.post("/sendMail", {
          author: details.autor,
          content: details.author,
        });
        if (index.data) alert("Thanks for using our service");
      } else {
        console.log("invalid details");
      }
    } else {
      console.log("an error has occured");
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
