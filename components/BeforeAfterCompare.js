import React from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import PropTypes from "prop-types";

export default function BeforeAfterCompare({ beforeImage, afterImage, position }) {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={beforeImage} alt="Before" />}
      itemTwo={<ReactCompareSliderImage src={afterImage} alt="After" />}
      position={position}
    />
  );
}

BeforeAfterCompare.propTypes = {
  beforeImage: PropTypes.string.isRequired,
  afterImage: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
};