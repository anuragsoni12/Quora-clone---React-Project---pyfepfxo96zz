/* eslint-disable array-callback-return */
import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import { news } from "./ApiData/newsData";

export const Widget = () => {
  const Widgets = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // border : '2px solid red',
    cursor: "pointer",
  };

  const container = {
    // border : '2px solid red',
    display: "flex",
    width: "90%",
    flexDirection: "column",
    textAlign: "start",
    borderRadius: "10px",
    margin: "10px 0px",
    padding: "10px",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  };
  const firstRow = {
    display: "flex",
    width: "100%",
    flexDirection: "column",

    // border : '2px solid green',
  };
  const firstRowColOn = {
    width: "100%",
    // //  border : '2px solid blue',
    // padding : '5px 0px',
  };
  const firstRowColSec = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",

    // margin : '15% 0px ',
    // // border : '2px solid blue',
    // width : '30%',
    // height : '100px',
    // padding : '2px',
  };
  const SecondRow = {
    // width : '100%',
    padding: "0px 2px",
    // border : '2px solid blue',
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  // ---------------------------------------CallingApi-----------------------
  // const url = "https://newsapi.org/v2/everything?q=apple&from=2023-06-07&to=2023-06-07&sortBy=popularity&apiKey=9333e83f995d4af6aa74ae472cfb127a";

  const [newsData, setNewsData] = useState([]);
  // const callNewsApi = async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   // setNewsData(data.articles);
  // };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setNewsData(news.articles);
  }, []);
  // console.log(newsData);

  // ---------------------------------------CallingApi-----------------------

  return (
    <div className="widgets" style={Widgets}>
      <div
        style={{
          width: "100%",
          padding: "10px",
          margin: "10px 0px 0px 0px",
        }}
      >
        <h3
          style={{
            fontSize: "25px",
            color: "#0d6efd",
          }}
        >
          Local news <KeyboardDoubleArrowRightIcon />
        </h3>
      </div>

      {newsData &&
        newsData.map((item, index) => (
          <div style={container} key={index}>
            <div style={firstRow}>
              <div style={firstRowColOn}>
                <h3
                  style={{
                    fontSize: "17px",
                    padding: "5px 0px",
                    color: "#0d6efd",
                    fontWeight: "500",
                  }}
                >
                  <NewspaperIcon /> {item.source.name}
                </h3>
              </div>
              <div style={firstRowColSec}>
                <div
                  style={{
                    width: "68%",
                  }}
                >
                  <p
                    style={{
                      fontSize: "14px",
                      color: "black",
                      fontWeight: "500",
                    }}
                  >
                    {item.title}
                  </p>
                </div>
                <div
                  style={{
                    width: "30%",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "90%",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                    src={item.urlToImage}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div style={SecondRow}>
              <p
                style={{
                  fontSize: "14px",
                }}
              >
                {" "}
                {item.publishedAt}
              </p>
              <p>
                <InsertCommentIcon />
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};
