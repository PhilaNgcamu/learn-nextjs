"use client";

const ErrorBoundary = ({ error }) => {
  return (
    <div>
      {error.message}{" "}
      <button onClick={() => window.location.reload()}>Try Again</button>{" "}
    </div>
  );
};

export default ErrorBoundary;
