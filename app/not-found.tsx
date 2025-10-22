import Link from "next/link";

const NotFound = () => {
  return (
    <section className=" w-full bg-[url('/engr.jpg')] h-screen bg-no-repeat bg-cover">
      <div className=" px-5 h-screen mx-auto  max-w-[1440px] grid gap-6 place-content-center">
        <img src="/404.png" alt="404" />
        <div className="place-self-center mt-10">
          <Link href="/" className="px-20 py-4 w-full md:w-fit text-white bg-[#000c54] uppercase rounded-md">
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
