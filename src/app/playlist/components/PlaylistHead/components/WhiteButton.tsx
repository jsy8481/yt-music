import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  label: string;
  className?: string;
};

export default function WhiteButton({ icon, label, className }: Props) {
  return (
    <div
      className={cn(
        className,
        "cursor-pointer bg-white hover:bg-neutral-200 text-black flex flex-row items-center justify-center gap-2 p-2.5 border border-neutral-600 min-w-[80px] rounded-2xl"
      )}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}
