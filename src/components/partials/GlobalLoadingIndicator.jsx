import { useIsFetching } from "react-query";
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";

const override = css`
  display: inline-block;
  top: 50%;
  position: fixed;
  z-index: 1;
`;

const GlobalLoadingIndicator = () => {
  const isFetching = useIsFetching();

  return isFetching ? (
    <div className="text-center">
      <SyncLoader color={"#F5E30B"} css={override} size={20} />
    </div>
  ) : (
    ""
  );
};

export default GlobalLoadingIndicator;
