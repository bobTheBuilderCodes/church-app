import React from "react"
import AppTable from "../shared/Table"
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
      <AppTable columns={columns} data={[]} dropdownOptions={dropdownOptions} key={Math.random() * 1200} />
    </div>
  )
}

export default MemberFinance