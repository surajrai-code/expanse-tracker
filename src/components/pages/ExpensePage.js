import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const ExpensePage=()=> {
  const VerifyEmailId = () => {
    let token = localStorage.getItem("token");
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyB4eAcKhjMaxtHrq60AlEDI6Ace0n31ogg",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: token,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            if (data && data.error && data.error.message) {
              let errMessage = "Authentication Failed, " + data.error.message;
              throw new Error(errMessage);
            }
          });
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <div style={{ fontSize: "200%" }}>Welcome to Expense Tracker</div>
      <Button
        variant="outline-success"
        onClick={VerifyEmailId}
        style={{ float: "right", marginBottom: "500px" }}
      >
        Verify Email{" "}
      </Button>
      <p>
        Your profile is incomplete
        <Link to="completeprofile">
          <span>Complete now</span>
        </Link>
      </p>
      <hr />
     
    </div>
  );
}

export default ExpensePage;
