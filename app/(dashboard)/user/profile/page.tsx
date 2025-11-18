import PersonaInfoCard from "@/components/dashboard/ui/PersonaInfoCard";
import {
  DetailsCard,
  OtherDetails,
  ProfileCard,
} from "@/components/dashboard/ui/ProfileCard";

const profilePage = () => {
  const user =[
    {tag: "First Name", name: "Chinemerem Ugbaja"},
    {tag: "Last name", name: "Ugbaja"},
    {tag: "Email Address", name: "chi@maan.com"},
    {tag: "Phone Number", name: "+83755367833"},
    {tag:"Contact Address", name: "Blockguse Labs Rayfield, Jos"}
  ]

   const user2 =[
    {tag: "State", name: "Chinemerem Ugbaja"},
    {tag: "City", name: "Ugbaja"},
    {tag: "Nationality", name: "chi@maan.com"},
    {tag: "Time zone", name: "+83755367833"},
    {tag: "Official Language", name: "English"},
    {tag: "Occupation", name: "Software Engineer"}
  ]
  return (
    <div>
      <h2 className="font-bold text-2xl md:text-3xl 2xl:text-4xl mb-2 ">
        My Profile
      </h2>
      <p className=" text-gray-500 mb-8">
        Complete profile gives you more visibilty and trust among clients and
        artisans
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-10">
          <ProfileCard />
          <div className="border-gray-300 border rounded-md  ">
            <div className="flex p-4  items-center justify-between bg-[#e6e6e6] rounded-t-md text-xl font-medium">
              Personal Information
            </div>
           <div className="px-4 flex flex-col gap-y-3 py-4">
            {user.map((u, i)=>(
                 <DetailsCard key={u.tag} user={u} />
            ))}
           
           </div>
          </div>
        </div>

        <div className=" border-gray-300 border rounded-md h-fit ">
          <div className="flex p-4  items-center justify-between bg-[#e6e6e6] rounded-t-md text-xl font-medium">
              Other Details
            </div>
            <div className="flex flex-col gap-y-3 p-4">
              {
              user2.map((u, i)=>(
                <OtherDetails key={i} user={u} />
              ))
            }
            </div>
        </div>
      </div>
    </div>
  );
};

export default profilePage;
