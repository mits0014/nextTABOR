import React from 'react';


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          disabled={index + 1 === currentPage}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;