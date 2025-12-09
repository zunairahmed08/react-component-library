import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

const Button = ({ text, onClick, type = "primary" }) => {
  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string
};

export default Button;
