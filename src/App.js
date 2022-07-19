import { Route, Routes } from "react-router-dom";
import SignIn from "./Components/Features/Users/SignIn";
import SignUp from "./Components/Features/Users/SignUp";
import HomePage from "./Components/Pages/HomePage/HomePage";
import Footer from "./Components/Pages/shared/Footer";
import Navbar from "./Components/Pages/shared/Navbar";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="singup" element={<SignUp />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
