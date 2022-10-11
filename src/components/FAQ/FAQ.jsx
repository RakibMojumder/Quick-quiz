import React from "react";

const FAQ = () => {
  return (
    <section className="h-screen flex items-center text-gray-700">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <details open="">
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What is the purpose of React Router?
            </summary>
            <div className="px-4 pb-4">
              <p>
                React Router is a standard library for routing in React. It
                enables the navigation among views of various components in a
                React Application, allows changing the browser URL, and keeps
                the UI in sync with the URL.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How does Context API works?
            </summary>
            <div className="px-4 pb-4">
              <p>
                The React Context API is a way for a React app to effectively
                produce global variables that can be passed around. This is the
                alternative to "prop drilling" or moving props from grandparent
                to child to parent, and so on.
              </p>
            </div>
          </details>
          <details open="">
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How does useHref Hooks works?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                The useHref hook returns a URL that may be used to link to the
                given to location. even outside of react router.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
