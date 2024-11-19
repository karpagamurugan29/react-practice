import React, { useEffect, useState } from 'react'
import PaginationList from './PaginationList'

const DebouncingSearchInput = () => {
    const [searchValue, setSearchValue] = useState('a')
    const [result, setResult] = useState([])
    const [paginationData, sePaginationData] = useState([])
    const apiCall = async (payload) => {
        try {
            const result = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            if (result?.ok) {
                const data = await result?.json()
                const finterData = data?.filter((el) => el?.name?.toLowerCase().includes(payload?.toLowerCase()))
                if (finterData?.length > 0) {
                    setResult(finterData)
                } else {
                    alert('search not found')
                }
            }
        } catch (error) {
            console.log('error', error)
        }
    }


    useEffect(() => {
        const searchDebounce = setTimeout(() => {
            if (searchValue) {
                apiCall(searchValue)
            } else {
                setResult([])
            }
        }, 500)
        return () => {
            clearInterval(searchDebounce)
        }
    }, [searchValue])



    return (
        <div>
            <input type='text' onChange={((e) => setSearchValue(e?.target?.value))} />
            <ol className='mt-3'>
                {
                    paginationData?.map((el, ind) => (
                        <li className='mb-1' key={ind}>{el?.name}</li>
                    ))
                }
            </ol>
            <PaginationList
                data={result}
                sePaginationData={sePaginationData}
            />
        </div>
    )
}

export default DebouncingSearchInput
