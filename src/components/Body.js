import React, { useState, useEffect } from "react";
import "./Body.css";
import axios from "axios";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";

function Body() {
  const [quote, setQuote] = useState([]);
  const forward = async () => {
    const request = await axios.get("/forward");
    // const randomNumber =
    if (request) setQuote(request.data);
    console.log(request);
  };

  const reverse = async () => {
    const request = await axios.get("/backward");
    // const randomNumber =
    if (request) setQuote(request.data);
    console.log(request);
  };
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("/fetchApi");
      // const randomNumber =
      if (request.data) setQuote(request.data);
      console.log(request);
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
          {{ quote } ? (
            <div>
              {quote.map((each) => {
                return (
                  <div key={each.id}>
                    <p>{each.content}</p>
                    <p style={{ float: "right" }}>{each.author}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>Qoutes would load soon</p>
          )}
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
            reverse();
          }}
        >
          <SkipPreviousIcon className='svg_icons' />
        </div>
        <div
          onClick={() => {
            forward();
          }}
        >
          <SkipNextIcon className='svg_icons' />
        </div>
      </div>
    </div>
  );
}

export default Body;
