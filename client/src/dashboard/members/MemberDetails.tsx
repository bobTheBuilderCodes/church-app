import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { Link, useParams } from "react-router-dom";
import TitheRecordCard from "./Tithes";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import BasicInfoCard from "./BasicInfoItem";
import PrayerRequestItem from "./PrayerRequestItem";

const ProfileCard = () => {
  type Section = "tithes" | "prayer" | "basicInfo";

  const [activeTab, setActiveTab] = useState<Section>("basicInfo");

  const { id } = useParams();

  interface Member {
    _id: string;
    name: string;
    phoneNumber: string;
    imageSrc: string;
    ministry: string;
  }

  interface Member {
    id: string;
    name: string;
    gender: string;
    phoneNumber: string;
    email: string;
    address: string;
    dateJoined: string;
    dob: string;
    imageSrc: string;
    ministry: string;
  }

  const [memberData, setMemberData] = useState<Member>();
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  // Function to fetch members
  const fetchMemberData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/v1/members/${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch members");
      }

      const data = await response.json();
      setMemberData(data);
      setIsLoading(false);
    } catch (err: any) {
      setFetchError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMemberData();
  }, []);

  // Conditional rendering based on the loading and error state
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (fetchError) {
    return <p>Error: {fetchError}</p>;
  }

  return (
    <Layout>
      <div className="w-full p-6 rounded-lg mb-12">
        {/* Profile Section */}
        <div
          className="flex flex-col items-center py-6 rounded-lg "
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0.0), rgba(0, 0, 115, 0.9)), url('/images/ALBC.jpg')",
            backgroundPosition: "30% 55%",
            backgroundSize: "99%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative -mt-16">
            <img
              className="w-40 h-40 rounded-md object-cover border-4 border-white shadow-lg"
              src={memberData?.imageSrc}
              alt={memberData?.name}
            />
          </div>
          <h2 className="text-xl font-bold mt-3 text-gray-50">
            {memberData?.name}
          </h2>
          <p className="text-gray-50 text-sm">
            {memberData?.phoneNumber} • {memberData?.ministry}
          </p>
          <button className=" bg-white px-3 mt-4 mb-4 py-2 rounded-md">
            Edit Profile
          </button>
        </div>

        {/* Tab View for Desktop */}
        <div className="hidden lg:block mt-6">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("basicInfo")}
              className={`flex-1 py-2 px-4 ${
                activeTab === "basicInfo"
                  ? "border-b-2 border-indigo-600 text-indigo-600"
                  : "text-gray-500"
              }`}
            >
              Basic Information
            </button>
            <button
              onClick={() => setActiveTab("tithes")}
              className={`flex-1 py-2 px-4 ${
                activeTab === "tithes"
                  ? "border-b-2 border-indigo-600 text-indigo-600"
                  : "text-gray-500"
              }`}
            >
              Tithes and Donations
            </button>
            <button
              onClick={() => setActiveTab("prayer")}
              className={`flex-1 py-2 px-4 ${
                activeTab === "prayer"
                  ? "border-b-2 border-indigo-600 text-indigo-600"
                  : "text-gray-500"
              }`}
            >
              Prayer Requests
            </button>
          </div>

          <div className="mt-4">
            {activeTab === "basicInfo" && (
              <div className="p-8 bg-white rounded-lg grid grid-cols-3 ">
                {/* <BasicInfoCard member={memberData}/> */}
                {memberData && <BasicInfoCard member={memberData} />}
              </div>
            )}
            {activeTab === "tithes" && (
              <div className="p-4 bg-white  rounded-lg">
                <div className=" flex items-center justify-between flex-wrap ">
                  <h1 className="text-xl font-bold sm:ml-0 mr-auto text-gray-900">
                    All {memberData?.name}'s Tithes
                  </h1>

                  <div className="flex items-center justify-between w-full sm:w-auto">
                    <Input
                      type="search"
                      id="search"
                      name="search"
                      autoComplete="true"
                      label=""
                      placeholder="Search by title"
                      className="mb-2 w-[94vw] mx-3 sm:w-auto px-4"
                    />
                    <Button
                      type="button"
                      className="ml-3 hidden sm:block w-fit"
                    >
                      New Record
                    </Button>
                  </div>
                </div>
                <TitheRecordCard type="special offering" />
                <TitheRecordCard />
                <TitheRecordCard />
                <TitheRecordCard />
              </div>
            )}
            {activeTab === "prayer" && (
              <div className="bg-white">
                <div className=" flex items-center justify-between flex-wrap mx-4 pt-5">
                  <h1 className="text-xl font-bold sm:ml-0 mr-auto text-gray-900">
                    All {memberData?.name}'s Prayer Requests
                  </h1>

                  <div className="flex items-center justify-between w-full sm:w-auto">
                    <Input
                      type="search"
                      id="search"
                      name="search"
                      autoComplete="true"
                      label=""
                      placeholder="Search by title"
                      className="mb-2 w-[94vw] mx-3 sm:w-auto px-4"
                    />
                    <Button
                      type="button"
                      className="ml-3 hidden sm:block w-fit"
                    >
                      New Record
                    </Button>
                  </div>
                </div>
                <div className="p-4 rounded-lg grid grid-cols-3 gap-5 -mt-3">
                  <PrayerRequestItem />
                  <PrayerRequestItem />
                  <PrayerRequestItem />
                  <PrayerRequestItem />
                  <PrayerRequestItem />
                  <PrayerRequestItem />
                  <PrayerRequestItem />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Accordion View for Mobile */}
        <div className="block lg:hidden mt-6">
          <div className="space-y-4">
            {/* Basic Information Accordion */}
            <div>
              <Link to={`/members/${id}/basic-info`}>
                <button className="flex items-center justify-between w-full p-4 bg-white rounded-lg">
                  <span className="flex items-center">
                    <span className="bg-indigo-100 p-3 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 4a6 6 0 10.001 12.001A6 6 0 0010 4z" />
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1 10.414L5.586 12l-1.414 1.414 4.414 4.414L15.414 12l-1.414-1.414-4.414 4.414z" />
                      </svg>
                    </span>
                    <span className="ml-3 font-semibold text-gray-700">
                      Basic Information
                    </span>
                  </span>
                </button>
              </Link>
            </div>

            {/* Tithes and Donations Accordion */}
            <div>
              <Link to={`/members/${id}/tithes`}>
                <button className="flex items-center justify-between w-full p-4 bg-white rounded-lg">
                  <span className="flex items-center">
                    <span className="bg-green-100 p-3 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9 12H7v2h2v-2zm0-4H7v2h2V8zm0 8H7v2h2v-2z" />
                        <path
                          fillRule="evenodd"
                          d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zM3 5a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V5zm14 4h-2v4h2V9z"
                        />
                      </svg>
                    </span>
                    <span className="ml-3 font-semibold text-gray-700">
                      Tithes & Donations
                    </span>
                  </span>
                </button>
              </Link>
            </div>

            {/* Prayer Accordion */}
            <div>
              <Link to={`/members/${id}/prayer-requests`}>
                <button className="flex items-center justify-between w-full p-4 bg-white rounded-lg">
                  <span className="flex items-center">
                    <span className="bg-red-100 p-3 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5 5h10v10H5z" />
                        <path d="M9 2a1 1 0 00-1 1v2H6a1 1 0 00-1 1v2h2v2H4a1 1 0 00-1 1v2h12v-2a1 1 0 00-1-1h-2v-2h2V6a1 1 0 00-1-1h-2V3a1 1 0 00-1-1H9z" />
                      </svg>
                    </span>
                    <span className="ml-3 font-semibold text-gray-700">
                      Prayer Requests
                    </span>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Link
        className="fixed bottom-20 right-4 z-30 sm:hidden bg-indigo-600 rounded-lg text-white px-4 py-2"
        to={"/add-program"}
      >
        Record Tithe
      </Link>
    </Layout>
  );
};

export default ProfileCard;
