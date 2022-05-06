import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../images/logo.jpeg";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

function Header() {
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
          console.log("Clicked");
        }}
      >
        <SaveAltIcon className='svg_icon' />
      </div>
    </div>
  );
}

export default Header;
