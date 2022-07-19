import { Route, Routes } from "react-router-dom";
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
        <Route path="/home" element={<HomePage />} />
        <Route path="blog" element={<Blog />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="singup" element={<SignUp />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
