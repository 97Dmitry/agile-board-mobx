import Api from "api";
import { MainTasks } from "api/types";

export class MainTasksService {
  async tasks(): Promise<MainTasks | undefined> {
    return await Api.get("board_main_tasks");
  }
}  
