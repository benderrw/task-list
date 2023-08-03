import { ButtonStyled } from "./styles";

type IButton = {
  children: string;
  onClick(): void;
};

export const Button = ({ children, onClick }: IButton) => {
  return <ButtonStyled onClick={() => onClick}>{children}</ButtonStyled>;
};

//----------

type IButtonSubmit = {
  API?: boolean;
  children: string;
};

export const ButtonSubmit = ({ children }: IButtonSubmit) => {
  return <ButtonStyled type="submit">{children}</ButtonStyled>;
};
