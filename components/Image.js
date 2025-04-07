import NextImage from "next/image";
import React from "react";
import PropTypes from "prop-types";

function Image({
  src,
  alt = "",
  width = 800,
  height = 450,
  objectFit = "cover",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}) {
  if (!src) {
    console.warn("⚠️ Image: Missing src!");
    return null;
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={90}
      style={{ objectFit }}
      className="h-full w-full"
      sizes={sizes}
      priority={priority}
    />
  );
}

Image.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  objectFit: PropTypes.string,
  sizes: PropTypes.string,
  priority: PropTypes.bool,
};

export default React.memo(Image);
