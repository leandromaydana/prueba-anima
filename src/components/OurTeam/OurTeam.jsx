/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const OurTeam = ({ property1, className, hasSpanNavIndicator = true, hasOurTeam = true }) => {
  return (
    <div className={`our-team ${className}`}>
      {hasSpanNavIndicator && <div className="span-nav-indicator" />}

      <div className="our-team-wrapper">{hasOurTeam && <div className="div">OUR TEAM</div>}</div>
    </div>
  );
};

OurTeam.propTypes = {
  property1: PropTypes.oneOf(["frame-3"]),
  hasSpanNavIndicator: PropTypes.bool,
  hasOurTeam: PropTypes.bool,
};
