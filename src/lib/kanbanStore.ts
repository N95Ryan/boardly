import { create } from 'zustand';
import { BoardData, ProjectKey, UserAvatar } from '@/lib/types';
import { initialBoardData, initialProjectBoards } from '@/lib/data';
import { fetchAvatarsFromDummyJSON, fetchBoardDataFromDummyJSON } from '@/lib/dummyjson';

type KanbanState = {
  board: BoardData;
  currentProject: ProjectKey;
  participants: UserAvatar[];
  moveTask: (taskId: string, fromColumnId: string, toColumnId: string, toIndex: number) => void;
  reorderTask: (columnId: string, fromIndex: number, toIndex: number) => void;
  /**
   * UI-level filter that controls which tasks/columns are visible by status.
   * Using the column ids as the status keys keeps things simple and aligned with data.
   */
  statusFilter: 'all' | 'todo' | 'in-progress' | 'done';
  setStatusFilter: (filter: KanbanState['statusFilter']) => void;
  /**
   * Network-related state to hydrate the board from DummyJSON once per session.
   */
  isLoadingFromAPI: boolean;
  hasHydratedFromAPI: boolean;
  error: string | null;
  loadFromDummyJSON: () => Promise<void>;
  switchProject: (project: ProjectKey) => void;
};

// In-memory store for Kanban board. The state survives route navigation
// because Zustand stores state at the module level and does not reset
// across client-side page transitions.
export const useKanbanStore = create<KanbanState>((set, get) => ({
  board: initialBoardData,
  currentProject: 'mobile-app',
  participants: [],
  // Keep the active filter in the store so it persists across navigation
  statusFilter: 'all',
  setStatusFilter: (filter) => set({ statusFilter: filter }),
  isLoadingFromAPI: false,
  hasHydratedFromAPI: false,
  error: null,
  /**
   * Hydrates the board from DummyJSON once. Falls back to local mock data on failure.
   */
  loadFromDummyJSON: async () => {
    const { hasHydratedFromAPI, isLoadingFromAPI } = get();
    if (hasHydratedFromAPI || isLoadingFromAPI) return;
    set({ isLoadingFromAPI: true, error: null });
    try {
      const [remote, avatars] = await Promise.all([
        (async () => {
          const project = get().currentProject;
          const offsetMap: Record<ProjectKey, number> = {
            'mobile-app': 0,
            'website-redesign': 50,
            'design-system': 100,
            'wireframes': 150,
          };
          return fetchBoardDataFromDummyJSON(offsetMap[project] ?? 0, 30);
        })(),
        // Offset avatars by project so each project gets a different cohort
        (async () => {
          const project = get().currentProject;
          const offsetMap: Record<ProjectKey, number> = {
            'mobile-app': 0,
            'website-redesign': 10,
            'design-system': 20,
            'wireframes': 30,
          };
          return fetchAvatarsFromDummyJSON(offsetMap[project] ?? 0, 6);
        })(),
      ]);
      set({ board: remote, participants: avatars, hasHydratedFromAPI: true, isLoadingFromAPI: false });
    } catch (err) {
      // Keep local data and expose a minimal error string for potential UI hooks
      const message = err instanceof Error ? err.message : 'Unknown error';
      set({ error: message, isLoadingFromAPI: false, hasHydratedFromAPI: false });
    }
  },
  /**
   * Switch between projects. Resets filters and hydrates from local seeds first.
   * Optionally re-hydrate from API if desired (kept simple for now).
   */
  switchProject: (project) => {
    const seed = initialProjectBoards[project] ?? initialBoardData;
    set({
      currentProject: project,
      board: seed,
      participants: [],
      statusFilter: 'all',
      // Reset API hydration for a fresh experience per project
      hasHydratedFromAPI: false,
      error: null,
    });
  },
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


