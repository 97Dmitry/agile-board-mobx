import Api from "api";
import { DevelopmentTasks } from "api/types";

export class DevelopmentTasksService {
  async tasks(): Promise<DevelopmentTasks | undefined> {
    return await Api.get("board_development_tasks");
  }
}  
