import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames"; // Import the classnames library

const Container = React.memo(({ children, className = "", ...rest }) => {
  const defaultClasses = "mx-auto max-w-7xl px-4"; // Define your default classes here
  const classes = classNames(defaultClasses, className); // Merge default and additional classes

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
});

Container.displayName = "Container";
Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Container;
