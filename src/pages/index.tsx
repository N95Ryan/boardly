import React from "react";
import Head from "next/head";
import Layout from "@/layout/Layout";
import KanbanBoard from "@/dashboard/KanbanBoard";
import AvatarGroup from "@/shared/AvatarGroup";
import {
  Filter,
  CalendarDays,
  Share2,
  LayoutGrid,
  ChevronDown,
  Plus,
} from "lucide-react";

// Dashboard home page. Matches the high-level layout from Figma with
// a header section for quick stats and a main Kanban board area.
export default function HomePage() {
  return (
    <>
      <Head>
        <title>Panda Hub - Dashboard</title>
      </Head>
      <Layout>
        <section className="mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              Mobile App
            </h2>
            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 md:flex">
                <button className="inline-flex items-center gap-1 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm hover:bg-neutral-50">
                  <Plus className="h-4 w-4 text-[var(--brand)]" />
                  <span className="text-neutral-700">Invite</span>
                </button>
                <AvatarGroup
                  users={[
                    { id: "1", initials: "AM" },
                    { id: "2", initials: "JD" },
                    { id: "3", initials: "LS" },
                    { id: "4", initials: "PK" },
                    { id: "5", initials: "RB" },
                  ]}
                />
              </div>
              <button className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm hover:bg-neutral-50">
                <Share2 className="h-4 w-4" /> Share
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-3 py-2 text-sm font-medium text-white hover:bg-violet-500">
                <LayoutGrid className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm hover:bg-neutral-50">
              <Filter className="h-4 w-4" /> Filter
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm hover:bg-neutral-50">
              <CalendarDays className="h-4 w-4" /> Today
              <ChevronDown className="h-4 w-4 text-neutral-500" />
            </button>
          </div>
        </section>

        <KanbanBoard />
      </Layout>
    </>
  );
}
