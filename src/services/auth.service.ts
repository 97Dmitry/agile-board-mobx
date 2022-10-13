import Api from "api";
import { LoginDto, User } from "api/types";

export class AuthService {
  async login(payload: LoginDto): Promise<User | undefined> {
    return await Api.post("login", { login: payload.login, password: payload.password });
  }
}
