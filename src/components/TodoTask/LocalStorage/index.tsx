import { TodoTaskStyled } from "../styles";

import { useState } from "react";
import { useLocalStorage } from "../../../store/useLocalStorage";

import { Card } from "../../Card";
import { ButtonSubmit } from "../../Button";

type ITask = {
  id: number;
  nameTask: string;
};

export const TodoTaskLocalStorage = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useLocalStorage<ITask[]>("tasks", []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const idRandom = (num: number) => Math.floor(Math.random() * num);
    const newTask = {
      id: idRandom(100),
      nameTask: task,
    };

    setTasks([...tasks, newTask]);
  }

  function deleteTask(id: number) {
    const filtedTasks = tasks.filter((task) => task.id !== id);
    setTasks([...filtedTasks]);
  }

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
