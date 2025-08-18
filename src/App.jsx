import React, { useState } from "react";
import Sidebar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import Team from "./components/Team";
import ProjectA from "./components/ProjectA";
import ProjectB from "./components/ProjectB";
import Calendar from "./components/Calendar";
import Documents from "./components/Documents";
import Reports from "./components/Reports";
import Navbar from "./components/Navbar";
import Charts from "./components/Charts";
import CommonDrawer from "./components/CommonDrawer";
import ArrayMethod from "./components/ArrayMethod";
import StringMethod from "./components/StringMethod";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MathMethod from "./components/MathMethod";

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 relative overflow-x-hidden">
          <Navbar onDrawerToggle={() => setDrawerOpen(!isDrawerOpen)} />
          <div className="m-5 p-2">
            <Routes>
              <Route path="/dashbord" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/projecta" element={<ProjectA />} />
              <Route path="/projectb" element={<ProjectB />} />
              <Route path="/array" element={<ArrayMethod />} />
              <Route path="/string" element={<StringMethod />} />
              <Route path="/math" element={<MathMethod />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/reports" element={<Reports/>} />
              <Route path="/chart" element={<Charts />} />
            </Routes>
          </div>
        </div>

        <CommonDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
