import React from "react";
import Money from "@/logic/utils/Money";

export interface SummaryItemProps {
  title: string;
  value: number;
  icon: any;
  className?: string;
  valueClassName?: string;
  iconClassName?: string;
}

export default function SummaryItem(props: SummaryItemProps) {
  return (
    <div
      className={`relative flex justify-between items-center  py-3 px-5 rounded-lg border-2  ${
        props.className ?? ""
      }`}
    >
      <div className="flex flex-col">
        <h1 className="text-lg">{props.title}</h1>
        <span className={`text-3xl font-black ${props.valueClassName ?? ""}`}>
          {Money.format(props.value)}
        </span>
      </div>
      <span>
        {React.cloneElement(props.icon, {
          size: 60,
          strokeWidth: 1,
          className: `${props.iconClassName ?? ""}`,
        })}
      </span>
    </div>
  );
}
