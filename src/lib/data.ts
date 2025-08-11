import { BoardData } from '@/lib/types';

// Mocked Kanban data used for initial render.
export const initialBoardData: BoardData = {
  columns: [
    {
      id: 'todo',
      title: 'To Do',
      tasks: [
        { id: 't1', title: 'Design login form', comments: 12, files: 0 },
        { id: 't2', title: 'Create color tokens', comments: 8, files: 2 },
      ],
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      tasks: [
        { id: 't3', title: 'Implement Sidebar', comments: 9, files: 3 },
      ],
    },
    {
      id: 'done',
      title: 'Done',
      tasks: [
        { id: 't4', title: 'Project setup', comments: 12, files: 15 },
      ],
    },
  ],
};


