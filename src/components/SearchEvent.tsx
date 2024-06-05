"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchEvent() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/events/${search}`);
  };

  return (
    <form className="w-full pt-10 sm:w-[600px]" onSubmit={handleSubmitSearch}>
      <input
        className="h-16 w-full rounded-md bg-dark-purple px-5 outline-none ring-accent focus:bg-pink/10 focus:ring-2"
        placeholder="Search events in any city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </form>
  );
}
