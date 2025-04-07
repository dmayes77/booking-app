// IconButton.js
import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import Icon from "./Icon";

export default function IconButton({
  iconName = "",
  iconSize = 20,
  iconSet = "lui",
  children,
  ...props
}) {
  return (
    <Button {...props}>
      {iconName && (
        <Icon name={iconName} size={iconSize} className="mr-2" set={iconSet} />
      )}
      {children}
    </Button>
  );
}

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
  iconSet: PropTypes.string,
  children: PropTypes.node.isRequired,
};