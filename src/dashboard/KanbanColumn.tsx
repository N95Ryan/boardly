import React from "react";
import { Droppable } from "@hello-pangea/dnd";
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
      <div className="mb-3 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-semibold tracking-tight text-neutral-800">
          <span className={`h-1.5 w-1.5 rounded-full ${accentDotClass}`} />
          {column.title}
        </h3>
        <span className="text-xs text-neutral-500">{column.tasks.length}</span>
      </div>
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
            <div
              className={`mb-2 h-1.5 w-full rounded-full ${accentBarClass}`}
            />
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
