import React from "react";
import Input from "./Input";

export default {
  title: "Component/Input",
  component: Input,
  argTypes: {
    placeholder: { control: "text" },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Input1",
};
