import styled from "styled-components";

export const TodoTaskStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 85%;
  padding: 20px 30px;
  margin: 35px auto 0;
  border: 1px solid #666;
  border-radius: 5%;

  @media (min-width: 500px) {
    max-width: 350px;
  }

  .line {
    border: 1px solid #ededf2;
    margin: 25px 0 0 0;
  }

  p {
    font-size: 16px;
    color: #9f9fa8;
    font-weight: 600;
  }

  input {
    width: 100%;
    height: 45px;
    margin-bottom: 25px;
    padding-left: 20px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }

  .input::-webkit-input-placeholder {
    font-size: 12px;
    font-weight: 500;
    color: #b6b6b7;
  }
`;
