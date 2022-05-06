import React, { useState, useEffect } from "react";
import "./Body.css";
import axios from "axios";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";

function Body() {
  const [quote, setQuote] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp"
  );

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("api");
      // const randomNumber =
      setQuote(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className='body col-3' style={{ borderRadius: "40px" }}>
      <div
        className=''
        style={{
          margin: "auto",
          padding: "50px",
          marginTop: "200px",
          backgroundColor: "whitesmoke",
          borderRadius: "40px",
        }}
      >
        <h1
          className='text'
          onClick={() => {
            setQuote("Bodies");
          }}
        >
          {quote}
        </h1>
      </div>
      <div
        style={{
          //   paddingLeft: "45%",
          justifyContent: "space-around",
          //   alignItems: "center",
          display: "flex",
          paddingBottom: "20px",
        }}
      >
        <div
          onClick={() => {
            console.log("Clicked");
          }}
        >
          <SkipPreviousIcon className='svg_icons' />
        </div>
        <div
          onClick={() => {
            console.log("Clicked");
          }}
        >
          <SkipNextIcon className='svg_icons' />
        </div>
      </div>
    </div>
  );
}

export default Body;
