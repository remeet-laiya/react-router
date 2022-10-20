import Home from "./Pages/Home";
import Navbar1 from "./Components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar1 />

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;