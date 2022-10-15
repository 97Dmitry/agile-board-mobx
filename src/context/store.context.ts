import { IsAuthorized } from "core/IsAuthorized";
import { IsLoading } from "core/IsLoading";
import React from "react";
import { AuthService } from "services/auth.service";
import { BoardService } from "services/board.service";
import { DevelopmentTasksService } from "services/developmentTasks.service";
import { MainTasksService } from "services/mainTasks.service";
import { UsersService } from "services/users.service";
import { AuthStore } from "store/auth.store";
import { BoardStore } from "store/board.store";
import { DevelopmentTasksStore } from "store/developmentTasks.store";
import { MainTasksStore } from "store/mainTasks.store";
import { UsersStore } from "store/users.store";

interface IStoreContext {
  authStore: AuthStore;
  usersStore: UsersStore;
  boardStore: BoardStore
  mainTasksStore: MainTasksStore;
  developmentTasksStore: DevelopmentTasksStore;
}

const authService = new AuthService();
const isAuthorizedState = new IsAuthorized;
const authStore = new AuthStore(authService, new IsLoading, isAuthorizedState);

const usersService = new UsersService();
const usersStore = new UsersStore(usersService, new IsLoading);

const boardService = new BoardService;
const boardStore = new BoardStore(boardService, new IsLoading);

const mainTasksService = new MainTasksService();
const mainTasksStore = new MainTasksStore(mainTasksService, new IsLoading);

const developmentTasksService = new DevelopmentTasksService();
const developmentTasksStore = new DevelopmentTasksStore(developmentTasksService, new IsLoading);


export const StoreContext = React.createContext<IStoreContext>({
  authStore, usersStore, boardStore, mainTasksStore, developmentTasksStore
});
