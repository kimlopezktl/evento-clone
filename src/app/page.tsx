import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col h-auto px-3 items-center pt-36 text-center">
      <h1 className="text-4xl sm:text-7xl font-bold tracking-tighter">
        Find events around you
      </h1>
      <p className="text-lg sm:text-3xl pt-6 font-light text-pink/70">
        Browse more than{" "}
        <span className="italic underline text-accent font-bold">
          10,000 events
        </span>{" "}
        around you
      </p>
      <form className="pt-10 w-full sm:w-[600px]">
        <input
          className="w-full h-14 rounded-md p-5 bg-dark-purple outline-none ring-accent focus:ring-2 focus:bg-pink/10 focus:text-dark-purple"
          placeholder="Search events in any city..."
        ></input>
      </form>

      <section className="pt-4 flex justify-center text-xs text-pink/70 max-w-[1000px]">
        <p>Popular: </p>
        <ul>
          <li>Austin</li>
          <li>Seattle</li>
        </ul>
      </section>
    </main>
  );
}
