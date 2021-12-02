import React from "react";
import PropTypes from "prop-types";
import { Pagination as PaginationUI } from "semantic-ui-react";

export default function Pagination({
  activePage,
  defaultPage,
  totalPage,
  onPageChange,
}) {
  return (
    <PaginationUI
      activePage={activePage}
      defaultActivePage={defaultPage}
      totalPages={totalPage}
      onPageChange={onPageChange}
    />
  );
}

Pagination.propTypes = {
  defaultPage: PropTypes.number,
  totalPage: PropTypes.number,
  onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
  defaultPage: 1,
  totalPage: 10,
  onPageChange: undefined,
};
