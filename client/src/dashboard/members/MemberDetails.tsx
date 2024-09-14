import React, { useState } from "react";
import Button from "../../components/ui/Button";
import Layout from "../Layout";
import MemberFinance from "../../components/feature/Finance";
import BasicInfo from "../../components/feature/BasicInfo";
import Help from "../../components/feature/Help";
import { ConfirmationDialog } from "../../components/shared/Dailogue";

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
    content: (
      <BasicInfo
        member={{
          avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Paul_Adefarasin.jpg",
          firstName: "James",
          lastName: "Patapaa",
          email: "james.patapaa@gmail.com",
          phone: "0245948393",
          bio: "This is the man who works in every ministry.",
          country: "Pipeano",
          city: "Close to pentecost",
          postalCode: "644",
          taxId: "982",
        }}
      />
    ),
  },
  {
    label: "Finance",
    content: <MemberFinance />,
  },
  {
    label: "Help",
    content: <Help />,
  },
];

const MemberDetails: React.FC<VerticalTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isDialogOpen, setDialogOpen] = useState(false); // State to control dialog visibility

  // Handle delete account button click
  const handleDeleteClick = () => {
    setDialogOpen(true); // Open the confirmation dialog
  };

  // Handle confirmation actions
  const handleConfirm = () => {
    // Add delete logic here
    console.log("Account deleted");
    setDialogOpen(false); // Close the dialog after confirmation
  };

  const handleCancel = () => {
    setDialogOpen(false); // Close the dialog when canceled
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row justify-center">
        {/* Sidebar with Tab Labels */}
        <div className="md:w-1/4 w-full p-6 rounded-lg shadow-lg shadow-gray-100 mt-3 md:h-[84vh] h-auto flex flex-col justify-between bg-white">
          {/* Tab Buttons */}
          <div>
            {tabsInfo.map((tab, index) => (
              <button
                key={index}
                className={`w-full text-left py-2 px-3 mb-2 rounded-lg transition-colors ${
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
            <Button
              className="text-red-500 bg-red-500 w-full"
              type="button"
              onClick={handleDeleteClick} // Open the dialog on click
            >
              Delete Account
            </Button>
          </div>
        </div>

        {/* Content Area */}
        <div className="md:w-3/4 w-full mx-0">{tabsInfo[activeTab].content}</div>

        {/* Confirmation Dialog */}
        {isDialogOpen && ( // Ensure the dialog is only rendered when open
          <ConfirmationDialog
            isOpen={isDialogOpen} // Bind the dialog visibility to the state
            title="Delete account"
            message="Are you sure you want to delete this account? Every data about this member will be permanently removed. This action cannot be undone."
            confirmButtonText="Yes, Delete"
            cancelButtonText="Cancel"
            onConfirm={handleConfirm} // Handle confirm action
            onCancel={handleCancel}   // Handle cancel action
          />
        )}
      </div>
    </Layout>
  );
};

export default MemberDetails;
