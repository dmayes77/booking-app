"use client";
import React from "react";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import PropTypes from "prop-types";

function MapEmbed() {
  // Use an environment variable for the API key (with a fallback for development)
  const apiKey =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_DEFAULT_API_KEY";

  return (
    <div className="mt-4">
      {/* Embedded Map */}
      <div className="w-full overflow-hidden rounded-md">
        <GoogleMapsEmbed
          apiKey={apiKey}
          height={450}
          width="100%"
          mode="place"
          q="Mayes+Auto+Detailing+and+Ceramic+Coatings"
          loading="lazy"
          style={{ border: 0 }}
        />
      </div>

      {/* Optional: Link to Open in Google Maps */}
      <a
        href="https://www.google.com/maps/place/Mayes+Auto+Detailing+and+Ceramic+Coatings/@34.998327,-85.255599,16z/data=!3m2!4b1!5s0x8860608f81cfa427:0x487c4a2147bfeb4d!4m6!3m5!1s0x8860676fe8ecda1b:0x8fb853ee5d723514!8m2!3d34.998327!4d-85.2530241!16s%2Fg%2F11k76d90jp?entry=ttu"
        target="_blank"
        rel="noopener noreferrer"
        className="text-mad-red mt-2 inline-block hover:underline"
      >
        View Larger Map
      </a>
    </div>
  );
}

MapEmbed.propTypes = {
  // No props currently, but this can be extended if needed.
};

export default React.memo(MapEmbed);
