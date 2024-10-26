import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const link = (
    <>
      <div className="md:mx-7 md:text-lg duration-200 hover:scale-105 ">
        <NavLink to="/statistics">Statistics</NavLink>
      </div>
      <div className="md:mx-7 md:text-lg duration-200 hover:scale-105 ">
        <NavLink to="/appliedJobs">Applied Jobs</NavLink>
      </div>
      <div className="md:mx-7 md:text-lg  duration-200 hover:scale-105 ">
        <NavLink to="/blog">Blog</NavLink>
      </div>
      <div className="md:mx-7 md:text-lg duration-200 hover:scale-105 ">
        <NavLink to="/account">My Account</NavLink>
      </div>
    </>
  );
  return (
    <div className="navbar bg-[#7e8ffe2f]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-blue-950"
          >
            {link}
          </ul>
        </div>
        <NavLink
          className="text-black px-5 text-lg md:text-xl font-semibold"
          to="/"
        >
          CareerHub
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-blue-950">{link}</ul>
      </div>
      <div className="navbar-end gap-1 md:gap-2">
        {/* Search bar */}
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 h-10 md:h-11 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
