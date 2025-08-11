import React from "react";
import { Droppable } from "@hello-pangea/dnd";
import { Column } from "@/lib/types";
import KanbanCard from "@/dashboard/KanbanCard";

type KanbanColumnProps = {
  column: Column;
};

// A single column containing a droppable zone for task cards.
export default function KanbanColumn({ column }: KanbanColumnProps) {
  return (
    <div className="w-72 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
          {column.title}
        </h3>
        <span className="text-xs text-neutral-500">{column.tasks.length}</span>
      </div>
      <Droppable droppableId={column.id} type="TASK">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`min-h-[20px] rounded-lg border border-dashed p-2 ${snapshot.isDraggingOver ? "border-neutral-400 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900/50" : "border-neutral-200 dark:border-neutral-800"}`}
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
