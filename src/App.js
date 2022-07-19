import { Route, Routes } from "react-router-dom";
import AddAProduct from "./Components/Features/Dashboard/AdminDashBoard/AddAProduct";
import ManageAllOrders from "./Components/Features/Dashboard/AdminDashBoard/ManageAllOrders";
import ManageProducts from "./Components/Features/Dashboard/AdminDashBoard/ManageProducts";
import Dashboard from "./Components/Features/Dashboard/Dashboard";
import AddAReview from "./Components/Features/Dashboard/Regular-user-dashboard/AddAReview";
import MyOrders from "./Components/Features/Dashboard/Regular-user-dashboard/MyOrders";
import UsersProfile from "./Components/Features/Dashboard/UsersProfile/UsersProfile";
import SignIn from "./Components/Features/Users/SignIn";
import SignUp from "./Components/Features/Users/SignUp";
import Blog from "./Components/Pages/Blog/Blog";
import HomePage from "./Components/Pages/HomePage/HomePage";
import Portfolio from "./Components/Pages/Portfolio/Portfolio";
import Footer from "./Components/Pages/shared/Footer";
import Navbar from "./Components/Pages/shared/Navbar";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="blog" element={<Blog />} />
        <Route path="portfolio" element={<Portfolio />} />

        {/* auth based routes for all users */}
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="usersprofile" element={<UsersProfile />} />

          {/* auth based routes for regular users */}
          <Route path="addareview" element={<AddAReview />} />
          <Route path="myorders" element={<MyOrders />} />

          {/* auth based routes for Admin */}
          <Route path="addaproduct" element={<AddAProduct />} />
          <Route path="mangeallorders" element={<ManageAllOrders />} />
          <Route path="mangeproducts" element={<ManageProducts />} />
        </Route>

        {/* signin / sing up */}
        <Route path="signin" element={<SignIn />} />
        <Route path="singup" element={<SignUp />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
