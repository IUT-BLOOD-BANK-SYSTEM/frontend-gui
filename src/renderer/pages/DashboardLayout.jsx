import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/layout/Sidebar";
import { ScrollArea } from "../components/ui/scroll-area";

const DashboardLayout = () => {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <ScrollArea className="w-[80%] h-screen px-5 py-10">
        <Outlet />
      </ScrollArea>
    </main>
  );
};

export default DashboardLayout;
