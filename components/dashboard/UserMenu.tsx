"use client";
import { LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Avatar from "./ui/Avatar";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuItems = [
    { icon: User, name: "My Profile", path: "/user/profile" },
    { icon: Settings, name: "Settings", path: "/user/settings" },
    { icon: LogOut, name: "Logout", path: "/" },
  ]
  const pathname = usePathname()
  return (
    <div>

      <div onClick={() => setIsOpen(!isOpen)}>
        <Avatar isAvatar={false} />
      </div>
      {isOpen && (
        <div className="absolute right-10 mt-2  bg-white rounded-lg shadow-lg z-50 overflow-hidden py-3 ">
          {/* User Info Header */}
          <div className="px-4 py-3 bg-gray-100 border-b border-gray-300">
            <div className="flex items-center gap-3">
              <Avatar isAvatar={false} />
              <div>
                <p className="text-sm font-semibold">Chinemerem Ugbaja</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <ul className="px-4 py-2 flex flex-col gap-2 pt-4">
            {menuItems.map((item, index) => (
              <li
                key={item.path}
                className="p-2 hover:bg-active"
                onClick={() => setIsOpen(false)}
              >
                <Link href={item.path} className="flex items-center gap-3">
                  <item.icon
                    className="w-5 h-5 hover:text-dark-blue"
                  />
                  <span
                    className="hover:text-dark-blue"
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
