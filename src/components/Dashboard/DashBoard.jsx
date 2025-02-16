import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Welcome from "./Welcome";
import ActivePlates from "./ActivePlates";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-[#021430] via-[#0f1c47] to-[#021430]">
      {/* Sidebar Section */}
      <div className="md:w-1/5 w-full z-10 md:border-r  border-gray-700  border-b">
        <Sidebar />
      </div>

      {/* Content Section */}
      <div className="flex-1 p-8">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/active-plates" element={<ActivePlates />} />
          {/* Other routes */}
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
