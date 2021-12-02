import React from "react";
import Pagination from "./Pagination";

export default {
  title: "Component/Pagination",
  component: Pagination,
};

const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultPage: 1,
  totalPage: 10,
};
