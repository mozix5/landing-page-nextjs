import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import ind from '@/public/svg/image4.svg'

type Props = {
  className?: string;
  mode?: 1 | 2;
  heading?: string;
};
const ContactCard = ({ className, mode, heading }: Props) => {
  return (
    <Card
      className={`max-w-3xl p-6 shadow-lg rounded-lg bg-white ${
        mode === 2 && "flex items-end space-x-6"
      }`}
    >
      <div>
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            {heading}
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-6">
          <div>
            <Label htmlFor="fullName">Full name</Label>
            <Input
              id="fullName"
              type="text"
              defaultValue="My Name"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="phoneNumber">Phone number</Label>
            <div className="flex items-center mt-1">
              <span className="mr-2">
                <Image src={ind} alt="IN"/>
              </span>
              <Input
                id="phoneNumber"
                type="text"
                defaultValue="+91 0000000000"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="businessName">Business name</Label>
            <Input
              id="businessName"
              type="text"
              defaultValue="ABC Technologies PVT LTD"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="businessMail">Business mail</Label>
            <Input
              id="businessMail"
              type="email"
              defaultValue="demoaccount@gmail.com"
              className="mt-1"
            />
          </div>
        </CardContent>
      </div>
      <CardFooter className="flex justify-end">
        <Button className={`text-white ${className}`}>Get consultation</Button>
      </CardFooter>
    </Card>
  );
};

export default ContactCard;
