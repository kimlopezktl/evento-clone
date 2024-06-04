import SearchEvent from "@/components/SearchEvent";
import Link from "next/link";

const popularCity = [
  { path: "austin", name: "Austin" },
  { path: "seattle", name: "Seattle" },
];
export default function Home() {
  return (
    <main className="flex h-auto flex-col items-center px-3 pt-36 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-7xl">
        Find events around you
      </h1>
      <h2 className="pt-6 text-lg font-light text-pink/70 sm:text-3xl">
        Browse more than{" "}
        <span className="font-bold italic text-accent underline">
          10,000 events
        </span>{" "}
        around you
      </h2>
      <SearchEvent />
      <section className="flex w-full max-w-[1000px] justify-center gap-6 pt-4 text-sm text-pink/70 sm:text-base">
        <p>Popular: </p>
        <ul className="flex gap-2 font-semibold sm:gap-3">
          {popularCity.map((city) => (
            <li key={city.path}>
              <Link href={`/events/${city.path}`}>{city.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
