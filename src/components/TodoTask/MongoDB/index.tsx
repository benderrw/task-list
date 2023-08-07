import { TodoTaskStyled } from "../styles";

import { useState, useEffect } from "react";
import axios from "axios";

import { Card } from "../../Card";
import { ButtonSubmit } from "../../Button";

const apiURL = "http://localhost:8000/";
const api = axios.create({ baseURL: apiURL });

type ITask = {
  id: number;
  nameTask: string;
};

export const TodoTaskMongoDB = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    axios
      .post("api/tasks", { nameTask: task })
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }

  function deleteTask(id: number) {
    axios.delete(`api/tasks/${id}`).then(() => {
      const filteredTasks = tasks.filter((task) => task.id !== id);
      setTasks(filteredTasks);
    });
  }

  useEffect(() => {
    console.log("api", api);
    api
      .get("api/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <TodoTaskStyled className="todo-task">
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            placeholder="Escrever task..."
            name="task"
            className="input"
            onChange={(event) => setTask(event.target.value)}
            autoFocus
          />
          <ButtonSubmit>Adicionar Task</ButtonSubmit>
        </form>
      </header>

      {!!tasks.length && <div className="line"></div>}

      {tasks.map(({ id, nameTask }) => {
        return (
          <Card key={id} id={id} deleteTask={deleteTask}>
            {nameTask}
          </Card>
        );
      })}
    </TodoTaskStyled>
  );
};
