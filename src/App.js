import Footer from "./Components/CommonComponents/Footer";
import Navbar from "./Components/CommonComponents/Navbar";
import Blog from "./Components/Pages/Blog/Blog";
import SignIn from "./Components/Pages/Private/SignIn";
import SignUp from "./Components/Pages/Private/SignUp";

function App() {
  return (
    <>
      <Navbar />

      <Blog />
      <SignIn />
      <SignUp />
      <Footer />
    </>
  );
}

export default App;
