"use client";
import { useState } from "react";
import Button from "../Button";

export default function VehicleClassifierForm() {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [trim, setTrim] = useState("");
  const [result, setResult] = useState(null); // Holds the JSON result from the API
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Page 1: form, Page 2: results

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Switch to page two immediately so that the spinner shows up
    setCurrentPage(2);
    setLoading(true);
    setResult(null);
    setError(null);

    const payload = { year, make, model, trim };

    try {
      const res = await fetch("/api/vehicle-classifier", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (json.error) {
        setError(json.error);
      } else {
        // Assuming the API returns the structured JSON result
        setResult(json);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setYear("");
    setMake("");
    setModel("");
    setTrim("");
    setResult(null);
    setError(null);
    setLoading(false);
    setCurrentPage(1);
  };

  // Page 1: Form to enter vehicle details
  if (currentPage === 1) {
    return (
      <div className="w-full max-w-full md:max-w-3xl mx-auto space-y-2">
        <div className="bg-white p-8 rounded-xl space-y-2">
          <h1 className="text-3xl font-bold text-center text-mad-blue mb-2">Vehicle Sizing Tool</h1>
          <p>Our Vehicle Sizing Tool quickly classifies your vehicle using details like year, make, model, and trim. This helps us determine the best service options for your ride. With fast, accurate results, scheduling your appointment becomes hassle-free.</p>
          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <label htmlFor="year" className="block text-gray-600 font-semibold mb-1">
                Year
              </label>
              <input
                type="text"
                id="year"
                name="year"
                placeholder="e.g., 2024"
                required
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition duration-150"
              />
            </div>
            <div>
              <label htmlFor="make" className="block text-gray-600 font-semibold mb-1">
                Make
              </label>
              <input
                type="text"
                id="make"
                name="make"
                placeholder="e.g., Toyota"
                required
                value={make}
                onChange={(e) => setMake(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition duration-150"
              />
            </div>
            <div>
              <label htmlFor="model" className="block text-gray-600 font-semibold mb-1">
                Model
              </label>
              <input
                type="text"
                id="model"
                name="model"
                placeholder="e.g., Camry"
                required
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition duration-150"
              />
            </div>
            <div>
              <label htmlFor="trim" className="block text-gray-600 font-semibold mb-1">
                Trim
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="trim"
                  name="trim"
                  placeholder="e.g., SE (Optional)"
                  value={trim}
                  onChange={(e) => setTrim(e.target.value)}
                  aria-describedby="trim-hint"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition duration-150"
                />
                <small id="trim-hint" className="block text-gray-500 text-xs mt-1">
                  Leave blank if unsure of the trim.
                </small>
              </div>
            </div>
            <Button type="submit" className="duration-150 mx-auto" variant="primary">
              get my vehicle size
            </Button>
          </form>
        </div>
      </div>
    );
  }

  // Page 2: Display spinner while loading and then results or error
  if (currentPage === 2) {
    return (
      <div className="w-full max-w-full md:max-w-3xl mx-auto space-y-8 p-8">
        {loading && (
          <div className="flex flex-col items-center mt-6">
            <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            <p className="mt-3 text-gray-700">We are getting your results...</p>
          </div>
        )}

        {!loading && result && (
          <div className="bg-white rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Classification Results: {result.category}</h2>
            <p className="text-gray-700 mb-2">
              <strong>Vehicle:</strong> {result.vehicle}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Type:</strong> {result.type}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Length:</strong> {result.length} inches
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Width:</strong> {result.width} inches
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Passenger Capacity:</strong> {result.capacity}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Purpose:</strong> {result.purpose}
            </p>
            <div className="mt-4">
              <p className="font-semibold text-gray-800">Reason for Classification:</p>
              <p className="text-gray-700">{result.explanation}</p>
            </div>
          </div>
        )}

        {!loading && error && (
          <div className="bg-red-100 p-4 rounded-lg border border-red-200">
            <p className="text-red-600 font-semibold">{error}</p>
          </div>
        )}

        {/* Back to Form Button that resets the form */}
        <Button onClick={resetForm} variant="grey">
          Back to Form
        </Button>
      </div>
    );
  }
}
