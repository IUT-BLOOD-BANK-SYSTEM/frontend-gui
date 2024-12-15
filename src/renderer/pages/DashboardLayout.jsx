import { Outlet, useNavigation } from "react-router-dom";
import { Sidebar } from "../components/layout/Sidebar";
import { ScrollArea } from "../components/ui/scroll-area";
import Loader from "../components/layout/loading";

const DashboardLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <main className="flex h-screen">
      <Sidebar />
      <ScrollArea className="w-[80%] h-screen px-5 py-10">
        {isLoading ? <Loader /> : <Outlet />}
      </ScrollArea>
    </main>
  );
};

export default DashboardLayout;
