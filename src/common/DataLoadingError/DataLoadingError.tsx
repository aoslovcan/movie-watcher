import React from 'react';
import Loader from "../Loader/Loader";

type DataLoadingErrorProps = {
  isLoading?: boolean;
  errorMsg?: string;
  children: React.ReactNode;
}

const DataLoadingError = ({ isLoading, errorMsg, children } : DataLoadingErrorProps) => {
  if (isLoading) {
    return   <div className="data-loading-container">
      <Loader/>
    </div>;
  }

  if (errorMsg) {
    return <div>Error: {errorMsg}</div>;
  }

  return(
    <div>
      {children || null}
    </div>
  );
};

export default DataLoadingError;
