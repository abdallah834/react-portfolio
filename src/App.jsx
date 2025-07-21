import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
