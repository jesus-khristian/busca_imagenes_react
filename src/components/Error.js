import React from "react";
import PropTypes from "prop-types";

const Error = ({ message }) => {
  return <p className="alert alert-danger  text-center mx-auto">{message}</p>;
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
