"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main
      onClick={() => router.push("/about")}
      className="relative h-screen cursor-pointer bg-black"
    >
      <img
        src="/hero.png"
        className="absolute inset-0 w-full h-full object-contain"
      />
    </main>
  );
}
