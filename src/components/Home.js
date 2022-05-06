import { Link } from "react-router-dom";
import React from "react";
import HomeImg from "../images/header.jpeg";

function Home() {
  return (
    <div
      style={{
        margin: "auto",
        padding: "70px",
        marginTop: "40px",
        backgroundColor: "whitesmoke",
        // width: "300px",
        borderRadius: "40px",
        maxWidth: "fit-content",
        justifyContent: "center",
        borderWidth: "thin",
        // border: "10px",
      }}
      className='home'
    >
      <img
        src={HomeImg}
        alt='homeImg'
        style={{
          marginTop: "30px",
          alignContent: "center",
          borderRadius: "20px",
        }}
      />
      <div
        style={{
          margin: "20px",
          paddingLeft: "100px",
          //   display: "-ms-grid",
        }}
      >
        <form>
          <div>
            <label>
              <input
                type='text'
                name='name'
                placeholder='Please enter your Email'
                style={{
                  //   padding: "10px",
                  height: "30px",
                  width: "300px",
                  paddingLeft: "10px",
                  borderRadius: "10px",
                  borderColor: "grey",
                  border: "none",
                  outline: "none",
                  //   backgroundColor: "whitesmoke",
                }}
              />
            </label>
          </div>

          <Link to='/body'>
            <input
              className='btn'
              type='submit'
              value='Submit'
              style={{
                padding: "10px",
                marginTop: "20px",
                width: "100px",
                justifyContent: "center",
                marginLeft: "90px",
                borderRadius: "10px",
                border: "none",
                fontSize: "18px",
                fontWeight: "bold",
                backgroundColor: "#d1d1ff",
              }}
            />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Home;
