import React from "react";
import { CustomDrawer } from "./drawer";
import { getImage } from "~/server/queries";

export default async function PhotoDrawer({
  params: { id: photoId },
}: {
  params: { id: string; name: string };
}) {
  const idAsNumber = parseInt(photoId);

  const image = await getImage(idAsNumber);

  return (
    <CustomDrawer children={undefined} photoName={image.name} photoUrl={image.url} photoId={image.id.toString()} />
  );
}
