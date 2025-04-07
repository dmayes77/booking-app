'use client';
import React, { useState, useMemo } from 'react';
import Image from '@/components/Image';
import Button from '@/components/Button';
import Grid from '@/components/Grid';
import ButtonGroup from '@/components/ButtonGroup';
import VehicleClassifierPopup from '@/components/vehicle-classifier/VehicleClassifierPopup';
import MediaContainer from '@/components/MediaContainer';

export default function PackageSection({
  packageInfo = {
    title: '',
    subtitle: '',
    imagePosition: 'left', // "left" or "right"
    priceRange: '',
    includes: '',
    imageUrl: '',
    imageAlt: '',
    description: '',
    benefits: [],
    additionalInfo: [],
    brand: '', // e.g. "pro", "max-mf", "crystal"
    slug: '', // unique identifier for matching pricing
  },
  pricing = [], // pricing data passed from the server

  paintCorrectionLevel = {
    paintEnhancement: {
      description:
        'Paint Enhancement is a process that focuses on improving the overall appearance of your vehicle&apos;s paint. It involves a single-stage machine polishing to remove light surface imperfections, such as minor swirl marks and oxidation. This process significantly enhances gloss and clarity, making your car look vibrant and well-maintained.',
      idealFor:
        'Newer models with less than 500 miles, and for vehicles with minor imperfections that only need a visual boost.',
    },
    level1: {
      description:
        'Level 1 Paint Correction is a more intensive process that targets moderate paint defects. This process involves a two-stage machine polishing technique to remove medium-level swirl marks, scratches, and oxidation. It restores the paint’s depth and shine, giving your car a like-new appearance. This is our most common correction.',
      idealFor:
        'Everyday drivers looking to correct moderate imperfections and achieve a more refined finish.',
    },
    level2: {
      description:
        'Level 2 Paint Correction is the most comprehensive correction process. It involves a multi-stage machine polishing technique to eliminate severe paint defects, such as deep swirl marks, scratches, and significant oxidation. This process restores the paint to its maximum potential, providing an unparalleled level of clarity and gloss.',
      idealFor:
        'Show cars or owners seeking a flawless finish. Perfect for vehicles with significant imperfections or for enthusiasts demanding the highest level of paint refinement.',
    },
  },
}) {
  // Destructure packageInfo for easier access
  const {
    title,
    subtitle,
    imagePosition,
    priceRange,
    includes,
    imageUrl,
    imageAlt,
    description,
    benefits,
    additionalInfo,
    brand,
    slug, // this should match a key in your pricing documents if static pricing is used
  } = packageInfo;

  // Determine if the brand is "max-mf"
  const isMaxMF = brand.toLowerCase() === 'max-mf';

  // Dropdown state for vehicle size and paint correction
  const [vehicleSize, setVehicleSize] = useState('');
  const [paintCorrection, setPaintCorrection] = useState('');

  // If the brand is "max-mf", force paint correction to "none"
  const effectivePaintCorrection = isMaxMF ? 'none' : paintCorrection;

  // Check if all required selections are made:
  // For non-max-mf brands, both vehicleSize and paintCorrection are required.
  // For max-mf, only vehicleSize is needed.
  const bothSelected = vehicleSize && brand && (isMaxMF || paintCorrection);

  // Determine layout classes based on imagePosition
  const isRight = imagePosition === 'right';
  const imageOrderClasses = isRight
    ? 'order-first lg:order-last'
    : 'order-first';
  const textOrderClasses = isRight ? 'order-last lg:order-first' : 'order-last';

  // Compute the dynamic slug based on user selections.
  const computedSlug = useMemo(() => {
    return bothSelected
      ? `${brand}-${vehicleSize}-${effectivePaintCorrection}`
      : '';
  }, [brand, vehicleSize, effectivePaintCorrection, bothSelected]);

  // Find the matching pricing record using the computed slug.
  const matchedPricing = useMemo(() => {
    return bothSelected ? pricing.find((p) => p.slug === computedSlug) : null;
  }, [bothSelected, computedSlug, pricing]);

  const displayPrice = matchedPricing ? matchedPricing.price : 'Not available';

  // Mapping for paint correction dropdown values
  const paintCorrectionMapping = {
    'paint-enhancement': 'paintEnhancement',
    'level-1': 'level1',
    'level-2': 'level2',
  };

  // Get details for the selected paint correction (only for non-max-mf brands)
  const selectedCorrection =
    !isMaxMF && paintCorrection && paintCorrectionMapping[paintCorrection]
      ? paintCorrectionLevel[paintCorrectionMapping[paintCorrection]]
      : null;

  return (
    <div className="w-full">
      <div className="mx-auto">
        <CustomGrid className="h-full items-center gap-8 rounded-sm bg-gray-50 p-8 shadow-xl">
          {/* Image Container */}
          <div className={imageOrderClasses}>
            <MediaContainer
              containerClass="rounded overflow-hidden"
              aspectRatio="aspect-square md:aspect-4/3 lg:aspect-3/4"
            >
              <CustomImage src={`/images/serv-images/${slug}`} alt={imageAlt} />
            </MediaContainer>
          </div>

          {/* Text and Form Container */}
          <div className={`${textOrderClasses} space-y-4`}>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              {title}
            </h2>
            <p className="text-lg font-semibold text-red-500">{subtitle}</p>
            <p className="text-lg font-semibold text-gray-800">{priceRange}</p>
            <p className="text-sm text-gray-600">{description}</p>

            {/* Benefits and Additional Info */}
            <div className="text-sm text-gray-700">
              <ul className="list-inside list-disc space-y-2">
                {benefits.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              {additionalInfo.length > 0 && (
                <>
                  <p className="mt-4 mb-2 font-semibold">Additional Benefits</p>
                  <ul className="list-inside list-disc space-y-2">
                    {additionalInfo.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Dropdown Selections */}
            <div className="space-y-4">
              {/* Vehicle Size Dropdown */}
              <div>
                <label
                  className="mb-1 block text-sm font-semibold"
                  htmlFor="vehicleSize"
                >
                  Vehicle Size
                </label>
                <select
                  id="vehicleSize"
                  className="bg-mad-white w-full rounded-sm border border-gray-300 px-3 py-2"
                  value={vehicleSize}
                  onChange={(e) => setVehicleSize(e.target.value)}
                >
                  <option value="">Select one...</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="x-large">X-Large</option>
                </select>
              </div>

              {/* Render Paint Correction Dropdown only if brand is not "max-mf" */}
              {!isMaxMF && (
                <div>
                  <label
                    className="mb-1 block text-sm font-semibold"
                    htmlFor="paintCorrection"
                  >
                    Paint Correction
                  </label>
                  <select
                    id="paintCorrection"
                    className="bg-mad-white w-full rounded-sm border border-gray-300 px-3 py-2"
                    value={paintCorrection}
                    onChange={(e) => setPaintCorrection(e.target.value)}
                  >
                    <option value="">Select one...</option>
                    <option value="paint-enhancement">Paint Enhancement</option>
                    <option value="level-1">Level 1</option>
                    <option value="level-2">Level 2</option>
                  </select>
                </div>
              )}
            </div>

            {/* Show paint correction details only for non-max-mf brands */}
            {!isMaxMF && selectedCorrection && (
              <div className="mb-4 space-y-2 rounded-sm border border-gray-300 bg-gray-50 p-4">
                <p className="text-sm font-semibold">
                  Description:{' '}
                  <span className="font-normal">
                    {selectedCorrection.description}
                  </span>
                </p>
                <p className="text-sm font-semibold">
                  Ideal For:{' '}
                  <span className="font-normal">
                    {selectedCorrection.idealFor}
                  </span>
                </p>
              </div>
            )}

            {/* Display the computed price based on user selections */}
            {bothSelected ? (
              <div className="text-2xl font-bold text-green-600">
                Price: ${displayPrice}
              </div>
            ) : (
              <p className="text-sm text-gray-500">
                Please select required options to get the price.
              </p>
            )}

            {/* CTA Buttons */}
            <ButtonGroup>
              <CustomButton variant="primary" href="#ceramic-coating-form">
                Book Now
              </CustomButton>
              <VehicleClassifierPopup
                buttonTitle="get My vehicle size"
                buttonVariant="tertiary"
              />
            </ButtonGroup>
          </div>
        </CustomGrid>
      </div>
    </div>
  );
}
