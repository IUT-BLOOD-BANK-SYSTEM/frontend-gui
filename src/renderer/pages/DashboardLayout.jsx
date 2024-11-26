import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/layout/Sidebar";

const DashboardLayout = () => {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <section className="flex-1 overflow-y-auto px-5 py-10">
        <Outlet />
      </section>
    </main>
  );
};

export default DashboardLayout;
