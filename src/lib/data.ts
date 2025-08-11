import { BoardData } from '@/lib/types';

// Mocked Kanban data used for initial render.
export const initialBoardData: BoardData = {
  columns: [
    {
      id: 'todo',
      title: 'To Do',
      tasks: [
        { id: 't1', title: 'Design login form' },
        { id: 't2', title: 'Create color tokens' },
      ],
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      tasks: [
        { id: 't3', title: 'Implement Sidebar' },
      ],
    },
    {
      id: 'done',
      title: 'Done',
      tasks: [
        { id: 't4', title: 'Project setup' },
      ],
    },
  ],
};


