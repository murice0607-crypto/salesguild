"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main
      onClick={() => router.push("/about")}
      className="relative h-screen cursor-pointer"
    >
      <img
        src="/hero.png"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </main>
  );
}
