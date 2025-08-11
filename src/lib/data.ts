import { BoardData, ProjectKey } from '@/lib/types';

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

// Optional: predefined per-project seeds in case API fails
export const initialProjectBoards: Record<ProjectKey, BoardData> = {
  'mobile-app': initialBoardData,
  'website-redesign': {
    columns: [
      { id: 'todo', title: 'To Do', tasks: [ { id: 'wr1', title: 'Audit pages', comments: 3, files: 1 } ] },
      { id: 'in-progress', title: 'In Progress', tasks: [ { id: 'wr2', title: 'New hero layout', comments: 5, files: 0 } ] },
      { id: 'done', title: 'Done', tasks: [ { id: 'wr3', title: 'Typography scale', comments: 2, files: 4 } ] },
    ],
  },
  'design-system': {
    columns: [
      { id: 'todo', title: 'To Do', tasks: [ { id: 'ds1', title: 'Button specs', comments: 4, files: 2 } ] },
      { id: 'in-progress', title: 'In Progress', tasks: [ { id: 'ds2', title: 'Tokens v1', comments: 6, files: 1 } ] },
      { id: 'done', title: 'Done', tasks: [ { id: 'ds3', title: 'Icon set', comments: 1, files: 3 } ] },
    ],
  },
  'wireframes': {
    columns: [
      { id: 'todo', title: 'To Do', tasks: [ { id: 'wf1', title: 'User flows', comments: 2, files: 0 } ] },
      { id: 'in-progress', title: 'In Progress', tasks: [ { id: 'wf2', title: 'Dashboard layout', comments: 3, files: 1 } ] },
      { id: 'done', title: 'Done', tasks: [ { id: 'wf3', title: 'Onboarding', comments: 2, files: 1 } ] },
    ],
  },
};


