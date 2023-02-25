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
            <div style={{ width: "100%" }}>
              <div style={{ width: "50%" }}>
                <table>
                  <tr
                    style={{
                      fontWeight: "bold",
                      fontSize: "25px",
                      color: "blue",
                    }}
                  >
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                  </tr>
                  <tr
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: "black",
                      margin: "2px",
                      width: "1000px",
                    }}
                  >
                    <td>
                      <div
                        style={{
                          width: "100px",
                        }}
                      >
                        {user.userId}
                      </div>
                    </td>
                    <td>{user.firstName + " " + user.lastName}</td>
                    <td>{user.customerPhoneNumber}</td>
                  </tr>
                </table>
              </div>
              <div
                style={{
                  alignContent: "right",
                  verticalAlign: "top",
                  fontSize: "25px",
                  color: "green",
                }}
              >
                <p>
                  Status :{" "}
                  <b>
                    {user.eventStatus} since {user.lstMdfdDt}
                  </b>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListUsers;
