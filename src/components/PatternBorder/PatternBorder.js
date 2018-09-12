import React from "react";
import { bgpattern } from "../../asset-inliner";

const PatternBorder = () => (
  <div className="PatternBorder">
    <style jsx>{`
      .PatternBorder {
        width: 100%;
        height: 20px;
        opacity: 0.7;
        background: ${"url(" + bgpattern + ")"} repeat;
      }
    `}</style>
  </div>
);

export default PatternBorder;
