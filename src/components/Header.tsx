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
    <header className="flex justify-between items-center px-6 sm:px-9 h-14 border-b-cream/[7%] border-b-2 text-sm ">
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
