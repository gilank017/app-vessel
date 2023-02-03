import React from "react";
import {Routes, Route} from 'react-router-dom'
import DashboardLayout from "./layout/DashboardLayout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Schedule from "./pages/Schedule";
import Activity from "./pages/Activity";
import ActivityId from "./pages/ActivityId";
import Vessel from "./pages/Vessel";
import Crewlist from "./pages/Crewlist";
import Setting from "./pages/Setting";
import User from "./pages/User";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const element = [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: '/schedule',
      element: <Schedule />
    },
    {
      path: '/activity',
      element: <Activity />
    },
    {
      path: '/activity/:id',
      element: <ActivityId />
    },
    {
      path: '/vessel',
      element: <Vessel />
    },
    {
      path: '/crew',
      element: <Crewlist />
    },
    {
      path: '/setting',
      element: <Setting />
    },
    {
      path: '/profile',
      element: <User />
    },
  ]

  const routeList = element.map((val, index) => {
    return (
      <Route key={index} path={val.path} element={val.element} />
    )
  })

  return (
    <DashboardLayout>
      <Routes>
        {routeList}
      </Routes>
    </DashboardLayout>
  );
}

export default App;
