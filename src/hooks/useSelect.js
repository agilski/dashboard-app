import { useState } from "react";

export default function useSelect(initialValues) {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (data) => setValues(data),
    (e, value) => {
      setValues({ ...values, [value.name]: value.value });
    },
  ];
}
