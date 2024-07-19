"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import UploadButton from "./upload-button";
import { Button } from "~/components/ui/button";
import UserProfileButton from "./user-button";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ModeToggle } from "../components/mode-toggle";
import { CommandMenu } from "../components/command-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { BoxModelIcon, RowsIcon } from "@radix-ui/react-icons";
import SideNav from "./sidenav";

export function APLogo() {
  return (
    <div className="lg:flex md:flex items-center justify-center hidden">
      <Link href={"/"}>
        <img
          src="https://utfs.io/f/eed5e505-a307-464a-83d4-c6705bb8b2d9-5nw9l7.png"
          alt="logo"
          className="h-12 w-12 invert dark:invert-0"
        />
      </Link>
    </div>
  );
}
export default function TopNav() {
  return (
    <header className="flex w-full items-center justify-center border-b p-4 text-xl font-semibold">
      <div className="flex w-full items-center justify-between gap-1">
        <APLogo />
        <SideNav />
        <CommandMenu />
        <div className="hidden md:block">
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
              <UserProfileButton />
            </SignedIn>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
