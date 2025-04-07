import React from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";

export default function Button({
  variant = "primary",
  type = "button",
  href = "",
  children,
  ...props
}) {
  const baseStyles =
    "flex px-6 py-3 rounded-md font-semibold shadow-md transition text-sm justify-center uppercase";

  const variantStyles = {
    primary: "bg-mad-red border-mad-red text-mad-white hover:bg-mad-red/90",
    secondary: "bg-mad-white text-mad-red hover:bg-mad-white/90",
    tertiary: "bg-mad-blue border-mad-blue text-mad-white hover:bg-mad-blue/90",
    ghost:
      "bg-transparent border border-mad-white text-mad-white hover:bg-mad-white/10",
    base: "bg-blue-600 border-blue-600 text-white hover:bg-blue-700",
    grey: "bg-gray-300 border-gray-300 text-gray-700 hover:bg-gray-500 hover:text-white",
    brightRed:
      "bg-mad-red-bright border-mad-red-bright text-mad-white hover:bg-mad-red-bright/90",
  };

  const finalClassName = `${baseStyles} ${variantStyles[variant] || ""}`;

  // If an href is provided, wrap the button in a NextLink
  if (href) {
    return (
      <NextLink href={href}>
        <button
          type={type}
          {...props}
          className={finalClassName}
          style={{ cursor: "pointer" }}
        >
          {children}
        </button>
      </NextLink>
    );
  }

  return (
    <button
      type={type}
      {...props}
      className={finalClassName}
      style={{ cursor: "pointer" }}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};
