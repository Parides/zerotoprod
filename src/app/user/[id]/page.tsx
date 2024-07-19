"use client";

import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import { Avatar } from "~/components/ui/avatar";
import { artificalDelay } from "~/server/queries";

export default async function PhotoPage({
  params: { id: username },
}: {
  params: { id: String };
}) {
  // const asdasd = await artificalDelay();
  return (
    <div className="flex items-center justify-center">
      <div className="p-10 lg:max-w-[70vw]">
        <div className="flex justify-between gap-10">
          <div className="flex items-center justify-center">
            <Avatar className="h-32 w-32">
              <AvatarImage src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1721171581~exp=1721172181~hmac=7d6b4d7aa1e384f5ed5690fbbb96a10791976e4b7042bb8b3ec73e0c4ba35eac" />
            </Avatar>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="text-3xl font-bold">Andreas Paridis</div>
            <div className="text-3xl font-bold">Andreas Paridis</div>
          </div>
        </div>
      </div>
    </div>
  );
}
