import React from "react";
import Link from "next/link";

// Left navigation sidebar with simple responsive behavior.
// Collapses on small screens via overflow and max-w.
export default function Sidebar() {
  return (
    <aside className="hidden h-full w-60 shrink-0 border-r border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 md:block">
      <div className="flex h-14 items-center px-4">
        <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
          PandaHub
        </span>
      </div>
      <nav className="flex flex-col gap-1 px-2 py-2 text-sm">
        <Link
          href="/"
          className="rounded-md px-3 py-2 text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
        >
          Dashboard
        </Link>
        <Link
          href="/projects"
          className="rounded-md px-3 py-2 text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
        >
          Projects
        </Link>
        <Link
          href="/settings"
          className="rounded-md px-3 py-2 text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
        >
          Settings
        </Link>
      </nav>
    </aside>
  );
}
