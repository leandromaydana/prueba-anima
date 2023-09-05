/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Component = ({ property1, className, vectorClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "group-19",
  });

  return (
    <div
      className={`component ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className={`contact-us ${state.property1}`}>
        <div className="contact-us-2">CONTACT US</div>
        <img
          className={`vector ${vectorClassName}`}
          alt="Vector"
          src={
            state.property1 === "group-20"
              ? "https://generation-sessions.s3.amazonaws.com/02e2a0a911765d9779b6f7df9967659b/img/vector-1.svg"
              : "https://generation-sessions.s3.amazonaws.com/02e2a0a911765d9779b6f7df9967659b/img/vector-4@2x.png"
          }
        />
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "group-20",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "group-19",
      };
  }

  return state;
}

Component.propTypes = {
  property1: PropTypes.oneOf(["group-19", "group-20"]),
};
