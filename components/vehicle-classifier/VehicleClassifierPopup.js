"use client";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import VehicleClassifierForm from "./VehicleClassifierForm";
import Button from "../Button";

export default function VehicleClassifierPopup({ buttonTitle, buttonVariant }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Trigger Button */}
      <Button onClick={openModal} variant={buttonVariant}>
        {buttonTitle}
      </Button>

      {/* Portal for the Modal Popup */}
      {isOpen &&
        createPortal(
          <div className="fixed inset-0 flex items-center justify-center z-1000">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-mad-blue opacity-75"
              onClick={closeModal}
            />

            {/* Modal Container */}
            <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 md:mx-8">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute right-2 text-gray-600 hover:text-gray-800 text-3xl font-bold p-2"
              >
                &times;
              </button>

              {/* Vehicle Classifier Form */}
              <VehicleClassifierForm />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
