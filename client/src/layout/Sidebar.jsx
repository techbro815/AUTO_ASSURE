import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Driver Behavior", path: "/driver-behavior" },
    { name: "Vehicle Health", path: "/vehicle-health" },
    { name: "Road Safety", path: "/road-safety" },
    { name: "Risk Insights", path: "/risk-insights" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <aside className="w-64 bg-gray-800 p-4 flex flex-col gap-4">
      <div className="text-2xl font-bold text-white mb-8">AutoAssure</div>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`px-4 py-2 rounded text-white ${
            pathname === item.path ? "bg-blue-600" : "hover:bg-gray-700"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
