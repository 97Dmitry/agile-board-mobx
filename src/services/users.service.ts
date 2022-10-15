import Api from "api";
import { User } from "api/types";

export class UsersService {
  async users(): Promise<Array<User> | undefined> {
    return await Api.get("users");
  }
}
