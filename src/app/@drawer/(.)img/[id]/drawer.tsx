"use client";

import React, { useEffect } from "react";
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
  DrawerTrigger,
} from "~/components/ui/drawer";
import Image from "next/image";
import { Button } from "~/components/ui/button";

export function CustomDrawer({
  children,
  photoName,
  photoUrl,
  photoId,
}: {
  children: React.ReactNode;
  photoName: string;
  photoUrl: string;
  photoId: string;
}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(true);

  // useEffect(() => {
  //   if (isOpen) {
  //     router.push(`/img/${photoId}`);
  //   }
  // }, [isOpen]);

  function onDismiss() {
    router.push("/");
    router.refresh();
  }

  return (
    <Drawer
      open={isOpen}
      onOpenChange={setIsOpen}
      onClose={onDismiss}
      key={photoId}
    >
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{photoName}</DrawerTitle>
          <DrawerDescription>{"test"}</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={photoUrl}
            alt={photoName}
            style={{ objectFit: "cover" }}
            width={480}
            height={480}
          />
        </div>
        <DrawerFooter>
          {/* // <Button>Submit</Button> */}
          <DrawerClose className="flex">
            <Button className="w-full" variant="link">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
