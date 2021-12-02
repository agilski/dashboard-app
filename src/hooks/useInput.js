import { useState } from "react";

export default function useInput(initialValues) {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (data) => setValues(data),
    (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    },
  ];
}
