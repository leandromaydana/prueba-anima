/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const OurServices = ({ property1, className, hasSpanNavIndicator = true, hasOurServices = true }) => {
  return (
    <div className={`our-services ${className}`}>
      {hasSpanNavIndicator && <div className="span-nav-indicator-2" />}

      <div className="our-services-wrapper">{hasOurServices && <div className="text-wrapper-3">OUR SERVICES</div>}</div>
    </div>
  );
};

OurServices.propTypes = {
  property1: PropTypes.oneOf(["frame-2"]),
  hasSpanNavIndicator: PropTypes.bool,
  hasOurServices: PropTypes.bool,
};
