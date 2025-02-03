"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div>
      <h1 className="text-center text-red-500 text-4xl">
        Something went Wrong!!!
      </h1>

      <p className="text-center text-red-500 text-4xl py-5">{error.message}</p>

      <div className="text-center">
        <button
          onClick={() => reset()}
          className="bg-red-500 text-white py-2 px-5 rounded-lg transition-all hover:bg-green-500"
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
