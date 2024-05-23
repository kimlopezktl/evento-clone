import Link from "next/link";

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
  return (
    <header className="flex h-14 items-center justify-between border-b-2 border-b-cream/[7%] px-6 text-sm sm:px-9">
      <h1 className="uppercase">Evento</h1>
      <nav>
        <ul className="flex gap-4 sm:gap-6">
          {routes.map((route) => (
            <li key={route.path}>
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
