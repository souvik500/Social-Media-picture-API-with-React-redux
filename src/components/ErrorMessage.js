import React from "react";
import "./styles/ErrorMessage.css";

const ErrorMessage = ({ message }) => (
  <div className="error">Error: {message}</div>
);

export default ErrorMessage;
