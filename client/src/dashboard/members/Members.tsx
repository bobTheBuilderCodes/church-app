import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import MemberCard from "../../components/feature/MemberCard";

interface Member {
  _id: string;
  name: string;
  phoneNumber: string;
  imageSrc: string;
  ministry: string;
}

const Members = () => {
  const [memberData, setMemberData] = useState<Member[]>([]); 
  const [isLoading, setIsLoading] = useState(true); 
  const [fetchError, setFetchError] = useState<string | null>(null); 
  const navigate = useNavigate()

  // Function to fetch members
  const fetchMemberData = async () => {
    try {
      const response = await fetch('https://church-server-18kviqkgr-bobthebuildercodes-projects.vercel.app/api/v1/members'); 
      if (!response.ok) {
        throw new Error('Failed to fetch members');
      }

      const data = await response.json();
      setMemberData(data); // Set fetched data
      setIsLoading(false);
      navigate("/members")
    } catch (err: any) {
      setFetchError(err.message); // Set error message
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
      <div className="mb-4 flex items-center justify-between flex-wrap ">
        <h1 className="text-2xl font-bold ml-4 sm:ml-8 mb-4 mr-auto text-gray-900">
          All Members ({memberData.length})
        </h1>

        <div className="flex items-center mx-0 justify-between w-full sm:w-auto">
          {/* Adjust search input width on mobile */}
          <Input
            type="search"
            id="search"
            name="search"
            autoComplete="true"
            label=""
            placeholder="Search by name"
            className="mb-2 w-[94vw] mx-3 sm:w-auto px-4"
          />
          {/* Button visible on larger screens */}
          <Button type="button" className="ml-3 hidden sm:block w-fit mx-8">
            <Link to={"/add-member"}>New Member</Link>
          </Button>
        </div>
      </div>

      {/* Floating button for mobile view */}
      <Link className="fixed bottom-20 right-4 z-30 sm:hidden bg-indigo-600 rounded-lg text-white px-4 py-2" to={"/add-member"}>
        New Member
      </Link>

      {/* Display member cards */}
      <div className="mt-6 mx-3 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:mx-8 xl:gap-x-8">
        {memberData.length > 0 ? (
          memberData.map((member) => (
            <MemberCard
              key={member._id}
              member={{ ...member, id: member._id }}
            />
          ))
        ) : (
          <p>No members found</p>
        )}
      </div>
    </Layout>
  );
};

export default Members;
