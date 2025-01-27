import React, { useEffect, useState } from 'react'
import Pagination from './components/Pagination'

const PaginatedList = () => {
    const [data, setData] = useState([])
    const [paginationData, setPaginationData] = useState([])
    const fetchData = async (api) => {
        try {
            const result = await fetch(api)
            if (result?.status === 200) {
                const tempData = await result?.json()
                setData(tempData?.users)
            } else {
                alert('User list not fetch')
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (data?.length === 0) {
            fetchData('https://dummyjson.com/users')
        }
    }, [data])

    return (
        <div>
            <ol>
                {paginationData?.map((el, ind) => (
                    <li key={ind}>{el?.username}</li>
                ))}
            </ol>
            <Pagination data={data} setPaginationData={setPaginationData} />
        </div>
    )
}

export default PaginatedList
