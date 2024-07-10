import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { getUserImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getUserImages();

  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="grid grid-cols-2 grid-rows-[auto,1fr] gap-1 md:grid-cols-4 lg:grid-cols-5">
        {/* <div className="flex flex-wrap justify-center gap-4 p-4"> */}
        {[...images].map((image) => (
          <div key={image.id} className="relative flex h-48 w-48 flex-col">
            <Link href={`/img/${image.id}`}>
              <Image
                src={image.url}
                alt={image.name}
                style={{ objectFit: "cover" }}
                fill
              />
            </Link>
          </div>
        ))}
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
            className="h-24 w-24"
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
    <main className="">
      <SignedOut>
        <MainPage />
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
