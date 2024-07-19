"use client";

import { useState, useEffect } from "react";
import { Skeleton } from "~/components/ui/skeleton";

export default function Loading() {
  // Define the number of skeletons you want to generate
  const numSkeletons = 10;

  // Function to generate random width and height
  const generateRandomDimensions = () => {
    const minSize = 50; // minimum size
    const maxSize = 500; // maximum size
    return {
      //   width: Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize,
      width: 140,
      height: Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize,
    };
  };

  // Generate random dimensions for the skeleton components
  const randomObject = Array.from(
    { length: numSkeletons },
    generateRandomDimensions,
  );

  return (
    <div className="shrink columns-2 gap-1 space-y-1 p-1 md:columns-4 lg:max-w-[70vw] lg:columns-5">
      {randomObject.map((dimensions, index) => (
        <Skeleton
          key={index}
          className="rounded"
          style={{
            width: `${dimensions.width}px`,
            height: `${dimensions.height}px`,
          }}
        />
      ))}
    </div>
    // <div className="grid grid-flow-row gap-3">

    // {/* </div> */}
  );
}
