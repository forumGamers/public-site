import { LazyLoadImage } from "@/components/images/lazy-load-image";
import { Typography } from "@/components/mollecul/typography/typograph";
import Link from "next/link";

export default function MainFooter() {
  return (
    <footer
      id="app-footer"
      className="w-full bg-white p-8 bottom-0 rounded-md -z-50"
    >
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <LazyLoadImage
          src="/global/fg.jpg"
          alt="logo-ct"
          className="w-10"
          width={100}
          height={100}
          loading="lazy"
        />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Link href="/company" rel="prefetch">
              <Typography
                as="span"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                About Us
              </Typography>
            </Link>
          </li>
          <li>
            <Link href="/company/license">
              <Typography
                as="span"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                License
              </Typography>
            </Link>
          </li>
          <li>
            <Link href="/company/team">
              <Typography
                as="span"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Our Team
              </Typography>
            </Link>
          </li>
          <li>
            <Link href="mailto:forumgamersindo@gmail.com">
              <Typography
                as="span"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contact Us
              </Typography>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
