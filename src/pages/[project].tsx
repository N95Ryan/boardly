import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "@/layout/Layout";
import KanbanBoard from "@/dashboard/KanbanBoard";
import { useKanbanStore } from "@/lib/kanbanStore";
import { isProjectKey, PROJECT_LABELS } from "@/lib/projects";
import InviteButton from "@/shared/InviteButton";
import AvatarGroup from "@/shared/AvatarGroup";
import {
  Filter,
  CalendarDays,
  Share2,
  LayoutGrid,
  ChevronDown,
} from "lucide-react";

export default function ProjectPage() {
  const router = useRouter();
  const slug = router.query.project as string | undefined;
  const switchProject = useKanbanStore((s) => s.switchProject);
  const current = useKanbanStore((s) => s.currentProject);
  const loadFromDummyJSON = useKanbanStore((s) => s.loadFromDummyJSON);
  const statusFilter = useKanbanStore((s) => s.statusFilter);
  const setStatusFilter = useKanbanStore((s) => s.setStatusFilter);
  const isLoadingFromAPI = useKanbanStore((s) => s.isLoadingFromAPI);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!slug) return;
    if (isProjectKey(slug)) {
      if (current !== slug) {
        switchProject(slug);
      }
      loadFromDummyJSON();
    } else {
      // Unknown project, redirect to mobile-app
      router.replace("/mobile-app");
    }
  }, [slug, current, switchProject, loadFromDummyJSON, router]);

  const title = slug && isProjectKey(slug) ? PROJECT_LABELS[slug] : "Project";

  // Close the filter popover on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setIsFilterOpen(false);
      }
    }
    if (isFilterOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isFilterOpen]);

  const filterLabelMap: Record<string, string> = {
    all: "All",
    todo: "To Do",
    "in-progress": "In Progress",
    done: "Done",
  };

  return (
    <>
      <Head>
        <title>Panda Hub - {title}</title>
      </Head>
      <Layout>
        <section className="mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 capitalize">
              {title}
            </h2>
            <div className="flex flex-col items-end gap-3">
              <div className="hidden items-center gap-3 md:flex">
                <InviteButton />
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
              <div className="flex items-center gap-3">
                <button className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm hover:bg-neutral-50">
                  <Share2 className="h-4 w-4" /> Share
                </button>
                <span className="h-6 w-px bg-neutral-200" aria-hidden="true" />
                <button className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-3 py-2 text-sm font-medium text-white hover:bg-violet-500">
                  <LayoutGrid className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <div className="relative" ref={filterRef}>
              <button
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm hover:bg-neutral-50"
                aria-haspopup="menu"
                aria-expanded={isFilterOpen}
                onClick={() => setIsFilterOpen((v) => !v)}
              >
                <Filter className="h-4 w-4" />
                <span>Filter: {filterLabelMap[statusFilter]}</span>
                <ChevronDown className="h-4 w-4 text-neutral-500" />
              </button>
              {isFilterOpen && (
                <div
                  role="menu"
                  aria-label="Filter tasks by status"
                  className="absolute z-20 mt-2 w-40 overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-lg"
                >
                  <ul className="py-1 text-sm text-neutral-700">
                    {(
                      [
                        { key: "all", label: "All" },
                        { key: "todo", label: "To Do" },
                        { key: "in-progress", label: "In Progress" },
                        { key: "done", label: "Done" },
                      ] as const
                    ).map((opt) => (
                      <li key={opt.key}>
                        <button
                          role="menuitemradio"
                          aria-checked={statusFilter === opt.key}
                          className={`flex w-full items-center gap-2 px-3 py-2 hover:bg-neutral-50 ${
                            statusFilter === opt.key ? "text-neutral-900" : ""
                          }`}
                          onClick={() => {
                            setStatusFilter(opt.key);
                            setIsFilterOpen(false);
                          }}
                        >
                          <span
                            className={`inline-block h-1.5 w-1.5 rounded-full ${
                              opt.key === "todo"
                                ? "bg-[var(--brand)]"
                                : opt.key === "in-progress"
                                  ? "bg-amber-400"
                                  : opt.key === "done"
                                    ? "bg-emerald-500"
                                    : "bg-neutral-300"
                            }`}
                            aria-hidden="true"
                          />
                          {opt.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm hover:bg-neutral-50">
              <CalendarDays className="h-4 w-4" /> Today
              <ChevronDown className="h-4 w-4 text-neutral-500" />
            </button>
          </div>
        </section>

        {isLoadingFromAPI ? (
          <div className="flex w-full items-center justify-center py-12 text-sm text-neutral-500">
            Loading data...
          </div>
        ) : (
          <KanbanBoard />
        )}
      </Layout>
    </>
  );
}
