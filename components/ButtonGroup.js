import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

const ButtonGroup = React.memo(({ children, className = "", ...props }) => {
  const classes = classNames(
    "flex flex-col w-full sm:flex-row justify-center items-center gap-4",
    className,
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
});

ButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ButtonGroup;
