import { LoadingStyled } from "./styles";

export const Loading = () => {
  return (
    <LoadingStyled className="loading">
      <div className="loading-spinner">
        <div className="loading-spinner__transition"></div>
      </div>
    </LoadingStyled>
  );
};
