// import React, { useState } from 'react';
// import Layout from '../Layout';
// import Button from '../../components/ui/Button';
// import { Link } from 'react-router-dom';

// const ProfileCard = () => {
//   type Section = 'tithes' | 'prayer' | 'basicInfo'; // Add 'basicInfo' to the type

//   const [activeTab, setActiveTab] = useState<Section>('basicInfo'); // Default to basicInfo
//   const [isAccordionOpen, setIsAccordionOpen] = useState({
//     tithes: false,
//     prayer: false,
//     basicInfo: false, // Add state for basicInfo accordion
//   });

//   const toggleAccordion = (section: Section) => {
//     setIsAccordionOpen((prevState) => ({
//       ...prevState,
//       [section]: !prevState[section],
//     }));
//   };

//   return (
//     <Layout>
//       <div className="w-full p-6 rounded-lg">
//         {/* Profile Section */}
//         <div className="flex flex-col items-center bg-white py-6 rounded-lg">
//           <div className="relative -mt-16">
//             <img
//               className="w-40 h-40 rounded-md object-cover border-4 border-white shadow-lg"
//               src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Paul_Adefarasin.jpg"
//               alt="Kwesi Arthur Emmanuel"
//             />
//           </div>
//           <h2 className="text-xl font-bold mt-3">Kwesi Arthur Emmanuel</h2>
//           <p className="text-gray-500 text-sm">Joined 2021 • Youth Organiser</p>
//         </div>

//         {/* Tab View for Desktop */}
//         <div className="hidden lg:block mt-6">
//           <div className="flex border-b">
//             <button
//               onClick={() => setActiveTab('basicInfo')}
//               className={`flex-1 py-2 px-4 ${
//                 activeTab === 'basicInfo'
//                   ? 'border-b-2 border-indigo-600 text-indigo-600'
//                   : 'text-gray-500'
//               }`}
//             >
//               Basic Information
//             </button>
//             <button
//               onClick={() => setActiveTab('tithes')}
//               className={`flex-1 py-2 px-4 ${
//                 activeTab === 'tithes'
//                   ? 'border-b-2 border-indigo-600 text-indigo-600'
//                   : 'text-gray-500'
//               }`}
//             >
//               Tithes and Donations
//             </button>
//             <button
//               onClick={() => setActiveTab('prayer')}
//               className={`flex-1 py-2 px-4 ${
//                 activeTab === 'prayer'
//                   ? 'border-b-2 border-indigo-600 text-indigo-600'
//                   : 'text-gray-500'
//               }`}
//             >
//               Prayer Requests
//             </button>
//           </div>

//           <div className="mt-4">
//             {activeTab === 'basicInfo' && (
//               <div className="p-4 bg-white shadow rounded-lg">
//                 <p className="font-semibold">Basic Information Details</p>
//               </div>
//             )}
//             {activeTab === 'tithes' && (
//               <div className="p-4 bg-white shadow rounded-lg">
//                 <p className="font-semibold">Tithes Details</p>
//               </div>
//             )}
//             {activeTab === 'prayer' && (
//               <div className="p-4 bg-white shadow rounded-lg">
//                 <p className="font-semibold">Prayer Request Details</p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Accordion View for Mobile */}
//         <div className="block lg:hidden mt-6">
//           <div className="space-y-4">
//             {/* Basic Information Accordion */}
//             <div>
//               <button
//                 onClick={() => toggleAccordion('basicInfo')}
//                 className="flex items-center justify-between w-full p-4 bg-white rounded-lg"
//               >
//                 <span className="flex items-center">
//                   <span className="bg-indigo-100 p-3 rounded-full">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-indigo-500"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path d="M10 4a6 6 0 10.001 12.001A6 6 0 0010 4z" />
//                       <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1 10.414L5.586 12l-1.414 1.414 4.414 4.414L15.414 12l-1.414-1.414-4.414 4.414z" />
//                     </svg>
//                   </span>
//                   <span className="ml-3 font-semibold text-gray-700">
//                     Basic Information
//                   </span>
//                 </span>
//                 {/* Chevron icon based on the accordion state */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className={`h-6 w-6 text-gray-400 transform transition-transform duration-300 ${
//                     isAccordionOpen.basicInfo ? 'rotate-90' : ''
//                   }`}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </button>
//               <div
//                 className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                   isAccordionOpen.basicInfo ? 'max-h-40' : 'max-h-0'
//                 }`}
//               >
//                 <div className="p-4 mt-2">
//                   <p className="font-semibold">Basic Information Details</p>
//                 </div>
//               </div>
//             </div>

