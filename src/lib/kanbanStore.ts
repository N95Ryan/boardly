import { create } from 'zustand';
import { BoardData } from '@/lib/types';
import { initialBoardData } from '@/lib/data';

type KanbanState = {
  board: BoardData;
  moveTask: (taskId: string, fromColumnId: string, toColumnId: string, toIndex: number) => void;
  reorderTask: (columnId: string, fromIndex: number, toIndex: number) => void;
  /**
   * UI-level filter that controls which tasks/columns are visible by status.
   * Using the column ids as the status keys keeps things simple and aligned with data.
   */
  statusFilter: 'all' | 'todo' | 'in-progress' | 'done';
  setStatusFilter: (filter: KanbanState['statusFilter']) => void;
};

// In-memory store for Kanban board. The state survives route navigation
// because Zustand stores state at the module level and does not reset
// across client-side page transitions.
export const useKanbanStore = create<KanbanState>((set) => ({
  board: initialBoardData,
  // Keep the active filter in the store so it persists across navigation
  statusFilter: 'all',
  setStatusFilter: (filter) => set({ statusFilter: filter }),
  moveTask: (taskId, fromColumnId, toColumnId, toIndex) =>
    set((state) => {
      const boardCopy: BoardData = {
        columns: state.board.columns.map((c) => ({ ...c, tasks: [...c.tasks] })),
      };

      const fromCol = boardCopy.columns.find((c) => c.id === fromColumnId);
      const toCol = boardCopy.columns.find((c) => c.id === toColumnId);
      if (!fromCol || !toCol) return state;

      const fromIdx = fromCol.tasks.findIndex((t) => t.id === taskId);
      if (fromIdx === -1) return state;
      const [task] = fromCol.tasks.splice(fromIdx, 1);
      toCol.tasks.splice(toIndex, 0, task);
      return { board: boardCopy };
    }),
  reorderTask: (columnId, fromIndex, toIndex) =>
    set((state) => {
      const boardCopy: BoardData = {
        columns: state.board.columns.map((c) => ({ ...c, tasks: [...c.tasks] })),
      };
      const col = boardCopy.columns.find((c) => c.id === columnId);
      if (!col) return state;
      const [task] = col.tasks.splice(fromIndex, 1);
      col.tasks.splice(toIndex, 0, task);
      return { board: boardCopy };
    }),
}));


