/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Text = ({ property1 }) => {
  return (
    <div className="text">
      <div className="text-wrapper">A new way of</div>
      <div className="frame">
        <div className={`THINKING ${property1}`}>
          {property1 === "frame-8" && (
            <>
              <p className="span-wrapper">
                <span className="span">THINKING</span>
              </p>
              <p className="span-wrapper">
                <span className="text-wrapper-2">&nbsp;</span>
              </p>
            </>
          )}

          {property1 === "frame-9" && <>DOING</>}

          {property1 === "frame-10" && <>DEVELOPING</>}
        </div>
        <div className={`DOING property-1-${property1}`}>
          {["frame-10", "frame-8"].includes(property1) && <>DOING</>}

          {property1 === "frame-9" && (
            <>
              <p className="span-wrapper">
                <span className="span">THINKING</span>
              </p>
              <p className="span-wrapper">
                <span className="text-wrapper-2">&nbsp;</span>
              </p>
            </>
          )}
        </div>
        <div className={`DEVELOPING property-1-0-${property1}`}>
          {["frame-8", "frame-9"].includes(property1) && <>DEVELOPING</>}

          {property1 === "frame-10" && (
            <>
              <p className="span-wrapper">
                <span className="span">THINKING</span>
              </p>
              <p className="span-wrapper">
                <span className="text-wrapper-2">&nbsp;</span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Text.propTypes = {
  property1: PropTypes.oneOf(["frame-8", "frame-9", "frame-10"]),
};
