import React from "react";
import Loader from "./Loader";

export default {
  title: "Component/Loader",
  component: Loader,
  argTypes: {
    active: { control: "boolean" },
  },
};

const Template = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {
  active: true,
};
