import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "py-1 px-3 text-[#23BE0A] font-semibold border border-[#23BE0A] rounded-lg"
              : "text-[#131313]/80"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/listed-books"
          className={({ isActive }) =>
            isActive
              ? "py-1 px-3 text-[#23BE0A] font-semibold border border-[#23BE0A] rounded-lg"
              : "text-[#131313]/80"
          }
        >
          Listed Books
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/read-pages"
          className={({ isActive }) =>
            isActive
              ? "py-1 px-3 text-[#23BE0A] font-semibold border border-[#23BE0A] rounded-lg"
              : "text-[#131313]/80"
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <section className="container mx-auto px-5">
      <div>
        <nav className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <h2 className="w-full text-[28px] text-[#131313] font-bold">Book Vibe</h2>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex items-center gap-4">
              {links}
            </ul>
          </div>

          <div className="navbar-end space-x-4 hidden sm:flex">
            <a className="btn px-5 text-base-100 text-lg font-semibold bg-[#23BE0A] rounded-lg border-none shadow-none">
              Sign In
            </a>

            <a className="btn px-5 text-base-100 text-lg font-semibold bg-[#59C6D2] rounded-lg border-none shadow-none">
              Sign Up
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
