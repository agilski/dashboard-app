import React from "react";
import PropTypes from "prop-types";
import { Input as InputUI } from "semantic-ui-react";

export default function Input({
  name,
  value,
  icon,
  placeholder,
  onChange,
  onActionClick,
}) {
  return (
    <InputUI
      name={name}
      value={value}
      action={
        icon
          ? {
              icon,
              onClick: onActionClick,
            }
          : null
      }
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onActionClick: PropTypes.func,
};

Input.defaultProps = {
  name: null,
  icon: null,
  placeholder: null,
  onChange: undefined,
  onActionClick: undefined,
};
