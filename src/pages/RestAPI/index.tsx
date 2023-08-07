import { MyContext } from "../../components/MyContext";
import { TodoTaskRestAPI } from "../../components/TodoTask/RestAPI";

export const RestAPIPage = () => {
  return (
    <>
      <h2>Rest API</h2>
      <MyContext.Provider value="orange">
        <TodoTaskRestAPI />
      </MyContext.Provider>
    </>
  );
};
