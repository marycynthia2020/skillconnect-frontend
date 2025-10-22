import type { Metadata } from "next";
import { Poppins, Roboto} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/sections/NavBar";
import Footer from "@/components/sections/Footer";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chinemerem Ugbaja | Fullstack Developer",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <body className="antialiased min-h-screen">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
