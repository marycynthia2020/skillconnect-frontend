"use client";
import { NavbarProps } from "@/types";
import { Search } from "lucide-react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from "./ui/SearchBar";
import UserMenu from "./UserMenu";
import { usePathname } from "next/navigation";


const Navmenu = ({ isOpen, setIsOpen, search, setSearch }: NavbarProps) => {
  const pathname = usePathname()

  return (
    <nav className=" w-full gap-4  flex items-center justify-between  ">
      <div className="flex items-center gap-4 flex-1">
        <div className="lg:hidden flex flex-row-reverse items-center gap-2">
          <h3 className=" text-xl md:text-3xl  font-semibold text-dark-blue ">
            SkillConnect
          </h3>
          <div className="" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <IoMdClose className="text-xl cursor-pointer" />
            ) : (
              <RxHamburgerMenu className="text-2xl cursor-pointer" />
            )}
          </div>
        </div>
       {pathname === "/user/feed" ?  <div className="hidden lg:block w-3/5 max-w-[800px]">
          <SearchBar />
        </div> : ""}
      </div>

      <div className="flex items-center gap-3 md:gap-4  ">
        <Search
          className="lg:hidden text-2xl md:text-3xl cursor-pointer"
          onClick={() => setSearch(!search)}
        />
        <IoIosNotificationsOutline className="text-2xl md:text-3xl  cursor-pointer" />
        <UserMenu  />
      </div>
    </nav>
  );
};

export default Navmenu;
