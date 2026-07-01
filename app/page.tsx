export default function Home() {
  return (
    <main className="relative h-screen flex justify-center items-end bg-black pb-20">

      <img
        src="/hero.png"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-7xl font-black text-yellow-400">
          SALES GUILD
        </h1>
      </div>

    </main>
  );
}
