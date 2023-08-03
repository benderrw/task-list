import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 100%;
  height: 45px;
  background-color: #80cb27;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.25s box-shadow ease;

  &:hover {
    box-shadow: 0 1px 3px #666;
  }
`;
