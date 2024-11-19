import React, { useEffect, useState } from 'react';

const PaginationList = ({ data, setPaginationData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(10);

  const totalPage = Math.ceil(data?.length / itemPerPage);

  useEffect(() => {
    const lastPage = currentPage * itemPerPage;
    const firstPage = lastPage - itemPerPage;
    const currentItem = data?.slice(firstPage, lastPage);
    setPaginationData(currentItem); // Pass current items to parent
  }, [setPaginationData, currentPage, itemPerPage, data]);

  const handleChangePage = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPage) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <div className="page-link" onClick={() => handleChangePage(currentPage - 1)}>
              Previous
            </div>
          </li>
          {Array.from({ length: totalPage }).map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <div className="page-link" onClick={() => handleChangePage(index + 1)}>
                {index + 1}
              </div>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPage ? 'disabled' : ''}`}>
            <div className="page-link" onClick={() => handleChangePage(currentPage + 1)}>
              Next
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PaginationList;
