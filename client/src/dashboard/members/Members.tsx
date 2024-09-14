import React from "react";
import Layout from "../Layout";
import { members } from "../../resources";
import { Link, redirect, useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

// Define the type for a member
interface Member {
  id: number;
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

  const navigate = useNavigate();

  const createMember = () => {
    navigate('/add-member');
  };


  return (
    <Layout>
      <div className="flex items-center justify-between">
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
          <Button type="button" className="ml-3 w-fit mx-8" onClick={createMember}>
           <Link to={'/add-member'}>New Member</Link>
          </Button>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {membersList?.map((member) => (
          <div
            key={member?.id}
            className="group relative"
            onClick={() => navigate(`/members/${2}`)}
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                alt={member?.imageAlt}
                src={member?.imageSrc}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={member?.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {member?.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {member?.phoneNumber}
                </p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                {member?.ministry}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Members;
