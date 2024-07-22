import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { HTMLProps } from "react";

const NavButton = ({
  label,
  href,
  icon,
  className,
  mode,
  variant = "link",
}: {
  label?: string;
  href: string;
  icon?: StaticImageData;
  className?: HTMLProps<HTMLElement>["className"];
  mode?: 2;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "customLink";
}) => {
  return (
    <Button variant={variant} className={`${className}`} asChild>
      <Link
        href={href}
        className={`flex items-center space-x-2 ${
          mode === 2 && "flex-row-reverse"
        }`}
      >
        {icon && <Image src={icon} alt={`${label} icon`} />}
        <span>{label}</span>
      </Link>
    </Button>
  );
};

export default NavButton;
