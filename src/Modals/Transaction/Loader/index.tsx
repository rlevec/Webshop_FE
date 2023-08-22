import {FC, ReactElement} from "react";

import {StyledTransactionLoader} from "./styledTransactionLoader";

const TransactionLoader:FC = (): ReactElement => {
  return (
      <StyledTransactionLoader>
          <div className="spinner-container">
              <div className="spinner">
              </div>
              <div className="spinner-text-content">Loading</div>
          </div>
      </StyledTransactionLoader>
  )
}

export default TransactionLoader