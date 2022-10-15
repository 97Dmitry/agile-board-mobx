import { MainTasks } from "api/types";
import { IsLoading } from "core/IsLoading";
import { makeAutoObservable, runInAction } from "mobx";
import { MainTasksService } from "services/mainTasks.service";
import { errorHandler } from "utils/errorHandler";

export class MainTasksStore {
  constructor(private readonly tasksService: MainTasksService, private readonly isLoadingState: IsLoading) {
    makeAutoObservable(this);
  }

  private _tasks: MainTasks = [];

  get isLoading() {
    return this.isLoadingState.value;
  }

  get mainTasks(): MainTasks {
    return this._tasks;
  }

  getMainTasks = async () => {
    this.isLoadingState.setTrue();
    try {
      const tasks = await this.tasksService.tasks();
      tasks && runInAction(() => (this._tasks = tasks));
    } catch (error) {
      errorHandler(error);
    } finally {
      this.isLoadingState.setFalse();
    }
  };
};
