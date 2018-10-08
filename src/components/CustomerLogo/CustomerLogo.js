import React from "react";
import PropTypes from "prop-types";

const CustomerLogo = ({ className, name, size }) => (
  <img
    className={"CustomerLogo" + (className ? " " + className : "")}
    alt={"Customer logo " + name}
    src={
      "https://s3-us-west-1.amazonaws.com/qsp-www-images/logos/" + name + ".svg"
    }
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
  size: PropTypes.string.isRequired
};

CustomerLogo.sizes = {
  small: "160px",
  large: "320px"
};

export default CustomerLogo;
