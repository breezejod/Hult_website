import React from "react";
import { Link, Outlet } from "react-router-dom";
import hult_logo from "../assets/hult_logo.png";

const Nav = () => {
  return (
    <div>
      <header>
        <nav className="flex flex-col items-center justify-center sm:flex-row">
          <Link to="/">
            <img
              className="mb-4 sm:absolute sm:top-10 sm:left-40"
              width={200}
              src={hult_logo}
              alt="Hult Logo"
            />
          </Link>
          <ul className="flex pt-4 text-xl sm:pt-10 sm:pl-80 space-x-11">
            <li>
              <Link to="/About" className="hover:text-pink-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/Events" className="hover:text-pink-500">
                Events
              </Link>
            </li>
            <li>
              <Link to="/Team" className="hover:text-pink-500">
                Team
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:text-pink-500">
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex pt-4 sm:pt-10 sm:pl-11">
            <button className="px-6 py-2 text-white bg-pink-500 rounded-full hover:shadow-lg">
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span>Apply Now</span>
              </a>
            </button>
          </div>
        </nav>
        <Outlet />
      </header>
    </div>
  );
};

export default Nav;
