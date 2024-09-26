import Header from "@/components/Header";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div className="w-full h-full">
      <Header>{children}</Header>
    </div>
  );
}
