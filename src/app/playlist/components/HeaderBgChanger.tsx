"use client";
import useUIState from "@/hooks/useUIState";
import { useEffect } from "react";

type Props = {
  imageSrc: string;
};

export default function HeaderBgChanger({ imageSrc }: Props) {
  const { setHomeCategory } = useUIState();

  useEffect(() => {
    setHomeCategory({ src: imageSrc });
  }, [imageSrc]);

  return <></>;
}
