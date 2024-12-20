import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import Members from "./dashboard/members/Members";
import Signin from "./Signin";
import Finance from "./dashboard/prayer/Prayer";
import Programs from "./dashboard/programs/Programs";
import Analytics from "./dashboard/analytics/Analytics";
import AddMember from "./dashboard/members/AddMember";
import PageNotFound from "./dashboard/PageNotFound";
import MemberDetails from "./dashboard/members/MemberDetails";
import Prayer from "./dashboard/prayer/Prayer";
import AddProgram from "./dashboard/programs/AddProgram";
import MobileBasicInfo from "./dashboard/members/MobileBasicInfo";
import MobileMemberTithes from "./dashboard/members/MobileMemberTithes";
import MobilePrayerRequests from "./dashboard/members/MobilePrayerRequests";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Signin />
            </PublicRoute>
          }
        />

        {/* Protected routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/members" element={<Members />} />
          <Route path="/members/:id" element={<MemberDetails />} />
          <Route path="/members/:id/basic-info" element={<MobileBasicInfo />} />
          <Route path="/members/:id/tithes" element={<MobileMemberTithes />} />
          <Route path="/members/:id/prayer-requests" element={<MobilePrayerRequests />} />

          

          <Route path="/add-member" element={<AddMember />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/add-program" element={<AddProgram />} />
          <Route path="/prayer-requests" element={<Prayer />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
