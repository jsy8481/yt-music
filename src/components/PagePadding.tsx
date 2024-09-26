import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function PagePadding({ children }: Props) {
  return <div className="mx-auto px-[10px] py-2 lg:px-[100px]">{children}</div>;
}
