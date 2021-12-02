import React from "react";
import Select from "./Select";

export default {
  title: "Component/Select",
  component: Select,
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Select",
  options: [
    { key: "option 1", value: "option 1", text: "option 1" },
    { key: "option 2", value: "option 2", text: "option 2" },
  ],
};
