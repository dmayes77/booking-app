"use client";

import React from "react";
import PropTypes from "prop-types";

const Video = React.memo(
  ({
    src,
    poster,
    autoPlay = false,
    loop = false,
    muted = true,
    controls = true,
    ...props
  }) => {
    return (
      <video
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        {...props}
      />
    );
  },
);

Video.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  controls: PropTypes.bool,
};

export default Video;
