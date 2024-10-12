import React from "react";
import Layout from "../Layout";
import Card from "../../components/ui/DashboardCard";
import {
  barChartData,
  chartData,
  chartOptions,
  people,
  pieChartData,
} from "../../resources";
import LineChart from "../../components/feature/LineGraph";
import BarChart from "../../components/feature/BarChart";
import PieChart from "../../components/feature/PieChart";

// Icon for user

const user = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);

const Analytics: React.FC = () => {
  return (
    <Layout>
      <div className="mb-24 md:px-6 space-y-6">
        {/* Top Section: Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-3">
          <Card title="Total Members" value="150" icon={user} />
          <Card title="Active Members" value="80" icon={user} />
          <Card title="Donations Received" value="GHC 12,340" icon={user} />
          <Card title="Upcoming Events" value="5" icon={user} />
        </div>

        {/* Middle Section: Graphs and Active Members */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mx-3">
          {/* Graph Area */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-white shadow-xl shadow-gray-100 rounded-lg p-4 h-auto">
              <h3 className="text-lg font-semibold">Church Membership</h3>
              <div className="w-full h-80">
                <LineChart chartData={chartData} chartOptions={chartOptions} />
              </div>
            </div>

            {/* Container for Bar and Pie Charts */}
            <div className="flex flex-col lg:flex-row lg:space-x-4 gap-4">
              {/* Bar Chart Container */}
              <div className="bg-white shadow-xl shadow-gray-100 rounded-lg p-4 flex-1">
                <h3 className="text-lg font-semibold mb-4">
                  Ministry Distribution
                </h3>
                <div className="w-full h-80">
                  <BarChart data={barChartData} />
                </div>
              </div>

              {/* Pie Chart Container */}
              <div className="bg-white shadow-xl shadow-gray-100 rounded-lg p-4 flex-1">
                <h3 className="text-lg font-semibold mb-4">Church Wings</h3>
                <div className="w-full h-80">
                  <PieChart data={pieChartData} />
                </div>
              </div>
            </div>
          </div>

          {/* Active Members List */}
          <div className="bg-white shadow-xl shadow-gray-100 rounded-lg p-6 h-fit">
            <h3 className="text-lg font-semibold mb-4">
              Birthdays in September
            </h3>
            <hr />
            <ul role="list" className="divide-y divide-gray-100">
              {people?.map((person) => (
                <li
                  key={person?.email}
                  className="flex justify-between gap-x-6 py-5"
                >
                  <div className="flex min-w-0 gap-x-4">
                    <img
                      alt=""
                      src={person?.imageUrl}
                      className="h-8 w-8 flex-none rounded-full bg-gray-50"
                    />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-4 text-gray-900">
                        {person?.name}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {person?.email}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
