import Appbar from "@/components/appbar";
import Sidebar from "@/components/sidebar";
import RightSideBar from "@/components/rightSidebar";
import MainContent from "@/components/mainContent";

export default function Dashboard() {
  return (
    <div className=" min-h-screen ">
      <div className="h  fixed w-full " >
        <Appbar />
      </div>
      <div className="grid min-h-screen pt-16    grid-cols-10">
        {/* Sidebar */}
        <div className="col-span-2 md:col-span-3  lg:col-span-2  bg-gray-100">
          <Sidebar />
        </div>
        {/* Main content */}
        <div className="col-span-6 w-full bg-gray-800  border-l border-r md:col-span-7  text-white lg:col-span-6 md:w-[100%]">
          <MainContent />
        </div>
        
        <div className="col-span-2 bg-gray-800 hidden lg:block">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}
