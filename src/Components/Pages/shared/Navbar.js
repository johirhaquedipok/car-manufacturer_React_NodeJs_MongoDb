import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import AvatarCard from "../../Features/Ui/AvatarCard";
import CustomLink from "./CustomLink/CustomLink";
/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = () => {
  const [user] = useAuthState(auth);

  const signout = () => {
    signOut(auth);
  };

  const menuNav = (
    <ul
      tabIndex="0"
      className="menu menu-compact dropdown-content md:flex mt-3 p2 shadow bg-base-100 rounded-box w-52  md:menu-horizontal md:p-0"
    >
      <li>
        <CustomLink to="/home">Home</CustomLink>
      </li>
      <li>
        <CustomLink to="/portfolio">Portfolio</CustomLink>
      </li>
      <li>
        <CustomLink to="/blog">Blog</CustomLink>
      </li>
    </ul>
  );
  return (
    <div className="max-w-screen-2xl my-0 mx-auto">
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </label>
            {menuNav}
          </div>
          <Link className="btn btn-ghost normal-case text-xl" to={"/"}>
            SoniKon
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <CustomLink to="/home">Home</CustomLink>
            </li>
            <li>
              <CustomLink to="/portfolio">Portfolio</CustomLink>
            </li>
            <li>
              <CustomLink to="/blog">Blog</CustomLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:flex">
          <ul className="menu menu-horizontal p-0 ">
            <>
              {user ? (
                <>
                  {/* dashboard */}
                  <li>
                    <CustomLink to="/dashboard">Dashboard</CustomLink>
                  </li>

                  {/* users profile card */}
                  <li>
                    <div className="dropdown dropdown-left">
                      <div className="avatar online " tabIndex="0">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                          <img src={user?.photoURL} alt={user?.displayName} />
                        </div>
                      </div>
                      <div
                        tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 rounded-box w-52 lg:w-72"
                      >
                        <AvatarCard user={user} signout={signout} />
                      </div>
                    </div>
                  </li>
                </>
              ) : (
                <li>
                  <CustomLink to="/signin">Sign In</CustomLink>
                </li>
              )}
            </>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
