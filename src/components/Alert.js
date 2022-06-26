import React from "react";

// First character capatalize
const capitalizeFirst = (message) => {
  return message.charAt(0).toUpperCase() + message.slice(1);
};

const Alert = (props) => {
  const alertStyle = {
    width: "40%",
    height: "60px",
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div className="d-flex justify-content-center">
          <div
            className={`alert alert-${props.alert.color} alert-dismissible fade show`}
            role="alert"
            style={alertStyle}
          >
            <p className="text-center">
              <strong>{capitalizeFirst(props.alert.type)}: </strong>
              {props.alert.text}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;
