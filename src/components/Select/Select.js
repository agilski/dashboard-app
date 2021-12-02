import React from "react";
import PropTypes from "prop-types";
import { Select as SelectUI } from "semantic-ui-react";

export default function Select({
  name,
  value,
  placeholder,
  options,
  onChange,
}) {
  return (
    <SelectUI
      name={name}
      value={value}
      placeholder={placeholder}
      options={options}
      onChange={onChange}
    />
  );
}

Select.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  name: null,
  placeholder: "Select",
  options: [
    { key: "option 1", value: "option 1", text: "option 1" },
    { key: "option 2", value: "option 2", text: "option 2" },
  ],
  onChange: undefined,
};
