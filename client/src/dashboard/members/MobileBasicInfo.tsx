import React, { useEffect, useState } from "react";
import BasicInfo from "../../components/feature/BasicInfo";
import BasicInfoCard from "./BasicInfoItem";
import { useNavigate, useParams } from "react-router-dom";
import MobileNavigationTabs from "../../components/shared/MobileTabs";
import Navbar from "../../components/ui/Navbar";

const MobileBasicInfo = () => {
  const [memberData, setMemberData] = useState<Member>();
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const { id } = useParams();

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

  const navigate = useNavigate()

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
    <div className="mb-12">
      <Navbar />
      <button className="fixed m-4 bg-white px-2 rounded-md border-none" onClick={()=>navigate(-1)}>Back</button>
      <img src={memberData?.imageSrc} className="" />
      {memberData && <BasicInfoCard member={memberData} />}
      <MobileNavigationTabs />
    </div>
  );
};

export default MobileBasicInfo;
