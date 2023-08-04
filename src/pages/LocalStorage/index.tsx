import { createContext } from "react";
import { TodoTaskLocalStorage } from "../../components/TodoTask/LocalStorage";

const ThemeContext = createContext("green");

export const LocalStoragePage = () => {
  return (
    <>
      <h2>LocalStorage</h2>
      <ThemeContext.Provider value="green">
        <TodoTaskLocalStorage />
      </ThemeContext.Provider>
    </>
  );
};
