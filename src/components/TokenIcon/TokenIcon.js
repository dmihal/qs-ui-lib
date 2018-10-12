import React from "react";
import PropTypes from "prop-types";

const TokenIcon = ({ className, name, url, size }) => (
  <img
    className={"TokenIcon" + (className ? " " + className : "")}
    alt={"Token icon " + name}
    src={url}
    style={{
      width: TokenIcon.sizes[size] || TokenIcon.sizes["small"],
      height: TokenIcon.sizes[size] || TokenIcon.sizes["small"]
    }}
  />
);

TokenIcon.propTypes = {
  /*
  * TokenIcon type
  */
  name: PropTypes.string.isRequired,
  /*
  * TokenIcon type
  */
  url: PropTypes.string.isRequired,
  /*
  * TokenIcon size
  */
  size: PropTypes.string.isRequired
};

TokenIcon.sizes = {
  small: "40px",
  large: "80px"
};

export default TokenIcon;
