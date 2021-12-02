import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Table as TableUI } from "semantic-ui-react";
import Pagination from "../Pagination/Pagination";
import { SortContext } from "../../pages/Home";

export default function Table({
  data,
  column,
  totalPage,
  activePage,
  onPageChange,
  onClickHeader,
}) {
  const dataKey = [];
  const sortState = useContext(SortContext);

  const tableHeader = column.map((item) => {
    dataKey.push(item.dataKey);
    return (
      <TableUI.HeaderCell
        sorted={sortState.sortBy === item.header ? sortState.sortOrder : null}
        name={item.header}
        onClick={onClickHeader}
      >
        {item.header}
      </TableUI.HeaderCell>
    );
  });

  const tableData = data.map((item) => {
    return <TableUI.Row>{handleTableCell(item)}</TableUI.Row>;
  });

  function handleTableCell(cell) {
    return dataKey.map((item) => {
      return <TableUI.Cell>{cell[item]}</TableUI.Cell>;
    });
  }

  return (
    <>
      <TableUI sortable celled>
        <TableUI.Header>
          <TableUI.Row>{tableHeader}</TableUI.Row>
        </TableUI.Header>
        <TableUI.Body>{tableData}</TableUI.Body>
      </TableUI>
      <Pagination
        activePage={activePage}
        totalPage={totalPage}
        onPageChange={onPageChange}
      />
    </>
  );
}

Table.propTypes = {
  data: PropTypes.array,
  column: PropTypes.array,
  onPageChange: PropTypes.func,
};

Table.defaultProps = {
  data: [
    {
      dataKey1: "value1",
      dataKey2: "value2",
      dataKey3: "value3",
    },
    {
      dataKey1: "value1",
      dataKey2: "value2",
      dataKey3: "value3",
    },
    {
      dataKey1: "value1",
      dataKey2: "value2",
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
  onPageChange: undefined,
};
