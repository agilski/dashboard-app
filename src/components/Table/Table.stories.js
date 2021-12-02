import React from "react";
import Table from "./Table";

export default {
  title: "Component/Table",
  component: Table,
};

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      dataKey1: "value1",
      dataKey2: "value1",
      dataKey3: "value1",
    },
    {
      dataKey1: "value2",
      dataKey2: "value2",
      dataKey3: "value2",
    },
    {
      dataKey1: "value3",
      dataKey2: "value3",
      dataKey3: "value3",
    },
  ],
  column: [
    {
      header: "Header1",
      dataKey: "dataKey1",
    },
    {
      header: "Header2",
      dataKey: "dataKey2",
    },
    {
      header: "Header3",
      dataKey: "dataKey3",
    },
  ],
};
