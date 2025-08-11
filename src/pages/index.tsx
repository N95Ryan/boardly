import React from "react";
import Layout from "@/layout/Layout";
import Stats from "@/dashboard/Stats";
import KanbanBoard from "@/dashboard/KanbanBoard";

// Dashboard home page. Matches the high-level layout from Figma with
// a header section for quick stats and a main Kanban board area.
export default function HomePage() {
  return (
    <Layout>
      <Stats />
      <KanbanBoard />
    </Layout>
  );
}
