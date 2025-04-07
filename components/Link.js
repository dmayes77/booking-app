"use client";

import React from "react";
import NextLink from "next/link";
import PropTypes from "prop-types";

function Link({ href, children, title, onClick, ...props }) {
  const handleClick = (e) => {
    if (href === "#") {
      e.preventDefault();
    }
    console.log(`Clicked: ${title || ""} ${href}`);
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <NextLink href={href} onClick={handleClick} title={title} {...props}>
      {children}
    </NextLink>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default React.memo(Link);
