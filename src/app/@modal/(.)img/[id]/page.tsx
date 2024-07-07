import React from "react";
import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = parseInt(photoId);
  if (isNaN(idAsNumber)) throw new Error("Invalid ID");

  const iamge = await getImage(idAsNumber);
  return (
    <dialog open className="backdrop-blur-sm">
      <h1>{iamge.name}</h1>
      <img src={iamge.url} className="w-96" />
    </dialog>
  );
}
