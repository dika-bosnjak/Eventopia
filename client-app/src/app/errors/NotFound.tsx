import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] ">
      <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
      <p className="text-gray-600">
        The page you're looking for does not exist.
      </p>
      <Link
        to="/activities"
        className="button bg-blue-500 p-2 rounded-lg text-white font-semibold mt-4 hover:bg-blue-700"
      >
        Go back to activities
      </Link>
    </div>
  );
}
