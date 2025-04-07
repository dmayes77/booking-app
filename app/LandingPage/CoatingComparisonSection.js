import React from "react";
import ButtonGroup from "@/components/ButtonGroup";
import Grid from "@/components/Grid";
import Icon from "@/components/Icon";
import IconButton from "@/components/IconButton";
import Section from "@/components/Section";
import PropTypes from "prop-types";

export default function CoatingComparisonSection() {
  return (
    <Section>
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Ceramic Coating vs. Wax: What’s Right for You?
        </h2>

        {/* ✅ Responsive Grid for Comparison */}
        <Grid className="py-8">
          {/* ✅ Ceramic Coating */}
          <div className="rounded-lg border border-gray-300 bg-white p-4 shadow-lg">
            <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700">
              <Icon name="LuShieldCheck" size={28} className="text-green-700" />
              Ceramic Coating
            </h3>
            <ul className="space-y-4">
              <ComparisonItem
                icon="LuClock"
                label="Durability"
                value="Lasts up to 7+ years with proper maintenance."
                color="text-green-700"
              />
              <ComparisonItem
                icon="LuShield"
                label="Protection"
                value="Shields paint from UV rays, chemicals, and environmental damage."
                color="text-green-700"
              />
              <ComparisonItem
                icon="LuDroplet"
                label="Hydrophobic"
                value="Repels water and dirt, easing cleaning."
                color="text-green-700"
              />
              <ComparisonItem
                icon="LuEye"
                label="Appearance"
                value="Provides a deep, glossy finish that enhances paint color."
                color="text-green-700"
              />
              <ComparisonItem
                icon="LuDollarSign"
                label="Cost"
                value="Higher upfront cost, but long-term benefits make it worthwhile."
                color="text-green-700"
              />
            </ul>
          </div>

          {/* ❌ Wax */}
          <div className="rounded-lg border border-gray-300 bg-white p-4 shadow-lg">
            <h3 className="text-mad-red mb-4 flex items-center gap-2 text-2xl font-bold">
              <Icon name="LuCircleX" size={28} className="text-mad-red" />
              Wax
            </h3>
            <ul className="space-y-4">
              <ComparisonItem
                icon="LuClock"
                label="Durability"
                value="Lasts 1–3 months, depending on conditions."
                color="text-mad-red"
              />
              <ComparisonItem
                icon="LuShieldAlert"
                label="Protection"
                value="Provides basic shielding against sun and dirt."
                color="text-mad-red"
              />
              <ComparisonItem
                icon="TbDropletOff"
                set="tbi"
                label="Hydrophobic"
                value="Offers limited water-repelling ability."
                color="text-mad-red"
              />
              <ComparisonItem
                icon="TbEyeOff"
                set="tbi"
                label="Appearance"
                value="Adds a mild shine, but less impactful than ceramic coating."
                color="text-mad-red"
              />
              <ComparisonItem
                icon="FiDollarSign"
                set="fii"
                label="Cost"
                value="Low upfront cost, though frequent reapplication is needed."
                color="text-mad-red"
              />
            </ul>
          </div>
        </Grid>

        {/* 🎯 Call-to-Action Buttons */}
        <ButtonGroup>
          <IconButton
            variant="brightRed"
            href="#hero"
            iconName="LuCalendarCheck"
            className="w-full lg:w-[350px]"
          >
            Schedule Your Ceramic Coating
          </IconButton>
        </ButtonGroup>
      </div>
    </Section>
  );
}

/**
 * 🔹 ComparisonItem Component - For Cleaner & Reusable List Items
 */
function ComparisonItem({ icon, label, set, value,color }) {
  return (
    <li className="flex items-start gap-3">
      <Icon name={icon} set={set} size={24} className={`${color}`} />
      <span className="w-4/5">
        <span className={`font-semibold ${color}`}>{label}:</span> {value}
      </span>
    </li>
  );
}

// Add prop types validation
ComparisonItem.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  set: PropTypes.string,
  value: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
