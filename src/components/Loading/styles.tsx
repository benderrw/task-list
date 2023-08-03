import styled, { keyframes } from "styled-components";

const inifiteRotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: rgba(0, 0, 0, 0.7);

  .loading-spinner {
    position: absolute;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    width: 100px;
    height: 100px;
    border: 1px solid #fff;
    border-radius: 50%;
  }

  .loading-spinner__transition {
    width: 101px;
    height: 101px;
    margin-left: -1px;
    margin-top: -1px;
    border: solid #80cb27;
    border-top-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 4px;
    border-right-width: 0px;
    border-radius: 50%;
    animation: ${inifiteRotation} 2s linear infinite;
  }
`;
