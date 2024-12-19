import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./components/Home/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";
import FeaturesPage from "./components/Features/FeaturesPage";
import Login from "./components/Login";
import Register from "./components/Register";
import ContactUs from "./components/ContactUs";
import DashBoard from "./components/DashBoard";



const App = () => {
  const location = useLocation();
  const hideNavbarFooter =
    location.pathname === "/login" || location.pathname === "/register";
  // location.pathname === "/dashboard"; // Hide navbar and footer on dashboard

  return (
    <div>
      {!hideNavbarFooter && <NavBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/dashboard" element={<DashBoard />} /> {/* New route */}
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
};

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
