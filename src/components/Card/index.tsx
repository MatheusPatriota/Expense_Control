import React from "react";

interface CardProps {
  title: string;
  value: string;
  iconBackgroundColor: string;
  icon: React.ReactNode;
}

function Card({ title, value, iconBackgroundColor, icon }: CardProps) {
  return (
    <div className="flex flex-row gap- p-4 rounded-3xl border-2 w-full bg-white max-w-[300px] justify-between shadow-lg shadow-gray-200/50 cursor-pointer hover:opacity-80">
      <div className="flex flex-col gap-2">
        <span className="text-gray-600">{title}</span>
        <span className="font-medium text-[24px]">R$ {value}</span>
      </div>
      <div className={`flex justify-center items-center`}>
        <div
          className={`flex justify-center items-center p-4 rounded-full`}
          style={{ backgroundColor: `#${iconBackgroundColor}` }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default Card;
