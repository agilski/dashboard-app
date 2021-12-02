import React from "react";
import PropTypes from "prop-types";
import { Button as ButtonUI } from "semantic-ui-react";

export default function Button({ label, color, onClick }) {
  return (
    <ButtonUI color={color} onClick={onClick}>
      {label}
    </ButtonUI>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: "grey",
  label: "Button1",
  onClick: undefined,
};
