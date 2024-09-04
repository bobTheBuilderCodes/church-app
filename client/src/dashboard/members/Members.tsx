import React from "react";
import Layout from "../Layout";
import Button from "../../components/ui/Button";
import SingleSelect from "../../components/ui/Select";
import Input from "../../components/ui/Input";
import { members } from "../../resources";

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

// Define a default or empty array if members might be undefined
const defaultMembers: Member[] = [];

// Check for undefined or null
const Members = () => {
  // Ensure members is not undefined; use defaultMembers if needed
  const membersList = members || defaultMembers;

  return (
    <Layout>
      <section className="flex justify-between items-center">
        <h1 className="text-2xl font-bold ml-10 mr-auto text-gray-900">Manage Members</h1>
        {/* <section className="flex items-center justify-between">
          <Input id="search" label="" name="search" type="search" key={"search"} className="mr-8" placeholder="Search member by name or number"/>
          <SingleSelect/>
          <Button type="button" key={"member"} className="max-w-fit -mb-2">
            <a href="add-member">Add New Member</a>
          </Button>
        </section> */}
      </section>
      
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {membersList?.map((member) => (
          <div key={member?.id} className="group relative">
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
                <p className="mt-1 text-sm text-gray-500">{member?.phoneNumber}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{member?.ministry}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Members;
