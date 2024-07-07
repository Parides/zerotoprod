import React from "react";
import { Modal } from "~/app/@modal/(.)img/[id]/modal";
import FullPageImageView from "~/app/components/full-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = parseInt(photoId);
  if (isNaN(idAsNumber)) throw new Error("Invalid ID");

  return <FullPageImageView id={idAsNumber} />;
}
