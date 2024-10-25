import React from "react";
import TitheRecordCard from "./Tithes";
import Navbar from "../../components/ui/Navbar";
import MobileNavigationTabs from "../../components/shared/MobileTabs";
import { useNavigate } from "react-router-dom";

const MobileMemberTithes = () => {

    const navigate = useNavigate()
  return (
    <div >
      <Navbar />
      <button className="fixed m-4 bg-white px-2 rounded-md border-none" onClick={()=>navigate(-1)}>Back</button>

      <div className="mx-3 mb-24">

      <TitheRecordCard type="special offering" />
      <TitheRecordCard />
      <TitheRecordCard />
      <TitheRecordCard />
      <MobileNavigationTabs />
      </div>
    </div>
  );
};

export default MobileMemberTithes;
