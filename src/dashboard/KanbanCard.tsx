import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import Card from "@/shared/Card";
import { MoreHorizontal, MessageCircle, Paperclip } from "lucide-react";
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
            className={`mb-2 ${snapshot.isDragging ? "ring-2 ring-neutral-300" : ""}`}
          >
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-medium leading-5 text-neutral-900">
                {task.title}
              </p>
              <button
                aria-label="More"
                className="rounded p-1 text-neutral-500 hover:bg-neutral-100"
              >
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-2 flex items-center gap-4 text-xs text-neutral-500">
              <span className="inline-flex items-center gap-1">
                <MessageCircle className="h-3.5 w-3.5" /> {task.comments ?? 0}{" "}
                comments
              </span>
              <span className="inline-flex items-center gap-1">
                <Paperclip className="h-3.5 w-3.5" /> {task.files ?? 0} files
              </span>
            </div>
          </Card>
        </div>
      )}
    </Draggable>
  );
}
