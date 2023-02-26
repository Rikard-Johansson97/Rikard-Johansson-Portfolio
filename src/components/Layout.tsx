import React, { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className=' min-h-screen min-w-full bg-background flex flex-col'>
      <main className='flex-1'>{children}</main>
    </div>
  );
};

export default Layout;
