export type Task = {
  id: string;
  content: string;
};

export type Column = {
  id: string;
  title: string;
  taskIds: string[];
};

export type BoardData = {
  tasks: Task[];
  columns: Column[];
  columnOrder: string[];
};
