'use client'
import { usePathname } from "next/navigation";
import Footer from "../../components/public/sections/Footer";
import NavBar from "../../components/public/sections/NavBar";

const publicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const hideFooter = pathname === "/login" || pathname === "/signup";
  return (
    <div>
      <NavBar />
      {children}
      {!hideFooter && <Footer backgroundColor="#2f2f2f" color="#ffffff" />}
    </div>
  );
};

export default publicLayout;
