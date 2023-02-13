import React, { FC } from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='min-h-screen min-w-full bg-lightBackground flex flex-col'>
      <Navbar />
      <main className='flex-1'>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
