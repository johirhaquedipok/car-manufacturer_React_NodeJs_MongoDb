import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";
import CustomLink from "../../Pages/shared/CustomLink/CustomLink";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <>
      <div className="drawer drawer-mobile mb-5">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content px-2 ">
          {/* Page content here */}
          <h2 className="text-5xl text-purple-500 text-center">Dashboard</h2>
          <div className="flex items-center justify-center mb-4">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>

          <Outlet />
        </div>
        <div className="drawer-side bg-base-200">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard">User Profile</Link>
            </li>

            {!admin && (
              <>
                <li>
                  <CustomLink to="/dashboard/addareview">
                    Add A review
                  </CustomLink>
                </li>
                <li>
                  <CustomLink to="/dashboard/myorders">My Orders</CustomLink>
                </li>
              </>
            )}
            {admin && (
              <>
                <li>
                  <CustomLink to="/dashboard/addaproduct">
                    Add A Product
                  </CustomLink>
                </li>
                <li>
                  <CustomLink to="/dashboard/mangeallorders">
                    Manage All Orders
                  </CustomLink>
                </li>
                <li>
                  <CustomLink to="/dashboard/mangeproducts">
                    Manage Products
                  </CustomLink>
                </li>
                <li>
                  <CustomLink to="/dashboard/allusers">All Users</CustomLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
