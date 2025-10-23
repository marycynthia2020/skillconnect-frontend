'use client'
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex  items-center justify-center px-5 bg-[url('/plumb.png')] bg-no-repeat bg-cover z-20 ">
      <div className="w-full max-w-4xl flex flex-col-reverse md:flex-row shadow-2xl">
        {/* Sliding Overlay Panel */}
        <div
          className={`hidden text-center   text-white  bg-[#000c54] w-full md:w-1/2    transition-all duration-700 ease-in-out md:flex flex-col justify-center p-8 md:p-12 `}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome back!</h2>
          <p className="text-sm md:text-base mb-6 opacity-90">
            Welcome back! We are so happy to have you here. It's great to see
            you again. We hope you had a safe and enjoyable time away.
          </p>
          <button
            className="bg-[#2c3f83] cursor-pointer py-3 shadow-2xl rounded-lg hover:bg-[#2c3f83] transition-all duration-300"
            onClick={() => router.push("/signup")}
          >
            No account yet? Signup
          </button>
        </div>

        {/* Sign In Form */}
        <div
          className={`bg-white w-full md:w-1/2 h-1/2 flex items-center justify-center  px-6 py-12 md:p-12 transition-all duration-700 ease-in-out`}
        >
          <div className="w-full max-w-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Sign In
            </h2>
            <form className="space-y-4 ">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  username
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2c3f83] focus:border-transparent outline-none transition-all"
                  placeholder="united$ee"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2c3f83] focus:border-transparent outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#000c54] text-white rounded-lg font-semibold hover:bg-[#2c3f83] transition-colors mt-6 cursor-pointer"
              >
                Sign In
              </button>

              <button
                className="mt-6 border-none block mx-auto md:hidden bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
                onClick={() => router.push("/signup")}
              >
                No account yet? Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
