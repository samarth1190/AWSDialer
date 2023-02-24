import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ListUsers() {
  const [userList, setUserList] = useState([]);
  const history = useNavigate();
  useEffect(() => {
    axios
      .get(
        "https://bjionk45kc.execute-api.us-east-1.amazonaws.com/dev/dialler/listusers"
      )
      .then((res) => setUserList(res.data.tableData));
  }, []);

  return (
    <div className="user-card-container">
      {userList.map((user, index) => {
        return (
          <div
            key={index}
            className="user-card"
            onClick={() => {
              history(
                "/detail/" +
                  user.userId +
                  "/" +
                  user.firstName +
                  "/" +
                  user.lastName +
                  "/" +
                  user.customerPhoneNumber
              );
            }}
          >
            <h3>
              First Name : {user.firstName}, Last Name : {user.lastName}
            </h3>
            <p>Phone Number : {user.customerPhoneNumber}</p>
            <p>Status : {user.eventStatus}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ListUsers;
