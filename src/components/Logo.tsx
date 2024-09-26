"use client";
import IconButton from "@/components/IconButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

type Props = {
  isInDrawer?: boolean;
  onClickClose?: () => void;
};

export default function Logo({ isInDrawer = false, onClickClose }: Props) {
  const router = useRouter();
  const onClickLogo = () => {
    router.push("/");
  };
  const onClickMenu = () => {
    onClickClose?.();
  };

  return (
    <section className="flex flex-row items-center gap-3">
      {isInDrawer ? (
        <IconButton icon={<IoMdClose size={30} />} onClickIcon={onClickMenu} />
      ) : (
        <IconButton
          icon={<RxHamburgerMenu size={24} />}
          onClickIcon={onClickMenu}
        />
      )}

      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image alt="logo" width={100} height={30} src={"/main-logo.svg"} />
      </div>
    </section>
  );
}
