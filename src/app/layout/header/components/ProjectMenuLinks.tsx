import Link from "next/link";
import { usePathname } from "next/navigation";

const projectLinkStyle =
  "flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-medium leading-snug text-gray-800 hover:bg-green-50 hover:text-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-green-700 aria-[current=location]:bg-green-100 aria-[current=location]:font-semibold aria-[current=location]:text-green-900";

interface ProjectMenuLinksProps {
  items: Array<{ name: string; href: string; slug?: string }>;
  onSelect?: () => void;
  twoColumns?: boolean;
}

export default function ProjectMenuLinks({
  items,
  onSelect,
  twoColumns,
}: ProjectMenuLinksProps) {
  const categoryPath = usePathname().split("/").slice(0, 3).join("/");
  const overview = items.find(({ slug }) => slug === "tat-ca");
  const categories = items.filter(({ slug }) => slug !== "tat-ca");

  return (
    <nav aria-label="Danh mục dự án">
      {overview && (
        <Link
          href={overview.href}
          onClick={onSelect}
          aria-current={categoryPath === overview.href ? "location" : undefined}
          className={`${projectLinkStyle} justify-between gap-3`}
        >
          Tất cả dự án
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5 shrink-0"
          >
            <path d="M4 10h12m-5-5 5 5-5 5" />
          </svg>
        </Link>
      )}
      <ul
        className={`mt-2 grid max-h-[min(45dvh,20rem)] gap-1 overflow-y-auto overscroll-contain ${twoColumns ? "grid-cols-2" : "grid-cols-1"}`}
      >
        {categories.map(({ name, href }) => (
          <li key={href}>
            <Link
              href={href}
              onClick={onSelect}
              aria-current={categoryPath === href ? "location" : undefined}
              className={projectLinkStyle}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
