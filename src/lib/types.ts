export type Task = {
  id: string;
  title: string;
  description?: string;
  comments?: number;
  files?: number;
};

export type Column = {
  id: string;
  title: string;
  tasks: Task[];
};

export type BoardData = {
  columns: Column[];
};

export type ProjectKey = 'mobile-app' | 'website-redesign' | 'design-system' | 'wireframes';


