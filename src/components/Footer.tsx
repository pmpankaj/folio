import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
      <div className="container mx-auto flex flex-col items-center justify-between py-6">
        <span className="flex flex-row items-center space-x-4">
          <p className="text-sm text-muted-foreground">
            Made with ❤️ by{" "}
            <Link
              href="#"
              passHref
              className="text-foreground transition hover:text-primary"
            >
              Pankaj
            </Link>
          </p>
          <hr className="hidden h-6 border-l border-muted md:flex" />
          <span className="flex hidden flex-row items-center space-x-2 md:flex">
            <p className="text-sm font-semibold text-muted-foreground">
              Copyright © {new Date().getFullYear()} | All rights reserved.
            </p>
          </span>
        </span>
      </div>
      <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50" />
    </footer>
  );
}
