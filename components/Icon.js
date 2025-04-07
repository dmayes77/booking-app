import React from "react";
import PropTypes from "prop-types";
import * as Fa5Icons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as MdIcons from "react-icons/md";
import * as LucideIcons from "react-icons/lu";
import * as FcIcons from "react-icons/fc";
import * as FiIcons from "react-icons/fi";
import * as TbIcons from "react-icons/tb";
import * as IonIcons5 from "react-icons/io5";

// Move the iconSets mapping outside of the component to avoid redefining it on every render.
const iconSets = {
  lui: LucideIcons,
  fa5: Fa5Icons,
  fa6: Fa6Icons,
  mdi: MdIcons,
  fci: FcIcons,
  fii: FiIcons,
  tbi: TbIcons,
  io5: IonIcons5,
};

function Icon({ name, set = "lui", size = 24, className = "text-white" }) {
  // Retrieve the selected icon set
  const selectedSet = iconSets[set.toLowerCase()];
  if (!selectedSet) {
    console.warn(
      `❌ Icon set "${set}" not found. Available sets are: ${Object.keys(
        iconSets,
      ).join(", ")}.`,
    );
    return null;
  }

  // Get the Icon component from the selected icon set
  const IconComponent = selectedSet[name];
  if (!IconComponent) {
    console.warn(`❌ Icon "${name}" not found in the ${set} icon set.`);
    return null;
  }

  return <IconComponent size={size} className={className} />;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  set: PropTypes.oneOf(Object.keys(iconSets)),
  size: PropTypes.number,
  className: PropTypes.string,
};

// Optionally wrap the component in React.memo to avoid unnecessary re-renders
export default React.memo(Icon);
