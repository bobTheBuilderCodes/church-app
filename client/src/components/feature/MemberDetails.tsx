import React, { useState } from "react";
import Button from "../ui/Button";
import Layout from "../../dashboard/Layout";
import MemberFinance from "./Finance";
import PrayerRequest from "./PrayerRequests";
import BasicInfo from "./BasicInfo";
import Help from "./Help";



interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface VerticalTabsProps {
  tabs?: TabItem[];
}

const tabsInfo = [
    {
      label: "Basic Info",
      content: <BasicInfo member={{
        avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Paul_Adefarasin.jpg",
        firstName: "James",
        lastName: "Patapaa",
        email: "james.patapaa@gmail.com",
        phone: "0245948393",
        bio: "This is the man who works in every ministry.",
        country: "Pipeano",
        city: "Close to pentecost",
        postalCode: "644",
        taxId: "982"
      }} />,
    },
    {
      label: "Finance",
      content: < MemberFinance />,
    },
    {
      label: "Prayer Requests",
      content: <PrayerRequest />,
    },
    {
      label: "Help",
      content: <Help />,
    },
  ];

const MemberDetails: React.FC<VerticalTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
   <Layout>
     <div className="flex flex-col md:flex-row  justify-center">
      {/* Sidebar with Tab Labels */}
      <div className="md:w-1/4 w-full bg-gray-100 p-2 md:border-r h-[87vh] flex flex-col justify-between">
        {/* Tab Buttons */}
        <div>
          {tabsInfo.map((tab, index) => (
            <button
              key={index}
              className={`w-full text-left py-2 px-4 mb-2 rounded-lg transition-colors ${
                activeTab === index
                  ? "bg-indigo-600 text-white"
                  : "bg-white hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Delete Account Button - Hidden on Mobile */}
        <div className="mt-auto hidden md:block">
          <Button className="text-red-500 bg-red-500 w-full" type="button">
            Delete Account
          </Button>
        </div>
      </div>

      {/* Content Area */}
      <div className="md:w-3/4 w-full bg-white py-3">
        {tabsInfo[activeTab].content}
      </div>
    </div>
   </Layout>
  );
};

export default MemberDetails;
