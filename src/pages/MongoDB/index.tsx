import { MyContext } from "../../components/MyContext";
import { TodoTaskMongoDB } from "../../components/TodoTask/MongoDB";

export const MongoDBPage = () => {
  return (
    <>
      <h2>MongoDB Atlas</h2>
      <MyContext.Provider value="red">
        <TodoTaskMongoDB />
      </MyContext.Provider>
    </>
  );
};
