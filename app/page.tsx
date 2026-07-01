import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex h-screen items-center justify-center bg-[#111111]">

      <Image
        src="/hero.png"
        alt="background"
        fill
        className="object-cover opacity-40"
      />

      <div className="relative z-10 text-center select-none">
        <h1 className="text-7xl md:text-9xl font-black tracking-[0.25em] text-[#d4af37] hover:scale-105 transition">
          SALES GUILD
        </h1>

        <p className="mt-8 text-lg tracking-[0.6em] uppercase text-neutral-500">
          대한민국 원탑 세일즈 길드
        </p>
      </div>

    </main>
  );
}
