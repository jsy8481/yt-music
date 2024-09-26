import React, { ReactNode } from "react";
import { FiBarChart, FiMusic, FiSmile } from "react-icons/fi";

type CategoryMenuProps = {
  icon: ReactNode;
  label: string;
};

const CategoryMenu = ({ icon, label }: CategoryMenuProps) => {
  return (
    <div className="w-full h-[56px] py-4 px-[24px] flex flex-row gap-4 items-center bg-neutral-700 hover:bg-neutral-800 transition xl:text-[20px] cursor-pointer rounded-md">
      {icon}
      {label}
    </div>
  );
};

type CategoryProps = {};

export default function Category() {
  return (
    <div className="flex flex-col gap-4 w-full lg:flex-row">
      <CategoryMenu icon={<FiMusic color="#AAAAAA" />} label={"최신음악"} />
      <CategoryMenu icon={<FiBarChart color="#AAAAAA" />} label={"차트"} />
      <CategoryMenu
        icon={<FiSmile color="#AAAAAA" />}
        label={"분위기 및 장르"}
      />
    </div>
  );
}
