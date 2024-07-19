"use client";

import React, { ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
// import { Drawer } from "~/components/ui/drawer";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "~/components/ui/drawer";
import Image from "next/image";
import { Button } from "~/components/ui/button";

export function CustomDrawer({
  photoName,
  photoUrl,
  photoId,
}: {
  photoName: string;
  photoUrl: string;
  photoId: string;
}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(true);
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!isOpen) {
      router.back();
    }
  }, [isOpen]);

  function onDismiss() {
    setIsOpen(false);
    // router.back();
  }

  return (
    <Drawer
      open={isOpen}
      key={photoId}
      onClose={onDismiss}
      onOpenChange={setIsOpen}
    >
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{photoName}</DrawerTitle>
          <DrawerDescription>{"test"}</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col items-center justify-center">
          <Image
            className="rounded-md"
            src={photoUrl}
            alt={photoName}
            style={{ objectFit: "cover" }}
            width={250}
            height={250}
          />
        </div>
        <DrawerFooter>
          {/* <Button onClick={() => router}>Submit</Button> */}
          <DrawerClose className="flex" asChild>
            <Button
              className="w-full"
              variant="link"
              onClick={() => onDismiss()}
            >
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
