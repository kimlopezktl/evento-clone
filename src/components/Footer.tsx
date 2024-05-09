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
    <footer className="mt-auto px-6 sm:px-9 flex items-center justify-between h-16 border-t-cream/[7%] border-t-2 text-xs">
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
