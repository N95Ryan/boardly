import React from "react";

// Simple top navigation bar used across the app.
// Keep content minimal for now; wire icons and actions later.
export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 h-14 w-full border-b border-neutral-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800 dark:bg-neutral-950/70">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4">
        <h1 className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Panda Dashboard
        </h1>
        <nav className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="rounded-md px-2 py-1 text-xs text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
          >
            Search
          </button>
          <button
            aria-label="Profile"
            className="rounded-md px-2 py-1 text-xs text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
          >
            Profile
          </button>
        </nav>
      </div>
    </header>
  );
}
