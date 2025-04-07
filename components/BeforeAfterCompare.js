import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

export default function BeforeAfterCompare({ beforeImage, afterImage, position }) {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={beforeImage} alt="Before" />}
      itemTwo={<ReactCompareSliderImage src={afterImage} alt="After" />}
      position={position}
    />
  );
}
