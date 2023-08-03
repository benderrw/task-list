import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  height: 50px;
  padding: 7px 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  border-left: 10px solid #80cb27;
  border-radius: 10px;
  margin-top: 20px;

  p {
    font-size: 16px;
    color: #9f9fa8;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .btn-delete {
    border: none;
    padding: 3px 5px;
    background-color: transparent;
    cursor: pointer;
  }
`;
