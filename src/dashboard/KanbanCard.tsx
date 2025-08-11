import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import Card from "@/shared/Card";
import { Task } from "@/lib/types";

type KanbanCardProps = {
  task: Task;
  index: number;
};

// Individual task card inside a column, draggable by handle.
export default function KanbanCard({ task, index }: KanbanCardProps) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="select-none"
        >
          <Card
            className={`mb-2 ${snapshot.isDragging ? "ring-2 ring-neutral-300 dark:ring-neutral-700" : ""}`}
          >
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              {task.title}
            </p>
          </Card>
        </div>
      )}
    </Draggable>
  );
}
