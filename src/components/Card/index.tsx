import { CardStyled } from "./styles";

type ICard = {
  id: number;
  children: string;
  deleteTask(id: number): void;
};

export const Card = ({ id, children, deleteTask }: ICard) => {
  return (
    <CardStyled className="card">
      <p>{children}</p>
      <button className="btn-delete" onClick={() => deleteTask(id)}>
        X
      </button>
    </CardStyled>
  );
};
