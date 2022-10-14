import { StoreContext } from "context/store.context";
import { useContext } from "react";

export default function useStore() {
  return useContext(StoreContext);
}
