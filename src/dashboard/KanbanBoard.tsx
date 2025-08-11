import React from "react";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { useKanbanStore } from "@/lib/kanbanStore";
import KanbanColumn from "@/dashboard/KanbanColumn";

// Top-level Kanban board with drag-and-drop handling and state wiring.
export default function KanbanBoard() {
  const board = useKanbanStore((s) => s.board);
  const moveTask = useKanbanStore((s) => s.moveTask);
  const reorderTask = useKanbanStore((s) => s.reorderTask);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    // No change
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const fromColumnId = source.droppableId;
    const toColumnId = destination.droppableId;

    if (fromColumnId === toColumnId) {
      reorderTask(fromColumnId, source.index, destination.index);
    } else {
      moveTask(draggableId, fromColumnId, toColumnId, destination.index);
    }
  };

  return (
    <section aria-label="Kanban Board" className="w-full overflow-x-auto">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex w-max gap-4">
          {board.columns.map((column) => (
            <KanbanColumn key={column.id} column={column} />
          ))}
        </div>
      </DragDropContext>
    </section>
  );
}
