import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function MediaContainer({
  children,
  padding = "",
  className = "",
  aspectRatio = "aspect-video",
  width = "w-full",
  height = "",
}) {
  const defaultClasses = "mx-auto";

  // Conditionally add 'relative' unless className already includes 'absolute'
  const classes = classNames(
    defaultClasses,
    className,
    aspectRatio,
    padding,
    width,
    height,
    { relative: !className.includes("absolute") },
  );

  return <div className={classes}>{children}</div>;
}

MediaContainer.propTypes = {
  children: PropTypes.node,
  padding: PropTypes.string,
  className: PropTypes.string,
  aspectRatio: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default React.memo(MediaContainer);
