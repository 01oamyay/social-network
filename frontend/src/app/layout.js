import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar/NavBar";
import NavSideBar from "./components/layout/SideBar/Nav/nav";

export const metadata = {
  title: "Social Network",
  description: "Facebook like social app",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NavSideBar />
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
