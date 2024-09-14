import React from "react";
import Layout from "../Layout";
import { members } from "../../resources";
import { Link } from "react-router-dom";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import MemberCard from "../../components/feature/MemberCard";

// Define the type for a member
interface Member {
  id: string;
  name: string;
  phoneNumber: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  ministry: string;
}

const defaultMembers: Member[] = [];

const Members = () => {
  const membersList = members || defaultMembers;

  return (
    <Layout>
      <div className="flex items-center justify-between flex-wrap ">
        <h1 className="text-2xl font-bold ml-8 mr-auto text-gray-900">
          All Members ({membersList.length})
        </h1>
        <div className="flex items-center mx-0 justify-between min-w-[390px]">
          <Input
            type="search"
            id="search"
            name="search"
            autoComplete="true"
            label=""
            placeholder="Search by name"
            className="mb-2 px-4"
          />
          <Button type="button" className="ml-3 w-fit mx-8">
            <Link to={'/add-member'}>New Member</Link>
          </Button>
        </div>
      </div>
      <div className="mt-6 mx-3 grid grid-cols-1 gap-x-6  gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:mx-8  xl:gap-x-8 ">
        {membersList.map((member) => (
  <MemberCard key={member.id} member={{ ...member, id: String(member.id) }} /> // Convert id to string
  ))}
      </div>
    </Layout>
  );
};

export default Members;
