"use client";

import { useEffect, useState } from "react";
import { Image } from "~/server/db/schema";
import { useInView } from "react-intersection-observer";
import { LoadingSpinner } from "../_components/upload-button";
import { getUserImagesLimit } from "~/server/queries";
import ImageCard from "./image-card";

export function LoadMore() {
  const [images, setImages] = useState<Image[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(10);

  const { ref, inView } = useInView({});

  const loadMoreImages = async () => {
    const newImages = (await getUserImagesLimit(imagesLoaded, 10)) ?? [];
    console.log("new images", newImages.length);
    setImages([...images, ...newImages]);
    setImagesLoaded(imagesLoaded + 10);
  };

  useEffect(() => {
    console.log("in view", inView);
    console.log("images", images.length); 
    if (inView) {
      loadMoreImages();
    }
  }, [inView]);

  return (
    <>
      <ImageCard images={images}></ImageCard>
      <div ref={ref}>
        {/* <LoadingSpinner /> */}
      </div>
    </>
  );
}
