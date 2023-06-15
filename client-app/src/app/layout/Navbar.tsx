import { useEffect, useState } from "react";
import { IoIosPeople } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import NavbarItems from "./NavbarItems";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 730) {
        setNavbarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="bg-white  fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="" className="flex items-center text-blue-600">
            <IoIosPeople size={50} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap  ">
              Eventopia
            </span>
          </Link>
          <div className="flex md:order-2">
            <NavLink
              to="/create_activity"
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
            >
              Create activity
            </NavLink>

            <div className="h-5">
              <button
                type="button"
                onClick={() => setNavbarOpen((prev) => !prev)}
                className="md:hidden text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm ml-2 px-5 py-1.5 "
              >
                <GiHamburgerMenu size={25}></GiHamburgerMenu>
              </button>
            </div>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <NavbarItems />
          </div>

          {navbarOpen && window.innerWidth < 760 && (
            <>
              <div className=" w-full bg-white rounded-md shadow-lg py-2">
                {/* Add your menu items here */}
                <NavbarItems />
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
