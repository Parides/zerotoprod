import { clerkClient } from "@clerk/nextjs/server";
import React from "react";
import { Button } from "~/components/ui/button";
import { deleteImage, getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex flex-col lg:flex-row !h-full items-stretch">
      <div className="flex flex-1 items-center justify-center p-2">
        <img src={image.url} className="max-h-[50vh]" />
      </div>

      <div className="flex min-w-[25vw] flex-1 flex-shrink-0 flex-col break-all border-l">
        <div
          className="truncate border-b p-2 text-center text-lg"
          title={image.name}
        >
          {image.name}
        </div>
        <div className="flex flex-col p-2">
          <span>Uploaded By: {uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-grow p-2">
          <span>
            Created On: {new Date(image.createdAt).toLocaleDateString()}
          </span>
        </div>
        <div className="flex flex-col p-2">
          <form
            action={async () => {
              "use server";
              await deleteImage(image.id);
            }}
          >
            <Button type="submit" className="w-full" variant="destructive">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
