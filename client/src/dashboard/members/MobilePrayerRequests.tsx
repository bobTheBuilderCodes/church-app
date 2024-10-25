import React from "react";
import PrayerRequestItem from "./PrayerRequestItem";
import Navbar from "../../components/ui/Navbar";
import MobileNavigationTabs from "../../components/shared/MobileTabs";
import { useNavigate } from "react-router-dom";

const MobilePrayerRequests = () => {

    const navigate = useNavigate()
  return (
    <div className=" mb-24">

    <Navbar />
          <button className="fixed m-4 bg-white px-2 rounded-md border-none z-10" onClick={()=>navigate(-1)}>Back</button>
    <div className="p-4" >
      <PrayerRequestItem />
      <PrayerRequestItem />
      <PrayerRequestItem />
      <PrayerRequestItem />
      <PrayerRequestItem />
      <PrayerRequestItem />
      <PrayerRequestItem />
    </div>
    <MobileNavigationTabs />
    </div>
  );
};

export default MobilePrayerRequests;
