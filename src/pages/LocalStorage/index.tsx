import { createContext } from "react";
import { TodoTaskLocalStorage } from "../../components/TodoTask/LocalStorage";
import { MyContext } from "../../components/MyContext";

export const LocalStoragePage = () => {
  return (
    <>
      <h2>LocalStorage</h2>
      <MyContext.Provider value="green">
        <TodoTaskLocalStorage />
      </MyContext.Provider>
    </>
  );
};
