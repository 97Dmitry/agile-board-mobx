import React from "react";
import { AuthService } from "services/auth.service";
import { AuthStore } from "store/auth.store";
import { UsersStore } from "store/users.store";

interface IStoreContext {
  authStore: AuthStore;
  usersStore: UsersStore;
}

const authService = new AuthService();

const authStore = new AuthStore(authService);
const usersStore = new UsersStore();

export const StoreContext = React.createContext<IStoreContext>({ authStore, usersStore });
