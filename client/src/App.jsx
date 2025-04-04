import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import DriverBehavior from "./pages/DriverBehavior";
import VehicleAnalytics from "./pages/VehicleAnalytics";
import RoadAnalytics from "./pages/RoadAnalytics";
import RiskInsights from "./pages/RiskInsights";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="driver-behavior" element={<DriverBehavior />} />
        <Route path="vehicle-health" element={<VehicleAnalytics />} />
        <Route path="road-safety" element={<RoadAnalytics />} />
        <Route path="risk-insights" element={<RiskInsights />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
