import React, { useEffect, useState } from 'react'

const Pagination = ({ data, setPaginationData }) => {
    const [page, setPage] = useState(1)
    const [itemPerPage, setItemPerPage] = useState(5)

    const totalPages = Math.ceil(data?.length / itemPerPage)


    useEffect(() => {
        const lastPage = page * itemPerPage
        const firstPage = lastPage - itemPerPage
        const result = data?.slice(firstPage, lastPage)
        setPaginationData(result)
    }, [data, page, itemPerPage, setPaginationData])

    console.log(totalPages)


    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><div className={`page-link ${page === 1 && 'disabled'}`} href="#" onClick={(() => setPage(page - 1))}>Previous</div></li>
                    {
                        [...Array(totalPages)]?.map((el, ind) => (
                            <li className="page-item"><div className="page-link" href="#" onClick={(() => setPage(ind + 1))}>{ind + 1}</div></li>
                        ))
                    }
                    <li className="page-item"><div className={`page-link ${page === itemPerPage && 'disabled'}`} href="#" onClick={(() => setPage(page + 1))}>Next</div></li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
