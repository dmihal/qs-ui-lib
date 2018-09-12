import React from "react";
import PropTypes from "prop-types";

const Glyph = ({ type, size }) => (
  <img
    alt={"Glyph " + type}
    src={require("../../../asset-inliner/inlined/glyphs/" + type + ".svg.js")}
    style={{
      width: Glyph.sizes[size] || Glyph.sizes["large"],
      height: Glyph.sizes[size] || Glyph.sizes["large"]
    }}
  />
);

Glyph.propTypes = {
  /*
  * Glyph type
  */
  type: PropTypes.string.isRequired,
  /*
  * Glyph size
  */
  size: PropTypes.oneOf(["small", "large"]).isRequired
};

Glyph.sizes = {
  small: "24px",
  large: "40px"
};

export default Glyph;
