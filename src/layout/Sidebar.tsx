import React from "react";
import Link from "next/link";
import {
  Home,
  MessageSquare,
  ListTodo,
  Users2,
  Settings,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

// Left navigation sidebar with simple responsive behavior.
// Collapses on small screens via overflow and max-w.
export default function Sidebar() {
  return (
    <aside className="hidden h-full w-64 shrink-0 border-r border-neutral-200 bg-white md:block">
      <div className="flex h-16 items-center px-4">
        <span className="text-base font-semibold text-neutral-900">
          Project M.
        </span>
      </div>
      <nav className="flex flex-col gap-1 px-2 py-2 text-sm">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-neutral-700 hover:bg-neutral-100"
        >
          <Home className="h-4 w-4" /> Home
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-neutral-700 hover:bg-neutral-100"
        >
          <MessageSquare className="h-4 w-4" /> Messages
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-neutral-700 hover:bg-neutral-100"
        >
          <ListTodo className="h-4 w-4" /> Tasks
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-neutral-700 hover:bg-neutral-100"
        >
          <Users2 className="h-4 w-4" /> Members
        </Link>
        <Link
          href="/settings"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-neutral-700 hover:bg-neutral-100"
        >
          <Settings className="h-4 w-4" /> Settings
        </Link>
      </nav>

      <div className="mt-4 px-4">
        <div className="mb-2 flex items-center justify-between text-xs text-neutral-500">
          <span>MY PROJECTS</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </div>
        <div className="space-y-1">
          <Link
            href="/"
            className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-900 ring-1 ring-neutral-200 hover:bg-neutral-50"
          >
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-violet-500" /> Mobile App
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
          >
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange-400" /> Website
              Redesign
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
          >
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Design
              System
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
          >
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-500" /> Wireframes
            </span>
          </Link>
        </div>

        <div className="mt-6 rounded-xl border border-neutral-200 bg-white p-4 text-center shadow-sm">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
            <MessageCircle className="h-5 w-5" />
          </div>
          <p className="mb-3 text-sm font-medium text-neutral-900">
            Thoughts Time
          </p>
          <p className="mb-4 text-xs text-neutral-500">
            We don’t have any notice for you, till then you can share your
            thoughts with your peers.
          </p>
          <button className="w-full rounded-lg bg-neutral-900 px-3 py-2 text-xs font-medium text-white hover:bg-neutral-800">
            Write a message
          </button>
        </div>
      </div>
    </aside>
  );
}
