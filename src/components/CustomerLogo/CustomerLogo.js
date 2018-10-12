import React from "react";
import PropTypes from "prop-types";

const CustomerLogo = ({ className, name, url, size }) => (
  <img
    className={"CustomerLogo" + (className ? " " + className : "")}
    alt={"Customer logo " + name}
    src={url}
    style={{
      width: CustomerLogo.sizes[size] || CustomerLogo.sizes["small"]
    }}
  />
);

CustomerLogo.propTypes = {
  /*
  * CustomerLogo name
  */
  name: PropTypes.string.isRequired,
  /*
  * CustomerLogo size
  */
  size: PropTypes.string.isRequired,
  /*
  * CustomerLogo url
  */
  url: PropTypes.string.isRequired
};

CustomerLogo.sizes = {
  small: "160px",
  large: "320px"
};

export default CustomerLogo;
