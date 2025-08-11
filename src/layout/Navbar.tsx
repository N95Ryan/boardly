import React from "react";
import { Search, Bell, CalendarCheck2, CircleHelp } from "lucide-react";
import Avatar from "@/shared/Avatar";
import Image from "next/image";
import flyOutIcon from "@/assets/flyOutButton.png";

type NavbarProps = {
  onOpenSidebar?: () => void;
};

// Simple top navigation bar used across the app.
// Keep content minimal for now; wire icons and actions later.
export default function Navbar({ onOpenSidebar }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 h-16 w-full border-b border-neutral-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Open menu"
            title="Open menu"
            className={`rounded-md p-2 hover:bg-neutral-100 md:hidden`}
            onClick={onOpenSidebar}
          >
            <Image
              src={flyOutIcon}
              alt="Open menu"
              width={20}
              height={20}
              className="transform scale-x-[-1]"
            />
          </button>
          <div className="hidden w-72 items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-500 ring-1 ring-transparent focus-within:ring-neutral-300 md:flex">
            <Search className="h-4 w-4" />
            <input
              placeholder="Search for anything..."
              aria-label="Search"
              className="w-full bg-transparent outline-none placeholder:text-neutral-400"
            />
          </div>
        </div>
        <nav className="flex items-center gap-2 md:gap-3">
          <button
            aria-label="Calendar"
            className="rounded-md p-2 text-neutral-600 hover:bg-neutral-100"
          >
            <CalendarCheck2 className="h-5 w-5" />
          </button>
          <button
            aria-label="Help"
            className="rounded-md p-2 text-neutral-600 hover:bg-neutral-100"
          >
            <CircleHelp className="h-5 w-5" />
          </button>
          <button
            aria-label="Notifications"
            className="rounded-md p-2 text-neutral-600 hover:bg-neutral-100"
          >
            <Bell className="h-5 w-5" />
          </button>
          <div className="ml-1 flex items-center gap-2 pl-2">
            <div className="text-right">
              <p className="text-sm font-medium leading-4 text-neutral-900">
                Anima Agrawal
              </p>
              <p className="text-xs text-neutral-500">U.P, India</p>
            </div>
            <Avatar initials="AA" size={32} />
          </div>
        </nav>
      </div>
    </header>
  );
}
