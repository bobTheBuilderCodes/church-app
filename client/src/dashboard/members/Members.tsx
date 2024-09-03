import React from "react";
import Layout from "../Layout";
import AppTable from "../../components/shared/Table";
import Button from "../../components/ui/Button";

const Members = () => {


  const columns = [
    { label: "Fullname", accessor: "fullname" },
    { label: "Phone Number", accessor: "phone_number" },
    { label: "Location", accessor: "location" },
    { label: "Status", accessor: "status" },
    { label: "Date Added", accessor: "createdAt", isDate: true },
  ];
  const dropdownOptions = [
   
    { label: "View Details", action: () => {} },
    { label: "Delete Member", action: () => {} },
  ];

  const data = [
    {
      fullname: "Robert Sam",
      phone_number: "0200022942",
      location: "Accra",
      status: "Active",
      createdAt: "2024-09-03T10:30:45.123Z",
    },
  ];
  return (
    <Layout>
      <section className="flex flex-1 justify-between items-center">
      <h1 className="text-2xl font-bold ml-10 mr-auto text-gray-900">Manage Members</h1>
      <Button type="button" key={"member"} className="max-w-fit mx-8" onClick={()=>{}}>
        <a href="add-member">Add Member</a>
      </Button>
      </section>
      <AppTable
        data={data}
        columns={columns}
        dropdownOptions={dropdownOptions}
      />
    </Layout>
  );
};

export default Members;
