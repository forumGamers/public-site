import Navbar from "@/components/atom/navbar/material-tailwind";
import { LazyLoadImage } from "@/components/images/lazy-load-image";
import Link from "next/link";

export default function LoginNavbar() {
  return (
    <Navbar className="top-0 sticky mt-3 justify-between flex flex-row flex-wrap bg-transparent border-none">
      <header className="flex-1 start-1">
        <h2 className="text-xl font-sans text-white relative inline">
          <span className="block sm:inline-block mt-3">
            <LazyLoadImage
              src="/global/fg.jpg"
              alt="forum gamers"
              loading="lazy"
              className="w-[50px] h-[50px] max-w-[50px] sm:w-[25px] sm:h-[25px] lg:w-[35px] lg:h-[35px] mt-3 sm:mt-3 md:mt-2"
            />
          </span>
          <span className="z-[1] header-title sm:tracking-tighter">
            {" "}
            Forum Gamers
          </span>
        </h2>
      </header>
      <ul className="px-1 flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Link className="font-sans text-white" rel="prefetch" href="/company">
            About
          </Link>
        </li>
        <li>
          <Link
            className="font-sans text-white"
            rel="prefetch"
            href="/auth/register"
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </Navbar>
  );
}
