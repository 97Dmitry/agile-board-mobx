import { MainTasks } from "api/types";
import { IsLoading } from "core/IsLoading";
import { makeAutoObservable, runInAction } from "mobx";
import { DevelopmentTasksService } from "services/developmentTasks.service";
import { errorHandler } from "utils/errorHandler";

export class DevelopmentTasksStore {
  constructor(private readonly tasksService: DevelopmentTasksService, private readonly isLoadingState: IsLoading) {
    makeAutoObservable(this);
  }

  private _tasks: MainTasks = [];

  get isLoading() {
    return this.isLoadingState.value;
  }

  get developmentTasks(): MainTasks {
    return this._tasks;
  }

  getDevelopmentTasks = async () => {
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
