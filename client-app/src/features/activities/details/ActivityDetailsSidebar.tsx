import React from "react";

export default function ActivityDetailsSidebar() {
  return (
    <>
      <div className="block bg-white border border-gray-200 rounded-lg shadow">
        <div className="bg-blue-500 w-full rounded-t-md p-3 text-white mb-4">
          3 People going
        </div>
        <div className="grid grid-cols-10 px-4 border-b-2 mt-2 relative">
          <div className="absolute top-2 right-3 bg-orange-500 p-1.5 rounded-lg text-white font-semibold text-sm">
            Host
          </div>
          <div className="col-span-2">
            <img
              src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
              alt=""
            />
          </div>
          <div className="col-span-8 mt-3">
            <p className="text-blue-700 font-bold">Bob</p>
            <p className="text-orange-400">Following</p>
          </div>
        </div>

        <div className="grid grid-cols-10 px-4 border-b-2 mt-2">
          <div className="col-span-2">
            <img
              src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
              alt=""
            />
          </div>
          <div className="col-span-8 mt-3">
            <p className="text-blue-700 font-bold">Anna</p>
            <p className="text-orange-400">Following</p>
          </div>
        </div>
      </div>
    </>
  );
}
