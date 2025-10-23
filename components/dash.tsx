
import React from "react";
import { User, FileText, LogOut, Settings, PlusCircle, ArrowRight } from "lucide-react";

export default function UserDashboard() {
  const user = {
    name: "Chinemerem Ugbaja",
    email: "chinemerem@gmail.com",
    location: "Jos, Plateau State",
    occupation: "Frontend Developer",
    joined: "October 2025",
  };

  const posts = [
    {
      id: 1,
      title: "Looking for a Plumber in Rayfield",
      date: "2 days ago",
      status: "Active",
    },
    {
      id: 2,
      title: "Need a Painter for a small office space",
      date: "1 week ago",
      status: "Closed",
    },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-[#000C54] text-white flex flex-col justify-between">
        <div>
          <div className="px-6 py-6 text-2xl font-semibold border-b border-white/10">
            SkillConnect
          </div>
          <nav className="mt-6 space-y-4 px-4">
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/10">
              <User size={18} /> Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg">
              <FileText size={18} /> My Posts
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg">
              <Settings size={18} /> Settings
            </a>
          </nav>
        </div>

        <div className="px-4 py-4 border-t border-white/10">
          <button className="flex items-center gap-2 text-sm hover:text-gray-300">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6">
               {/* Topbar */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Welcome back, {user.name.split(" ")[0]} 👋
            </h1>
            <p className="text-sm text-gray-500">
              Here’s an overview of your activity and updates.
            </p>
          </div>

          <button className="flex items-center gap-2 bg-[#000C54] text-white px-4 py-2 rounded-lg hover:bg-[#001272] transition-all">
            <ArrowRight size={18} /> Become an Artisan
          </button>
        </div>

        {/* User Info Card */}
        <section className="bg-white p-6 rounded-xl shadow-sm border mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Profile Information
          </h2>
          <div className="grid md:grid-cols-2 gap-y-3 text-sm">
            <p>
              <span className="font-medium text-gray-600">Full Name:</span>{" "}
              {user.name}
            </p>
            <p>
              <span className="font-medium text-gray-600">Email:</span>{" "}
              {user.email}
            </p>
            <p>
              <span className="font-medium text-gray-600">Location:</span>{" "}
              {user.location}
            </p>
            <p>
              <span className="font-medium text-gray-600">Occupation:</span>{" "}
              {user.occupation}
            </p>
            <p>
              <span className="font-medium text-gray-600">Member Since:</span>{" "}
              {user.joined}
            </p>
          </div>
        </section>

        {/* Posts Section */}
        <section className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              My Posts
            </h2>
            <button className="flex items-center gap-2 text-sm bg-[#000C54] text-white px-3 py-2 rounded-lg hover:bg-[#001272] transition-all">
              <PlusCircle size={16} /> New Post
            </button>
          </div>

          {posts.length > 0 ? (
            <div className="space-y-3">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 transition-all"
                >
                  <div>
                    <h3 className="font-medium text-gray-800">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Posted {post.date}
                    </p>
                  </div>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      post.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {post.status}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm italic">
              You haven’t made any posts yet.
            </p>
          )}
        </section>
      </main>
    </div>
  );
}

