'use client'
import { userContext } from "@/providers/UserProvider";
import { NavbarProps } from "@/types";
import {
  Briefcase,
  File,
  FileText,
  LogOut,
  MessageSquare,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname} from "next/navigation";
import { useContext } from "react";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({isOpen, setIsOpen, search, setSearch}: NavbarProps) => {
  const user = useContext(userContext)

  const menuItems = [
    { name: "My Profile", path: "/user/profile", icon: User },
    { name: "Feed", path: "/user/feed", icon: FileText },
    { name: "My Posts", path: "/user/posts", icon: FileText },
    {name: "Proposals", path: "/user/proposals", icon: File},
    { name: "Messages", path: "/user/messages", icon: MessageSquare },
    { name: "Reviews", path: "/user/reviews", icon: FileText },
    { name: "Settings", path: "/user/settings", icon: Settings },
    { name: "Become an Artisan", path: "/user/become-an-artisan", icon: Briefcase },
  ];
  const pathname = usePathname()
  return (
    <div className="bg-gray-100 shadow-xl w-full h-full px-5  py-8 lg:py-6 border-r border-gray-300">
      <h3 className="hidden lg:block text-xl md:text-3xl  font-semibold mb-8 text-dark-blue " >SkillConnect</h3>
      <ul className="flex flex-col gap-3">
        {menuItems.map(item => (
          <li key={item.path} className={` p-3 ${pathname === item.path ? " rounded-sm bg-active" : ""} `} onClick={()=> setIsOpen(false)}>
            <Link href={item.path} className="flex items-center gap-3">
              <item.icon className={`w-5 h-5 ${pathname === item.path ? "text-dark-blue font-medium" : "text-gray-700 "}`} />
              <span className={`font-medium ${pathname === item.path ? "text-dark-blue" : ""}`}>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3 absolute bottom-3">
        <LogOut className="w-5 h-5" />
        <span className="font-medium">Log Out</span>
      </div>
       <IoMdClose className="lg:hidden text-xl cursor-pointer absolute top-2 right-2" onClick={()=>setIsOpen(!isOpen)} />
    </div>
  );
};

export default Sidebar;
