"use client";
import PagePadding from "@/components/PagePadding";
import UserIcon from "@/components/UserIcon";
import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Logo from "@/components/Logo";
import Navigator from "@/components/Navigator";
import { cn } from "@/lib/utils";
import useUIState from "@/hooks/useUIState";

type Props = {
  children: ReactNode;
};

type DrawerProps = {
  children: ReactNode;
};

const HeaderDrawer = ({ children }: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        <div className="py-3">
          <div className="px-3">
            <Logo isInDrawer={true} onClickClose={() => setIsOpen(false)} />
          </div>
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default function Header({ children }: Props) {
  const { homeCategory } = useUIState();
  const [isScrolled, setIsScrolled] = useState(false);
  const headRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const currentHeadRef = headRef.current;

    function handleScroll() {
      const scrollValue = headRef?.current?.scrollTop;
      console.log(scrollValue);
      setIsScrolled(scrollValue !== 0);
    }

    currentHeadRef?.addEventListener("scroll", handleScroll);
    return () => {
      currentHeadRef?.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header ref={headRef} className="relative overflow-auto w-full h-full">
      {/* bgSection */}
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image
            fill
            alt="mediaItem"
            className="object-cover"
            src={
              homeCategory.src ||
              "https://plus.unsplash.com/premium_photo-1725873536636-9f8133411637?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <div className="absolute top-0 bg-black opacity-40 w-full h-[400px]"></div>
          <div className="absolute top-0 bg-gradient-to-t from-black w-full h-[400px]"></div>
        </div>
      </section>
      {/* searchSection */}
      <section
        className={cn("sticky top-0 left-0 z-10", isScrolled && "bg-black")}
      >
        <PagePadding>
          <div className="h-[64px] flex flex-row justify-between items-center">
            <article className="hidden lg:flex flex-row items-center gap-[16px] h-[42px] min-w-[480px] bg-[rgba(0,0,0,0.14)] px-[16px] rounded-2xl border border-neutral-500">
              <div>
                <FiSearch size={24} />
              </div>
              <input
                className="h-full w-full bg-transparent outline-none"
                type="text"
                placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
              />
            </article>
            <HeaderDrawer>
              <article className="lg:hidden">
                <Logo />
              </article>
            </HeaderDrawer>
            <article className="flex flex-row gap-6 items-center">
              <FaChromecast size={26} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="absolute w-full">{children}</section>
    </header>
  );
}
