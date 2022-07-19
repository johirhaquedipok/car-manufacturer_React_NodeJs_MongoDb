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
  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex="0">
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl" to={"/"}>
            SoniKon
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <CustomLink to="/home">Home</CustomLink>
            </li>
            <li tabIndex="0">
              <CustomLink to="/blog">Blog</CustomLink>
            </li>
            <li>
              <CustomLink to="/portfolio">Portfolio</CustomLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal p-0">
            <>
              {user ? (
                <div className="dropdown  dropdown-left">
                  <div className="avatar online " tabIndex="0">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                      <img src={user.photoURL} alt={user.displayName} />
                    </div>
                  </div>

                  <div
                    tabIndex="0"
                    className="menu menu-compact dropdown-content mt-3 p-2 rounded-box w-52"
                  >
                    <AvatarCard user={user} signout={signout} />
                  </div>
                </div>
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
