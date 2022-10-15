import Api from "api";
import { Board } from "api/types";

export class BoardService {
  async board(): Promise<Board | undefined> {
    return await Api.get("board");
  }
}
