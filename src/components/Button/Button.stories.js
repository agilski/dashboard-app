import React from "react";
import Button from "./Button";

export default {
  title: "Component/Button",
  component: Button,
  argTypes: {
    color: { control: "text" },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Button1",
  color: "grey",
};
