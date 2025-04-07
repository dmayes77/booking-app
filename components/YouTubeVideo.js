"use client";

import React from "react";
import PropTypes from "prop-types";
import { YouTubeEmbed } from "@next/third-parties/google";

const YouTubeVideo = React.memo(function YouTubeVideo({
  videoid, // Required: Your YouTube video ID.
  playlabel = "Play video", // Optional: A visually hidden label for the play button for accessibility.
  params = "", // Optional: Video player parameters as a query string (e.g., "controls=0&start=10").
}) {
  return (
    <YouTubeEmbed videoid={videoid} playlabel={playlabel} params={params} />
  );
});

YouTubeVideo.propTypes = {
  videoid: PropTypes.string.isRequired,
  playlabel: PropTypes.string,
  params: PropTypes.string,
};

export default YouTubeVideo;
