import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/acdb3280-2d3c-4cb7-9370-371fbe1d6c6a-6ho1v7.jpg",
  "https://utfs.io/f/b1a38f7c-4127-4323-9d98-0d417834c83a-bu4e3z.jpg",
  "https://utfs.io/f/44a14aec-a1a3-4c60-9ccb-2429ac9ad235-q4ue9i.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
