import React from 'react';

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

export default BackgroundImageSection;
