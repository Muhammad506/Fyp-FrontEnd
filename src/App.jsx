
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./components/Home/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";
import FeaturesPage from "./components/Features/FeaturesPage";
import Login from "./components/Login";
import Register from "./components/Register";
import ContactUs from "./components/ContactUs";
import DashBoard from "./components/Dashboard/DashBoard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConditionalLayout><HomePage /></ConditionalLayout>} />
        <Route path="/about-us" element={<ConditionalLayout><AboutUs /></ConditionalLayout>} />
        <Route path="/features" element={<ConditionalLayout><FeaturesPage /></ConditionalLayout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact-us" element={<ConditionalLayout><ContactUs /></ConditionalLayout>} />
        <Route path="/dashboard/*" element={<DashBoard />} />
      </Routes>
    </Router>
  );
};

// ConditionalLayout Component
const ConditionalLayout = ({ children }) => {
  const location = useLocation(); // Get the current route
  const noNavFooterPages = ['/login', '/register', '/dashboard'];

  // Check if the current route is one of the excluded pages
  if (noNavFooterPages.includes(location.pathname)) {
    return <>{children}</>;
  }

  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default App;
