export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-[#111111]">
      <div className="text-center select-none">
        <h1 className="text-7xl md:text-9xl font-black tracking-[0.25em] text-[#d4af37] cursor-pointer transition duration-300 hover:scale-105 hover:text-white">
          SALES GUILD
        </h1>

        <p className="mt-8 text-lg tracking-[0.6em] uppercase text-neutral-500">
          대한민국 원탑 세일즈 길드
        </p>
      </div>
    </main>
  );
}