//             {/* Tithes and Donations Accordion */}
//             <div>
//               <button
//                 onClick={() => toggleAccordion('tithes')}
//                 className="flex items-center justify-between w-full p-4 bg-white rounded-lg"
//               >
//                 <span className="flex items-center">
//                   <span className="bg-green-100 p-3 rounded-full">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-green-500"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path d="M9 12H7v2h2v-2zm0-4H7v2h2V8zm0 8H7v2h2v-2z" />
//                       <path
//                         fillRule="evenodd"
//                         d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zM3 5a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V5zm14 4h-2v4h2V9z"
//                       />
//                     </svg>
//                   </span>
//                   <span className="ml-3 font-semibold text-gray-700">
//                     Tithes & Donations
//                   </span>
//                 </span>
//                 {/* Chevron icon based on the accordion state */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className={`h-6 w-6 text-gray-400 transform transition-transform duration-300 ${
//                     isAccordionOpen.tithes ? 'rotate-90' : ''
//                   }`}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </button>
//               <div
//                 className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                   isAccordionOpen.tithes ? 'max-h-40' : 'max-h-0'
//                 }`}
//               >
//                 <div className="p-4 mt-2">
//                   <p className="font-semibold">Tithes lists / history</p>
//                 </div>
//               </div>
//             </div>

//             {/* Prayer Accordion */}
//             <div>
//               <button
//                 onClick={() => toggleAccordion('prayer')}
//                 className="flex items-center justify-between w-full p-4 bg-white rounded-lg"
//               >
//                 <span className="flex items-center">
//                   <span className="bg-red-100 p-3 rounded-full">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-red-500"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path d="M5 5h10v10H5z" />
//                       <path d="M9 2a1 1 0 00-1 1v2H6a1 1 0 00-1 1v2h2v2H4a1 1 0 00-1 1v2h12v-2a1 1 0 00-1-1h-2v-2h2V6a1 1 0 00-1-1h-2V3a1 1 0 00-1-1H9z" />
//                     </svg>
//                   </span>
//                   <span className="ml-3 font-semibold text-gray-700">
//                     Prayer Requests
//                   </span>
//                 </span>
//                 {/* Chevron icon based on the accordion state */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className={`h-6 w-6 text-gray-400 transform transition-transform duration-300 ${
//                     isAccordionOpen.prayer ? 'rotate-90' : ''
//                   }`}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </button>
//               <div
//                 className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                   isAccordionOpen.prayer ? 'max-h-40' : 'max-h-0'
//                 }`}
//               >
//                 <div className="p-4 mt-2">
//                   <p className="font-semibold">Prayer Request Details</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Button
//         type="button"
//         className="fixed bottom-4 right-4 z-30 w-[140px] sm:hidden bg-indigo-500 text-white p-4 "
//       >
//         <Link to={"/add-program"}>Record Tithe</Link>
//       </Button>

//     </Layout>
//   );
// };

// export default ProfileCard;


import React, { useState } from 'react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('basic-info');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-full w-24 h-24 mx-auto"
          />
          <h1 className="text-xl font-bold">James Patapaa</h1>
          <p className="text-gray-500">This is the man who works in every ministry. Close to pentecost, Pipeano</p>
        </div>

        <div className="flex justify-center mb-6">
          <Tab label="Basic Info" active={activeTab === 'basic-info'} onClick={() => setActiveTab('basic-info')} />
          <Tab label="Finance" active={activeTab === 'finance'} onClick={() => setActiveTab('finance')} />
          <Tab label="Help" active={activeTab === 'help'} onClick={() => setActiveTab('help')} />
        </div>

        <div>
          {activeTab === 'basic-info' && <BasicInfo />}
          {activeTab === 'finance' && <DummyContent />}
          {activeTab === 'help' && <DummyContent />}
        </div>

        <div className="text-right">
          <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Delete Account</button>
        </div>
      </div>
    </div>
  );
};

const Tab: React.FC<{ label: string; active: boolean; onClick: () => void }> = ({ label, active, onClick }) => (
  <button
    className={`px-4 py-2 font-semibold text-sm ${active ? 'border-b-2 border-indigo-500 text-indigo-500' : 'text-gray-500'}`}
    onClick={onClick}
  >
    {label}
  </button>
);

const BasicInfo: React.FC = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Personal Information</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-gray-700">First Name</label>
        <p className="bg-gray-100 p-2 rounded">James</p>
      </div>
      <div>
        <label className="block text-gray-700">Last Name</label>
        <p className="bg-gray-100 p-2 rounded">Patapaa</p>
      </div>
      <div>
        <label className="block text-gray-700">Email Address</label>
        <p className="bg-gray-100 p-2 rounded">james.patapaa@gmail.com</p>
      </div>
      <div>
        <label className="block text-gray-700">Phone</label>
        <p className="bg-gray-100 p-2 rounded">0245948393</p>
      </div>
    </div>

    <h2 className="text-xl font-bold mt-8 mb-4">Address</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-gray-700">Country</label>
        <p className="bg-gray-100 p-2 rounded">Pipeano</p>
      </div>
      <div>
        <label className="block text-gray-700">City/State</label>
        <p className="bg-gray-100 p-2 rounded">Close to pentecost</p>
      </div>
      <div>
        <label className="block text-gray-700">Postal Code</label>
        <p className="bg-gray-100 p-2 rounded">644</p>
      </div>
      <div>
        <label className="block text-gray-700">TAX ID</label>
        <p className="bg-gray-100 p-2 rounded">982</p>
      </div>
    </div>
  </div>
);

const DummyContent: React.FC = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Content for this tab will be added soon.</h2>
  </div>
);

export default App;
