import React from "react";
import { NavLink } from "react-router-dom";

export default function NavbarItems() {
  return (
    <>
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
        <li>
          <NavLink
            to="/"
            className="block py-2 pl-3 pr-4  rounded md:bg-transparent md:text-blue-600 md:p-0  "
            aria-current="page"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/activities"
            className="block py-2 pl-3 pr-4  rounded md:bg-transparent md:text-blue-600 md:p-0 "
            aria-current="page"
          >
            Activities
          </NavLink>
        </li>
      </ul>
    </>
  );
}
