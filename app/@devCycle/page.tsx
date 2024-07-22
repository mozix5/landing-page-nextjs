import React from "react";
import BrandsBanner from "../components/BrandsBanner";
import NavButton from "../components/NavButton";
import right from "@/public/svg/chevron_right_small_24.svg";
const devItems = [
  { label: "iOS development", href: "/#" },
  { label: "Android development", href: "/#" },
  { label: "Web development", href: "/#" },
  { label: "UI/UX Design", href: "/#" },
  { label: "Testing", href: "/#" },
  { label: "Launch", href: "/#" },
  { label: "IT consulting", href: "/#" },
];
const DevCycleSection = () => {
  return (
    <div className="p-12">
      <BrandsBanner />
      <div className="mx-8 flex mt-8">
        <div className=" w-1/2 pr-32 flex flex-col gap-6">
          <h1 className=" text-4xl font-bold py-1">Full Development Cycle</h1>
          <p className=" font-semibold">We use proven technologies</p>
          <div>
            <h3 className=" font-bold text-lg">Web</h3>
            <p className="mt-4">
              PHP / Javascript / Node.js / Web Socket / Socket.io / Vue.js /
              Next / MySQL / Laravel / GO lang / Django / Python
            </p>
          </div>
          <div>
            <h3 className=" font-bold text-lg">Mobile</h3>
            <p className="mt-4">
              Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm /
              CoRoutine / RxJava / RxSwift / UnitTest / Navigation
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-start hover:font-semibold pl-24">
          {devItems.map((item) => {
            return (
              <NavButton
                label={item.label}
                href={item.href}
                mode={2}
                icon={right}
                className="py-6 gap-2"
                variant="customLink"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DevCycleSection;
