import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const routes = [
  {
    path: "/terms-and-conditions",
    name: "Terms and Conditions",
  },
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
  },
];
export default function Footer() {
  return (
    <footer className="mt-auto flex h-16 items-center justify-between border-t-2 border-t-cream/[7%] px-6 text-xs sm:px-9">
      <small className="text-xs">
        <Link
          className="flex gap-2"
          target="_blank"
          href="https://github.com/klopezktl"
        >
          <GitHubLogoIcon />
          klopezktl
        </Link>
      </small>

      <ul className="flex gap-4 sm:gap-6">
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
