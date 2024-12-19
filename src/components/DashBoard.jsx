

const DashBoard = () => {
  return (
    <div className="min-h-screen bg-gray-100 md:p-6 p-2 mt-8 flex flex-col justify-center items-center ">
      <div className="container mx-auto flex flex-col justify-center items-center animate-zoomIn">
        <h1 className="text-3xl md:text-4xl  xl:text-5xl text-center leading-10 font-semibold text-gray-800 py-12">
          Solar Intelli Solutions Dashboard
        </h1>

        {/* Stats Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center text-center  gap-6">
          {/* Active Plates */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Active Plates
            </h2>
            <p className="text-4xl font-bold text-green-500">45</p>
            <p className="text-gray-500 mt-2">Currently Active</p>
          </div>

          {/* Current Wastages */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Current Wastages
            </h2>
            <p className="text-4xl font-bold text-red-500">12%</p>
            <p className="text-gray-500 mt-2">Real-time Monitoring</p>
          </div>

          {/* Power Generated */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Power Generated
            </h2>
            <p className="text-4xl font-bold text-blue-500">320 kW</p>
            <p className="text-gray-500 mt-2">This Month</p>
          </div>

          {/* Energy Savings */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Energy Savings
            </h2>
            <p className="text-4xl font-bold text-green-500">25%</p>
            <p className="text-gray-500 mt-2">Compared to Last Month</p>
          </div>

          {/* Battery Status */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Battery Status
            </h2>
            <p className="text-4xl font-bold text-yellow-500">85%</p>
            <p className="text-gray-500 mt-2">Current Charge Level</p>
          </div>

          {/* Total Systems Monitored */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Total Systems Monitored
            </h2>
            <p className="text-4xl font-bold text-blue-500">120</p>
            <p className="text-gray-500 mt-2">Across All Locations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
