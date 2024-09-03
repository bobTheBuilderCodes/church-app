import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import Members from "./dashboard/members/Members";
import Signin from "./Signin";
import Finance from "./dashboard/finance/Finance";
import Programs from "./dashboard/programs/Programs";
import Analytics from "./dashboard/analytics/Analytics";

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
          <Route path="/programs" element={<Programs />} />
          <Route path="/finance" element={<Finance />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
