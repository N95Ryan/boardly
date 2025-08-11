import React from "react";
import Card from "@/shared/Card";

// Placeholder stats cards to be refined against Figma later.
export default function Stats() {
  return (
    <section
      aria-label="Dashboard Stats"
      className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      <Card>
        <p className="text-xs text-neutral-500">Total Tasks</p>
        <p className="text-2xl font-semibold">42</p>
      </Card>
      <Card>
        <p className="text-xs text-neutral-500">In Progress</p>
        <p className="text-2xl font-semibold">7</p>
      </Card>
      <Card>
        <p className="text-xs text-neutral-500">Blocked</p>
        <p className="text-2xl font-semibold">2</p>
      </Card>
      <Card>
        <p className="text-xs text-neutral-500">Completed</p>
        <p className="text-2xl font-semibold">12</p>
      </Card>
    </section>
  );
}
