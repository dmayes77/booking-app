'use client';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Helper function to format service names.
const formatServiceName = (serviceSlug) => {
  return serviceSlug
    .split('-')
    .map((word) =>
      word.toLowerCase() === 'mad'
        ? 'MAD'
        : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join(' ');
};

const QuickQuoteForm = ({ serviceCategories = [] }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const totalSteps = 2;

  const initialValues = {
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    fullName: '',
    phone: '',
    email: '',
    notes: '',
    services: [],
  };

  // Validation schema for step 1 (vehicle info)
  const validationSchemaStep1 = Yup.object().shape({
    vehicleYear: Yup.string().required('Vehicle Year is required'),
    vehicleMake: Yup.string().required('Vehicle Make is required'),
    vehicleModel: Yup.string().required('Vehicle Model is required'),
  });

  // Validation schema for step 2 (contact & services)
  const validationSchemaStep2 = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phone: Yup.string().required('Phone is required'),
    services: Yup.array().min(1, 'Please select at least one service'),
    // notes is optional – no .required()
  });

  // Use the proper schema based on the current step.
  const currentValidationSchema =
    step === 1 ? validationSchemaStep1 : validationSchemaStep2;

  const handleSubmit = async (values, actions) => {
    if (step === 1) {
      // Validate step 1 and move to step 2.
      setStep(2);
      actions.setTouched({}); // Reset touched fields for step 2.
    } else {
      // Define the source (if not provided in form, default to "QuickQuoteForm")
      const source = values.source || 'Ceramic Coating Estimate Request';

      // Build combinedNotes using the provided snippet logic.
      let combinedNotes = values.notes || '';
      combinedNotes += `\nWebsite Source: ${source}`;
      if (values.services && values.services.length > 0) {
        combinedNotes += `\nServices: ${values.services
          .map((service) => formatServiceName(service))
          .join(', ')}`;
      }

      // Build the payload to match what the API expects.
      const payload = {
        contactName: values.fullName,
        phone: values.phone,
        email: values.email,
        // The API expects a string for 'interested_in'
        interested_in: formatServiceName(values.services[0]),
        source: source,
        notes: combinedNotes,
        vehicle_information: {
          vehicle_year: values.vehicleYear,
          vehicle_make: values.vehicleMake,
          vehicle_model: values.vehicleModel,
        },
      };

      try {
        const res = await fetch('/api/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (res.ok) {
          setSubmittedData(values);
          setSubmitted(true);
        } else {
          console.error('Submission error', data);
          // Optionally handle the error (show a message to the user, etc.)
        }
      } catch (error) {
        console.error('Fetch error', error);
      }
    }
  };

  const progressPercentage = (step / totalSteps) * 100;

  return (
    <div
      id="estimate-form"
      className="mx-auto w-full space-y-4 rounded-lg bg-white p-4 text-black lg:-mt-12 lg:p-12"
    >
      {submitted ? (
        // Confirmation screen shown after submission.
        <div className="text-center">
          <h3 className="text-2xl font-bold">
            Thank You
            {submittedData && submittedData.fullName
              ? `, ${submittedData.fullName}`
              : ''}
            !
          </h3>
          <p>
            We’ve received the details for your {submittedData.vehicleYear}{' '}
            {submittedData.vehicleMake} {submittedData.vehicleModel}.
          </p>
          <p>
            It sounds like you’re interested in{' '}
            {submittedData.services
              .map((service) => formatServiceName(service))
              .join(', ')}
            .
          </p>
          <p>
            You’ll receive an email at {submittedData.email} with an estimate
            that includes three tailored options. We appreciate your interest
            and will be in touch soon with the next steps.
          </p>
          {submittedData.notes && (
            <p>
              Also, we noted your additional details: "{submittedData.notes}".
            </p>
          )}
        </div>
      ) : (
        <>
          <h3 className="uppercase">Get a fast estimate today!</h3>
          <p>Two simple steps—finished in under a minute.</p>
          {/* Progress Bar */}
          <div
            style={{
              background: '#e0e0df',
              borderRadius: 5,
              marginBottom: '1rem',
            }}
          >
            <div
              style={{
                height: '10px',
                width: `${progressPercentage}%`,
                background: '#ff0023',
                borderRadius: 5,
                transition: 'width 0.3s ease',
              }}
            ></div>
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={currentValidationSchema}
          >
            {() => (
              <Form>
                {step === 1 && (
                  <div>
                    <h4 className="mb-2">What is your vehicle?</h4>
                    <div className="mb-3">
                      <Field
                        id="vehicleYear"
                        name="vehicleYear"
                        placeholder="Vehicle Year"
                        className="w-full rounded border bg-white px-3 py-2 text-black"
                      />
                      <ErrorMessage
                        name="vehicleYear"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>
                    <div className="mb-3">
                      <Field
                        id="vehicleMake"
                        name="vehicleMake"
                        placeholder="Vehicle Make"
                        className="w-full rounded border bg-white px-3 py-2 text-black"
                      />
                      <ErrorMessage
                        name="vehicleMake"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>
                    <div className="mb-3">
                      <Field
                        id="vehicleModel"
                        name="vehicleModel"
                        placeholder="Vehicle Model"
                        className="w-full rounded border bg-white px-3 py-2 text-black"
                      />
                      <ErrorMessage
                        name="vehicleModel"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <div className="mb-3">
                      <Field
                        id="fullName"
                        name="fullName"
                        placeholder="Full Name"
                        className="w-full rounded border bg-white px-3 py-2 text-black"
                      />
                      <ErrorMessage
                        name="fullName"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>
                    <div className="mb-3">
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="w-full rounded border bg-white px-3 py-2 text-black"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>
                    <div className="mb-3">
                      <Field
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                        className="w-full rounded border bg-white px-3 py-2 text-black"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>
                    <div className="mb-3">
                      <Field
                        as="textarea"
                        id="notes"
                        name="notes"
                        placeholder="Any additional details..."
                        className="w-full rounded border bg-white px-3 py-2 text-black"
                      />
                      {/* Notes field is optional */}
                    </div>
                    <div>
                      <p className="mb-2">I am interested in:</p>
                      <div className="mx-auto w-[17.75rem] text-left">
                        {serviceCategories.map((service, index) => (
                          <label key={index} className="mb-1 block">
                            <Field
                              type="checkbox"
                              name="services"
                              value={service.value}
                              className="mr-2"
                            />
                            {service.label}
                          </label>
                        ))}
                        <ErrorMessage
                          name="services"
                          component="div"
                          className="text-sm text-red-500"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-4">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="mr-2 rounded border px-4 py-2"
                    >
                      Back
                    </button>
                  )}
                  <button type="submit" className="rounded border px-4 py-2">
                    {step === 2 ? 'Submit' : 'Next'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
};

export default QuickQuoteForm;
