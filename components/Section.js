import React from "react";
import PropTypes from "prop-types";

const Section = React.memo(
  ({
    children,
    className = "",
    id,
    ...rest
  }) => {
    return (
      <section id={id || undefined} className={className} {...rest}>
        {children}
      </section>
    );
  },
);

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Section;
