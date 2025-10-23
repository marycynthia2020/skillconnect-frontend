import type { Metadata } from "next";
import { Poppins, Roboto} from "next/font/google";
import "./globals.css";
import GlobalLayout from "@/components/GlobalLayout";


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
  title: "SkillConnect",
  description: "Connetcting artisans with those who them",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <body className="antialiased min-h-screen relative z-[50]">
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
