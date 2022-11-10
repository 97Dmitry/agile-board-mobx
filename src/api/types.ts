export type User = {
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
};

export type LoginDto = {
  login: string;
  password: string;
};

export type Task = {
  id: string;
  title: string;
  description: string;
  assignee: string;
};

export type BoardSection = {
  id: string;
  title: string;
};

export enum BoardIds {
  MAIN = "MAIN",
  DEVELOPMENT = "DEVELOPMENT",
}

export type Board = Array<{
  id: BoardIds;
  title: string;
  sections: Array<BoardSection>;
}>;

export type MainTasks = Array<{ id: string; tasks: Array<Task> }>;

export type DevelopmentTasks = Array<{ id: string; tasks: Array<Task> }>;
