"use client";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { AiFillCaretDown, AiFillCaretLeft } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";

export default function Category() {
  const libraryCategories = [
    "재생목록",
    "팟캐스트",
    "노래",
    "앨범",
    "아티스트",
  ];

  return (
    <div className="flex flex-row items-center justify-between gap-4 flex-wrap">
      <ul className="max-w-full overflow-x-auto flex flex-row gap-4">
        {libraryCategories.map((category) => (
          <li
            key={category}
            className="h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer"
          >
            {category}
          </li>
        ))}
      </ul>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="w-[162px] h-[42px] flex flex-row justify-between items-center p-4 bg-neutral-800 border border-neutral-500 rounded-3xl text-[14px]">
              <div>최근 활동</div>
              <div>
                <AiFillCaretDown />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[300px] bg-neutral-800"
            align={"end"}
          >
            <DropdownMenuLabel className="p-3">정렬 기준</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-neutral-700" />
            <DropdownMenuCheckboxItem className="p-3">
              <span className="min-w-[40px]">
                <FiCheck size={20} />
              </span>
              최근 활동
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="p-3" disabled>
              <span className="min-w-[40px]"></span>
              최근에 저장됨
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="p-3">
              <span className="min-w-[40px]"></span>
              최근 재생한 음악
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
