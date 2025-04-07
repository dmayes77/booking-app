import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default function Grid({
  children,
  variant = "default",
  className = "",
  gap = "gap-4",
}) {
  const baseStyles = "grid w-full";

  const variantStyles = {
    default: "grid-cols-1 lg:grid-cols-2", // 1 col on mobile, 2 on lg
    single: "grid-cols-1", // Always 1 column
    double: "grid-cols-2", // Always 2 columns
    responsiveDouble: "grid-cols-1 md:grid-cols-2", // 1 col on mobile, 2 on md+
    responsiveTriple: "grid-cols-1 md:grid-cols-3", // 1 col on mobile, 3 on md+
    responsiveQuad: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", // 1 on mobile, 2 on sm, 4 on lg
    responsiveAuto: "grid-cols-[repeat(auto-fit,minmax(250px,1fr))]", // Auto-fit columns with min-width 250px
    customGrid: "grid-cols-1 md:grid-cols-2 lg:grid-cols-1",
  };

  const gridClasses = classNames(
    baseStyles,
    gap,
    variantStyles[variant] || variantStyles.default,
    className,
  );

  return <div className={gridClasses}>{children}</div>;
}

Grid.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    "default",
    "single",
    "double",
    "responsiveDouble",
    "responsiveTriple",
    "responsiveQuad",
    "responsiveAuto",
  ]),
  className: PropTypes.string,
  gap: PropTypes.string,
};
