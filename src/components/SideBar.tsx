import Logo from "@/components/Logo";
import Navigator from "@/components/Navigator";
import React from "react";

type props = {
  children: React.ReactNode;
};

const Sidebar = ({ children }: props) => {
  return (
    <div className="flex flex-row h-full">
      <nav className="hidden lg:block w-[240px] border-r-[1px] border-neutral-600">
        <div className="p-[24px]">
          <Logo />
        </div>
        <div>
          <Navigator />
        </div>
      </nav>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Sidebar;
