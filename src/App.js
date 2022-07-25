import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddAProduct from "./Components/Features/Dashboard/AdminDashBoard/AddAProduct";
import ManageAllOrders from "./Components/Features/Dashboard/AdminDashBoard/ManageAllOrders";
import ManageProducts from "./Components/Features/Dashboard/AdminDashBoard/ManageProducts";
import Dashboard from "./Components/Features/Dashboard/Dashboard";
import AddAReview from "./Components/Features/Dashboard/Regular-user-dashboard/AddAReview";
import MyOrders from "./Components/Features/Dashboard/Regular-user-dashboard/MyOrders";
import UsersProfile from "./Components/Features/Dashboard/UsersProfile/UsersProfile";
import RequireAdmin from "./Components/Features/Users/RequireAdmin";
import RequireAuth from "./Components/Features/Users/RequireAuth";
import ResetPassword from "./Components/Features/Users/ResetPassword";
import SignIn from "./Components/Features/Users/SignIn";
import SignUp from "./Components/Features/Users/SignUp";
import Blog from "./Components/Pages/Blog/Blog";
import HomePage from "./Components/Pages/HomePage/HomePage";
import NotFound from "./Components/Pages/NotFound/NotFound";
import PaymentPage from "./Components/Pages/PaymentPage/PaymentPage";
import Portfolio from "./Components/Pages/Portfolio/Portfolio";
import PurchasePage from "./Components/Pages/PurchasePage/PurchasePage";
import Footer from "./Components/Pages/shared/Footer";
import Navbar from "./Components/Pages/shared/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl my-0 mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route
            path="purchase/:id"
            element={
              <RequireAuth>
                <PurchasePage />
              </RequireAuth>
            }
          />

          {/* auth based routes for all users */}
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route path="usersprofile" element={<UsersProfile />} />

            {/* auth based routes for regular users */}
            <Route path="addareview" element={<AddAReview />} />
            <Route path="myorders" element={<MyOrders />} />

            {/* auth based routes for Admin */}
            <Route
              path="addaproduct"
              element={
                <RequireAdmin>
                  <AddAProduct />
                </RequireAdmin>
              }
            />
            <Route
              path="mangeallorders"
              element={
                <RequireAdmin>
                  <ManageAllOrders />
                </RequireAdmin>
              }
            />
            <Route
              path="mangeproducts"
              element={
                <RequireAdmin>
                  <ManageProducts />
                </RequireAdmin>
              }
            />
            <Route
              path="payment/:id"
              element={
                <RequireAuth>
                  <PaymentPage />
                </RequireAuth>
              }
            />
          </Route>

          {/* signin / sing up */}
          <Route path="signin" element={<SignIn />} />
          <Route path="singup" element={<SignUp />} />

          <Route path="resetpwd" element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
}

export default App;
