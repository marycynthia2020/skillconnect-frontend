'use client'
import { usePathname } from "next/navigation";
import Footer from "./sections/Footer";
import NavBar from "./sections/NavBar";

const GlobalLayout = ({
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
      {!hideFooter && <Footer />}
    </div>
  );
};

export default GlobalLayout;
