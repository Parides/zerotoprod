"use server";
import { db } from "./db";
import { images } from "./db/schema";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import analyticsServerClient from "./analytics";
import { auth, clerkClient } from "@clerk/nextjs/server";

export async function getUserImagesLimit(skip: number, fetch: number) {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
    offset: skip,
    limit: fetch,
  });

  return images;
}

export async function artificalDelay() {
  await new Promise(f => setTimeout(f, 100000));
}

export async function getUserImages() {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });

  return images;
}

export async function getImage(id: number) {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!image) throw new Error("Not Found");

  if (image.userId !== user.userId) throw new Error("Unauthorized");

  return image;
}

export async function deleteImage(id: number) {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  await db
    .delete(images)
    .where(and(eq(images.id, id), eq(images.userId, user.userId)));

  analyticsServerClient.capture({
    distinctId: user.userId,
    event: "delete_image",
    properties: {
      imageId: id,
    },
  });
  redirect("/");
}

export async function getUserName() {
  const clerkUser = await clerkClient.users.getUser(auth().userId!);

  if (!clerkUser.firstName || !clerkUser.lastName)
    throw new Error("Unauthorized");

  return `${clerkUser.firstName[0]} ${clerkUser.lastName[0]}`;
}

export async function getClerkUserImage() {
  const clerkUser = await clerkClient.users.getUser(auth().userId!);

  return clerkUser.imageUrl;
}
