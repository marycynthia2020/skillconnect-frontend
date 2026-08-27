import Avatar from "@/components/dashboard/ui/Avatar";
import { Pencil } from "lucide-react";
import React from "react";

const user = {
  name: "Chinemerem Ugbaja",
  email: "marych@gmail.com",
  phone: "+87654334356789",
  address: "Blockfuse Labs",
};
export const ProfileCard = () => {
  return (
    <article className="w-full shadow-sm rounded-md border border-gray-300">
      <div className="flex p-4 pb-10 items-center justify-between bg-[#e6e6e6] rounded-t-md ">
        <p className="text-lg font-medium ">Profile</p>
        <p className="flex gap-1 text-gray-500">
          Joined <span>901</span>
        </p>
      </div>

      <div className="-mt-8 px-4 pb-4 ">
        <Avatar isAvatar={true} />
        <div className="flex items-center justify-between my-1">
          <h3 className="py-1 text-lg font-medium">{user.name}</h3>
          <button className=" text-sm flex items-center gap-1 bg-active rounded-lg px-1.5 p-1">
            <Pencil className="h-4 w-4" />
            Edit
          </button>
        </div>
        <p className="text-gray-500">I provide professional painting, electrical, and tiling services with precision and care. Committed to quality and timely work, I help transform spaces efficiently</p>
      </div>
    </article>
  );
};

export const DetailsCard = ({user}: {user: any}) => {
  return (
    <article className="w-full p-3 border border-gray-200 rounded-md">
      <p className="text-gray-500 text-sm mb-1">{user.tag}</p>
      <p className=" font-medium">{user.name}</p>
    </article>
  );
};

export const OtherDetails =({user}:{user:any})=>{
  return (
    <article className="w-full p-3 border border-gray-200 rounded-md">
      <p className="text-gray-500 text-sm mb-1">{user.tag}</p>
      <p className=" font-medium">{user.name}</p>
    </article>
  )
}
