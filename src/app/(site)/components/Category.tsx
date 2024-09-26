"use client";

import useUIState from "@/hooks/useUIState";
import { homeCategoryList } from "@/lib/dummyData";
import { cn } from "@/lib/utils";
import tCategory from "@/types/category";

export default function Category() {
  const { homeCategory, setHomeCategory } = useUIState();

  function onClickCategory(category: tCategory) {
    if (homeCategory.label === category.label) {
      setHomeCategory({ label: "", src: "" });
    } else {
      setHomeCategory(category);
    }
  }

  return (
    <ul className="max-w-full overflow-x-auto flex flex-row gap-4">
      {homeCategoryList.map((category) => (
        <li
          onClick={() => onClickCategory(category)}
          key={category.label}
          className={cn(
            "h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer",
            category.label === homeCategory.label &&
              "bg-white text-black hover:bg-white"
          )}
        >
          {category.label}
        </li>
      ))}
    </ul>
  );
}
