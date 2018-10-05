import React from "react";
import PropTypes from "prop-types";
import { LayoutSizes, MarginPaddingSize, GridGutter } from "../vars";

/**
 * This is a column layout block
 */
const LayoutGrid = ({ className, children, offset }) => (
  <div className={"LayoutGrid" + (className ? " " + className : "")}>
    {children}
    <style jsx>{`
      .LayoutGrid {
        margin: auto;
        max-width: ${LayoutSizes[3]};
        display: flex;
        justify-content: space-between;
        width: 100%;

        /*
          TODO: For some reason global flags are needed?
          Shouldn't nesting "just work"?
        */
        > :global(*) {
          ${children.length > 1
            ? `width: calc(${100 / children.length}% - ${(20 *
                (children.length - 1)) /
                children.length}px);`
            : "width: 100%;"};
        }

        > :global(*:first-child) {
          ${offset && children.length === 2
            ? offset === "left"
              ? `width: calc(${(2 * 100) / 3}% - ${GridGutter / 2}px);`
              : ""
            : ""} ${offset && children.length === 2
            ? offset === "right"
              ? `width: calc(${100 / 3}% - ${GridGutter / 2}px);`
              : ""
            : ""};
        }

        > :global(*:nth-child(2)) {
          ${offset && children.length === 2
            ? offset === "left"
              ? `width: calc(${100 / 3}% - ${GridGutter / 2}px);`
              : ""
            : ""} ${offset && children.length === 2
            ? offset === "right"
              ? `width: calc(${(2 * 100) / 3}% - ${GridGutter / 2}px);`
              : ""
            : ""};
        }
      }
      @media (width <= 500px) {
        flex-direction: column;
        /*
          This is nutty but it worked
          Probably some sort of transpiling madness PR needed to submit upstream
        */
        :global(*[class*="LayoutGrid"] *) {
          width: 100% !important;
        }
        :global(*[class*="LayoutGrid"] *:first-child) {
          width: 100% !important;
        }
        :global(*[class*="LayoutGrid"] *:nth-child(2)) {
          width: 100% !important;
        }
      }
    `}</style>
  </div>
);

LayoutGrid.propTypes = {
  /**
   * LayoutGrid block
   */
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  /**
   * LayoutGrid offset
   */
  offset: PropTypes.oneOf(["left", "right"])
};

export default LayoutGrid;
