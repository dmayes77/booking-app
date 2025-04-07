import React from 'react';
import PropTypes from "prop-types";

const BackgroundImageSection = ({
  backgroundImage,
  children,
  className = '',
  style = {},
  overlayColor = 'rgba(0, 0, 0, 0.6)',
  ...props
}) => {
  const defaultClasses = 'relative w-full bg-cover bg-center';

  const combinedStyle = {
    backgroundImage: `url(${backgroundImage})`,
    ...style,
  };

  return (
    <section
      className={`${defaultClasses} ${className}`}
      style={combinedStyle}
      {...props}
    >
      {/* Overlay layer */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: overlayColor }}
      />
      {/* Content layer */}
      <div className="relative z-10">{children}</div>
    </section>
  );
};

BackgroundImageSection.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  overlayColor: PropTypes.string,
};

export default BackgroundImageSection;
