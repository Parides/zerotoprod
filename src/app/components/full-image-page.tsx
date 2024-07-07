import React from "react";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
    
  const iamge = await getImage(props.id);
  return <img src={iamge.url} className="w-96" />;
}
