import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

type TPaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

const Pagination: React.FC<TPaginationProps> = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={2}
      previousLabel="<"
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
