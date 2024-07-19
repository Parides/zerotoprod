import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getUserImagesLimit } from "~/server/queries";
import ImageCard from "./components/image-card";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getUserImagesLimit(0, 10);

  return (
    <div className="flex w-full flex-grow flex-col items-center justify-center">
      <div className="top-16 columns-2 gap-1 space-y-1 p-1 md:columns-4 lg:max-w-[70vw] lg:columns-5">
        <ImageCard images={images}></ImageCard>
      </div>
    </div>
  );
}

async function MainPage() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-center gap-1">
        <div className="flex justify-center">
          <img
            src="https://utfs.io/f/eed5e505-a307-464a-83d4-c6705bb8b2d9-5nw9l7.png"
            alt="logo"
            className="h-24 w-24 invert dark:invert-0"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="text-xl font-bold">Welcome to zerotoprod</div>
          <div className="text-sm">This is a demo app</div>
        </div>
      </div>
      {/* <div className="hidden flex-1 items-center justify-center lg:flex">
        <img
          src="https://utfs.io/f/eed5e505-a307-464a-83d4-c6705bb8b2d9-5nw9l7.png"
          className=""
        />
      </div> */}
    </div>
  );
}
export default async function HomePage() {
  return (
    <>
      <SignedOut>
        <MainPage />
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </>
  );
}
