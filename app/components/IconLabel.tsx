import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";

type IconLabelProps = {
  icon: string;
  label?: string;
};
const IconLabel = ({ icon, label }: IconLabelProps) => {
  return (
    <div className=" flex items-center space-x-4">
      <Badge className="rounded-full bg-white h-10 w-10">
        <Image src={icon} alt="ball" />
      </Badge>
      <span className="font-semibold">{label}</span>
    </div>
  );
};

export default IconLabel;
