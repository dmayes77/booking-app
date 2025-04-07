import React from "react";
import Link from "@/components/Link";

export default function Custom404() {
  return (
    <>
      {/* Ensure that your <html> and <body> have h-full class if needed */}
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-mad-red-bright">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-gray-500 sm:text-xl">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="bg-mad-red-bright hover:bg-mad-red focus-visible:outline-mad-redbg-mad-red-bright rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Go back home
            </Link>
            <Link
              href="mailto:support@mayesautodetailing.com?subject=404%20Page%20Not%20Found"
              className="text-sm font-semibold text-mad-red-bright"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
