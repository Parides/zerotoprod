"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Image as img } from "~/server/db/schema";
import { getUserImagesLimit } from "~/server/queries";
import { LoadingSpinner } from "../_components/upload-button";

const NUMBER_OF_IMAGES_TO_LOAD = 10;

export default function ImageCard({ images }: { images: img[] | null }) {
  const [currentImages, setImages] = useState<img[]>(images ?? []);
  const [imagesLoaded, setImagesLoaded] = useState(10);
  const [newImages, setNewImages] = useState(NUMBER_OF_IMAGES_TO_LOAD);
  const { ref, inView } = useInView({});

  const loadMoreImages = async () => {
    const newImages =
      (await getUserImagesLimit(imagesLoaded, NUMBER_OF_IMAGES_TO_LOAD)) ?? [];
    setImages([...currentImages, ...newImages]);
    setImagesLoaded(imagesLoaded + NUMBER_OF_IMAGES_TO_LOAD);
    setNewImages(newImages.length);

    console.log("new images", newImages.length);
  };

  useEffect(() => {
    if (inView) {
      loadMoreImages();
    }
  }, [inView]);

  return (
    <>
      {currentImages.map((image, index) => (
        <div id={image.name}>
          <Link href={`/img/${image.id}`} className="">
            <Image
              className="h-full w-full rounded-md"
              src={image.url}
              alt={image.name}
              style={{ objectFit: "cover" }}
              width={300}
              height={300}
              loading="lazy"
            />
          </Link>
        </div>
      ))}
      {newImages > 0 ? (
        <div ref={ref}>
          <LoadingSpinner />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
