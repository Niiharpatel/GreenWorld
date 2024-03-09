import React from "react";
import "./AlertBox.css";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router";

function AlertBox() {
  const navigate = useNavigate();

  const alert_nav = () => {
    navigate("/login");
    window.scroll(0, 0);
  };

  return (
    <>
      <div className="alert_main">
        <Alert style={{ border: "none" }}>
          <Alert.Heading>
            <div className="animate__animated animate__flash animate__repeat-3 animate__delay-1s  animate__slow">
              Warning !!!
            </div>
          </Alert.Heading>

          <h5 style={{ fontWeight: "500", fontFamily: "emoji" }}>
            Welcome User, Want to access our website you need to login first!
            Thank You :)
          </h5>
          <h6 style={{ fontFamily: "emoji" }}> Nihar Patel</h6>
          <hr />
          <p className="mb-0" onClick={() => alert_nav()}>
            <Alert.Link>Click Here to login </Alert.Link>
          </p>
        </Alert>
      </div>
    </>
  );
}

export default AlertBox;
