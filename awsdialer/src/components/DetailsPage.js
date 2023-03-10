import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "aws-amplify";

function DetailPage() {
  const [user, setUser] = useState({});
  const url = window.location.href;
  const arr = url.split("/");
  const customerPhoneNumber = arr[7];
  const lastName = arr[6];
  const firstName = arr[5];
  const userId = arr[4];

  useEffect(() => {
    axios
      .post(
        "https://bjionk45kc.execute-api.us-east-1.amazonaws.com/dev/dialler/updatepreviewstatus",
        {
          customerUserID: userId,
          previewStatus: "ON PREVIEW",
        }
      )
      .then((res) => {});
  });

  function clicktoDial() {
    axios
      .post(
        "https://bjionk45kc.execute-api.us-east-1.amazonaws.com/dev/dialler/clicktodial",
        {
          customerUserID: userId,
        }
      )
      .then((res) => {
        setUser(res.data);
      });
  }

  return (
    <div
      className="detail-page-container"
      style={{
        backgroundImage: "url(/HIP2.jpg)",
        top: "280px",
        left: "150px",
        height: "1000px",
        width: "1500px",
        backgroundRepeat: "no-repeat",
        backgroundClip: "content-box",
        position: "relative",
      }}
    >
      <h3>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            width: "250px",
            height: "30px",
            textAlign: "center",
            top: "172px",
            position: "absolute",
            marginTop: "0px",
            fontWeight: "bold",
            fontSize: "20px",
            marginLeft: "150px",
            cursor: "pointer",
          }}
        >
          {firstName} {lastName}
        </div>
      </h3>
      <div
        onClick={clicktoDial}
        style={{
          backgroundColor: "white",
          borderRadius: "5px",
          width: "200px",
          position: "absolute",
          height: "30px",
          textAlign: "center",
          marginTop: "200px",
          fontWeight: "bold",
          fontSize: "20px",
          marginLeft: "380px",
          cursor: "pointer",
        }}
      >
        <p>{customerPhoneNumber}</p>
      </div>
    </div>
  );
}

export default DetailPage;
