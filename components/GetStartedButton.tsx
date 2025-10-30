"use client";
import { useRouter } from "next/navigation";

const GetStartedButton = () => {
const router = useRouter()
  return (
    <div>
      <button
        className="cursor-pointer px-10 py-4 w-full md:w-fit text-white bg-[#000c54] uppercase"
        onClick={() => router.push("/signup")}
      >
        Get Started
      </button>
    </div>
  );
};

export default GetStartedButton;
