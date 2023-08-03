import { TodoTaskStyled } from "../styles";

import { useState, useEffect } from "react";
import axios from "axios";

import { Card } from "../../Card";
import { ButtonSubmit } from "../../Button";

type ITask = {
  id: number;
  nameTask: string;
};
const apiURL = "http://localhost:3000/";

export const TodoTaskRestAPI = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    axios
      .post(`${apiURL}api/tasks`, { nameTask: task })
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }

  function deleteTask(id: number) {
    axios.delete(`${apiURL}api/tasks/${id}`).then(() => {
      const filteredTasks = tasks.filter((task) => task.id !== id);
      setTasks(filteredTasks);
    });
  }

  useEffect(() => {
    axios
      .get(`${apiURL}api/tasks`)
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

      {tasks.map((todo) => {
        return (
          <Card key={todo.id} id={todo.id} deleteTask={deleteTask}>
            {todo.nameTask}
          </Card>
        );
      })}
    </TodoTaskStyled>
  );
};
