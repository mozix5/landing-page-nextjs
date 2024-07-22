import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { HTMLProps } from "react";

const NavButton = ({
  label,
  href,
  icon,
  color,
}: {
  label?: string;
  href: string;
  icon?: StaticImageData;
  color?: HTMLProps<HTMLElement>["className"];
}) => {
  return (
    <Button variant="link" asChild>
      <Link href={href}>
        <div className="flex items-center space-x-2">
          {icon && <Image src={icon} alt={`${label} icon`} />}
          <span className={`${color}`}>{label}</span>
        </div>
      </Link>
    </Button>
  );
};

export default NavButton;
