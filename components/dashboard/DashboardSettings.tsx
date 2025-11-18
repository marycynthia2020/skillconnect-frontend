export const AccountOptions = () => {
  return (
    <div className="border border-gray-300 rounded-md mb-10">
      <div className="flex p-4  items-center justify-between bg-[#e6e6e6] rounded-t-md text-xl font-medium">
        Account Options
      </div>

      <form className=" flex flex-col lg:grid lg:grid-cols-2 gap-8  py-6 px-4">
        <div className="">
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input
            type="text"
            className="bg-gray-100 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:dark-blue focus:border-transparent outline-none transition-all"
            placeholder="Enter your first name"
          />
        </div>

        <div className="">
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input
            type="text"
            className="bg-gray-100 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:dark-blue focus:border-transparent outline-none transition-all"
            placeholder="Enter your last name"
          />
        </div>

        <div className="">
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            type="text"
            className="bg-gray-100 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:dark-blue focus:border-transparent outline-none transition-all"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="">
          <label className="block text-sm font-medium mb-1">
            Contact Address
          </label>
          <input
            type="text"
            className="bg-gray-100 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:dark-blue focus:border-transparent outline-none transition-all"
            placeholder="Enter your contact address"
          />
        </div>
        <div className="">
          <label className="block text-sm font-medium mb-1">Occupation</label>
            <input
            type="text"
            className="bg-gray-100 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:dark-blue focus:border-transparent outline-none transition-all"
            placeholder="What do you do?"
          />
        </div>

        <div className="">
          <label className="block text-sm font-medium mb-1">State</label>
          <input
            type="text"
            className="bg-gray-100 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:dark-blue focus:border-transparent outline-none transition-all"
            placeholder="Enter your contact state"
          />
        </div>
        <div className="">
          <label className="block text-sm font-medium mb-1">City</label>
          <input
            type="text"
            className="bg-gray-100 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:dark-blue focus:border-transparent outline-none transition-all"
            placeholder="Enter your contact city"
          />
        </div>

        <div className="">
          <label className="block text-sm font-medium mb-1">Nationality</label>
          <select className="bg-gray-100 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:dark-blue focus:border-transparent outline-none transition-all">
            <option value="Nigeria">Nigeria</option>
            <option value="Kenya">Kenya</option>
          </select>
        </div>

         <div className="">
          <label className="block text-sm font-medium mb-1">Time Zone</label>
          <select className="bg-gray-100 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:dark-blue focus:border-transparent outline-none transition-all">
            <option value="Nigeria">hjh</option>
            <option value="Kenya">kgvvv</option>
          </select>
        </div>

        <div className="">
          <label className="block text-sm font-medium mb-1">Official Language</label>
            <input
            type="text"
            className="bg-gray-100 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:dark-blue focus:border-transparent outline-none transition-all"
            placeholder="Enter your offical langauage"
          />
        </div>

        <div className="col-span-2">
        <label className="block text-sm font-medium  mb-1">
          Professional Description
        </label>
        <textarea
          required
          className=" bg-gray-100 h-40 resize-none w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:dark-blue focus:border-transparent outline-none transition-all"
          placeholder="Describe what you do and what makes you stand out"
        ></textarea>
      </div>
       <button className="w-full md: md:w-fit rounded-md bg-dark-blue cursor-pointer text-lg px-10 py-4  text-white">Update Profile</button>
      </form>
    </div>
  );
};

export const Security = () => {
  return (
    <div className="border border-gray-300 rounded-md">
      <div className="flex p-4  items-center justify-between bg-[#e6e6e6] rounded-t-md text-xl font-medium">
        Security Options
      </div>

       <form className=" flex flex-col gap-8  py-6 px-4">
        <div className="">
          <label className="block text-sm font-medium mb-1">Current Password</label>
          <input
            type="password"
            className="bg-gray-100 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:dark-blue focus:border-transparent outline-none transition-all"
            placeholder="Enter your current password"
          />
        </div>

        <div className="">
          <label className="block text-sm font-medium mb-1">New Password</label>
          <input
            type="password"
            className="bg-gray-100 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:dark-blue focus:border-transparent outline-none transition-all"
            placeholder="Enter a new password"
          />
        </div>
         <div className="">
          <label className="block text-sm font-medium mb-1">Confirm New Password</label>
          <input
            type="password"
            className="bg-gray-100 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:dark-blue focus:border-transparent outline-none transition-all"
            placeholder="Enter a new password"
          />
        </div>
         <button className="w-full md: md:w-fit rounded-md bg-dark-blue cursor-pointer text-lg px-10 py-4  text-white">Update Password</button>
        </form>
      </div>
  )
};
