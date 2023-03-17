import React, { useState } from 'react';

const ErrorBoundary = (props) => {
  const [hasError, setHasError] = useState(false);

  const handleErrors = (error, errorInfo) => {
    console.error(error, errorInfo);
    setHasError(true);
  };

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return (
    <React.Fragment>
      <ErrorBoundary onError={handleErrors} />
      {props.children}
    </React.Fragment>
  );
};

export default ErrorBoundary;
