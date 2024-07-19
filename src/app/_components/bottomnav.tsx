"use client";

import Link from "next/link";

export default function BottomNav() {
  return (
    <footer className="flex w-full list-none flex-col items-center justify-between gap-6 p-10 text-neutral-600 md:flex-col-reverse">
      <div>
        <Link href={"/"}>© 2024 Zero2Prod</Link>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-start gap-7 lg:justify-center">
        <li>
          <Link href={"/"}>Privacy Policy</Link>{" "}
        </li>
        <li>
          <Link href={"/"}>Terms</Link>
        </li>
        <li>
          <Link href={"/"}>Community Standards</Link>
        </li>
        <li>
          <Link href={"/"}>Transparency Report</Link>
        </li>
        <li>
          <Link href={"/"}>Press</Link>
        </li>
        <li>
          <Link href={"/"}>Jobs</Link>
        </li>
        <li>
          <Link href={"/"}>Help</Link>
        </li>
        <li>
          <Link href={"/"}>News</Link>
        </li>
        <li>
          <Link href={"/"}>Competition Terms</Link>
        </li>
        <li>
          <Link href={"/"}>Brand Resources</Link>
        </li>
      </div>
    </footer>
  );
}
