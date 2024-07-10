"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import UploadButton from "./upload-button";
import { Button } from "~/components/ui/button";
import UserProfileButton from "./user-button";
import { useEffect, useState } from "react";

export default function TopNav() {
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY > 60) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <div className={header ? "fixed top-0 z-40 w-full bg-black" : ""}>
      <nav
        className={
          "flex w-full items-center justify-center border-b p-4 text-xl font-semibold"
        }
      >
        <div className="flex w-full items-center justify-between">
          <img
            src="https://utfs.io/f/eed5e505-a307-464a-83d4-c6705bb8b2d9-5nw9l7.png"
            alt="logo"
            className="h-12 w-12"
          />
          <div className="flex flex-row items-center gap-4">
            <SignedOut>
              <SignInButton>
                <Button variant="outline" className="w-full">
                  Log In
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UploadButton />
              {/* <UserButton /> */}
              <UserProfileButton />
            </SignedIn>
          </div>
        </div>
      </nav>
    </div>
  );
}
