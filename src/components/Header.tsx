"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function Header() {
  const routes = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/events/all",
      name: "All Events",
    },
  ];

  const currentPath = usePathname();
  console.log({ currentPath });

  return (
    <header className="flex h-14 items-center justify-between border-b-2 border-b-cream/[7%] px-6 text-sm sm:px-9">
      <h1 className="uppercase">Evento</h1>
      <nav className="h-full">
        <ul className="flex h-full gap-4 sm:gap-6">
          {routes.map((route) => (
            <li
              key={route.path}
              className={clsx("relative flex h-full items-center", {
                "text-pink/[50%]": currentPath !== route.path,
              })}
            >
              <Link href={route.path}>{route.name}</Link>
              {currentPath === route.path && (
                <motion.div
                  layoutId="active-link"
                  className="absolute bottom-0 h-1 w-full bg-accent"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
