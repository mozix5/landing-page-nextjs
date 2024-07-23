import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface DevelopmentStageCardProps {
  icon: string;
  title: string;
  description: string;
}

const DevelopmentStageCard: React.FC<DevelopmentStageCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Card className=" w-2xl p-6 shadow-lg">
      <CardHeader>
        <div className="flex items-center space-x-6">
          <Image src={icon} alt={`${title} icon`} />
          <CardTitle >{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className=" font-medium">{description}</p>
      </CardContent>
    </Card>
  );
};

export default DevelopmentStageCard;
