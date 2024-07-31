import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Happy_Monkey } from "next/font/google";
import { FilePlus2, List } from "lucide-react";

const DashboardHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center shadow-md py-3 px-4">
       <div></div>

        <SignedIn>
          <div className="flex items-center gap-2 cursor-pointer">
            <Button asChild variant={"link"} >
              <Link className="sm:block hidden" href={"/dashboard/pricing"}>pricing</Link>
            </Button>
            <Button asChild variant="link">
              <Link href={'/dashboard'}>
              <span className="sm:block hidden">My Documents</span>
              </Link>
            </Button>

            <Button asChild variant={"outline"} >
              <span className="text-green-600">
                <FilePlus2 />
              </span>
            </Button>
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </>
  );
};

export default DashboardHeader;
