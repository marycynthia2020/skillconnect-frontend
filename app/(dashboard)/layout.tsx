"use client";
import Navmenu from "@/components/dashboard/Navmenu";
import Sidebar from "@/components/dashboard/Sidebar";
import SearchBar from "@/components/dashboard/ui/SearchBar";
import Footer from "@/components/public/sections/Footer";
import { useState } from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false);

  return (
    <div className="w-full min-h-screen flex ">
      {/* Sidebar */}
      <div
        className={`min-w-80 left-0 top-0 h-screen overflow-y-auto z-999 fixed ${
          isOpen ? "w-3/5" : "hidden lg:block"
        }`}
      >
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          search={search}
          setSearch={setSearch}
        />
      </div>

      {/* Main Content */}
      <div className="w-full lg:flex-1 lg:ml-[320px]">
        {/* Fixed Navbar */}
        <div className=" fixed inset-x-0 top-0 lg:left-[320px] right-0 flex items-center shadow-lg md:shadow-none z-900 bg-white   py-4 md:py-4 md:border-b border-gray-300  ">
          <div className="w-full  max-w-[1280px] mx-auto  px-5">
            <Navmenu
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              search={search}
              setSearch={setSearch}
            />
          </div>
        </div>

        <div className="lg:hidden fixed  top-20 left-1/2 -translate-x-1/2 w-full sm:w-4/5  px-5">
          {search && <SearchBar />}
        </div>
        {/* Scrollable Main Area */}
        <main
          className={`  min-h-screen overflow-y-auto px-5 ${
            search ? "pt-40" : "pt-25 md:pt-35"
          } max-w-[1280px]  mx-auto`}
        >
          {children}
        </main>

        <div className="border-t  border-gray-300 mt-20 -mb-10 md:-mb-20  h-0.5 w-full"></div>
        <div className=" max-w-7xl mx-auto bg-amber-300">
          <Footer backgroundColor="#ffffff" color="#000000" />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
