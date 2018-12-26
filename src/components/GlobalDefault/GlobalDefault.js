import React from "react";
import PropTypes from "prop-types";
import { Colors } from "../vars";

/**
 * This is a global style baseline that is meant to be imported
 * at the top layer of your app
 */
const GlobalDefault = ({ theme }) => (
  <style jsx global>{`
    *,
    *::before,
    *::after {
      box-sizing: border-box !important;
    }

    ul,
    li {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    html,
    body {
      height: 100%;
    }

    img {
      max-width: 100%;
      max-height: 100%;
    }

    a {
      cursor: pointer;
    }

    figure {
      margin: 0;
    }

    body {
      background: ${theme === "light"
        ? Colors.Alabaster
        : "radial-gradient(circle at 50% 34%, #243d62, #001637)"};
    }
  `}</style>
);

GlobalDefault.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"])
};

GlobalDefault.defaultProps = {
  theme: "light"
};

export default GlobalDefault;
