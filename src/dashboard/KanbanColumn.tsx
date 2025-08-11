import React from "react";
import { Droppable } from "@hello-pangea/dnd";
import { Plus } from "lucide-react";
import { Column } from "@/lib/types";
import KanbanCard from "@/dashboard/KanbanCard";

type KanbanColumnProps = {
  column: Column;
};

// A single column containing a droppable zone for task cards.
export default function KanbanColumn({ column }: KanbanColumnProps) {
  // Map each column to its accent color (static classes for Tailwind extraction)
  const accentBarClass =
    column.id === "todo"
      ? "bg-[var(--brand)]"
      : column.id === "in-progress"
        ? "bg-amber-400"
        : "bg-emerald-500"; // done

  const accentDotClass = accentBarClass;

  return (
    <div className="w-80 shrink-0">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${accentDotClass}`} />
          <h3 className="text-sm font-semibold tracking-tight text-neutral-900">
            {column.title}
          </h3>
          <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600">
            {column.tasks.length}
          </span>
        </div>
        <button
          type="button"
          aria-label="Add task"
          className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-violet-50 text-[var(--brand)] ring-1 ring-violet-200 hover:bg-violet-100"
        >
          <Plus className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className={`mb-3 h-1 rounded-full ${accentBarClass}`} />
      <Droppable droppableId={column.id} type="TASK">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`min-h-[20px] rounded-2xl border p-3 pt-2 ${
              snapshot.isDraggingOver
                ? "border-neutral-300"
                : "border-neutral-200"
            } bg-[#F5F5F5]`}
          >
            {column.tasks.map((task, index) => (
              <KanbanCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
