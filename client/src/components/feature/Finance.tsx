import React from "react";
import AppTable from "../shared/Table";
import Input from "../ui/Input";
import Button from "../ui/Button";
const MemberFinance = () => {
  const dropdownOptions = [
    { label: "Download Resume", action: () => {} },
    { label: "Invite for interview", action: () => {} },
    { label: "Reject application", action: () => {} },
  ];

  const columns = [
    { label: "Recorded By", accessor: "recorded_by" },
    { label: "Date Paid", accessor: "createdAt", isDate: true },
    { label: "Amount", accessor: "amount" },
    { label: "Type", accessor: "type" },
    { label: "Comment", accessor: "comment" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold ml-8 mr-auto text-gray-900">
        Finance
        </h1>
       <div className="flex items-center mx-0 justify-between min-w-[390px]">
       <Input
            type="search"
            id="search"
            name="search"
            autoComplete="true"
            label=""
            placeholder="Search by name" className="mb-2 px-4"
          />
          <Button type="button" className="ml-3 w-fit mx-8">New Data</Button>
       </div>
       
      </div>

      <AppTable
        columns={columns}
        data={[]}
        dropdownOptions={dropdownOptions}
        key={Math.random() * 1200}
      />
    </div>
  );
};

export default MemberFinance;
